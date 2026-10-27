import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient, getOpenAIModel, isOpenAIConfigured } from '@/lib/openai';
import {
  extractTextFromPdf,
  extractTextFromImage,
  parseLabReportText,
  generateExplanationsForRecords
} from '@/lib/report-parser';
import {
  ImportedTestItem,
  ExtractedReportData,
  ImportedReportAnalysisResult,
  Language
} from '@/lib/types';

// Max file size: 10 MB
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_MIME_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png'];

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';

    // Check if this is a JSON request for the explanation step
    if (contentType.includes('application/json')) {
      const body = await req.json();
      return handleExplainRequest(body);
    }

    // Otherwise, handle multipart/form-data
    const formData = await req.formData();
    const action = (formData.get('action') as string) || 'extract';
    const rawLang = formData.get('language') as string;
    const language: Language = ['en', 'hi', 'mr'].includes(rawLang) ? (rawLang as Language) : 'en';

    // If action is "explain" via FormData
    const confirmedTestsJson = formData.get('confirmedTests') as string | null;
    if (action === 'explain' || confirmedTestsJson) {
      const fileName = (formData.get('fileName') as string) || 'Lab Report';
      let confirmedTests: ImportedTestItem[] = [];
      try {
        confirmedTests = confirmedTestsJson ? JSON.parse(confirmedTestsJson) : [];
      } catch {
        return NextResponse.json({ error: 'Invalid confirmed test data' }, { status: 400 });
      }

      return handleExplainRecords(confirmedTests, language, fileName);
    }

    // Action is "extract" or direct upload
    const file = formData.get('file') as File | null;

    // 1. Validate File Existence
    if (!file) {
      const msg =
        language === 'hi'
          ? 'कृपया विश्लेषण के लिए एक लैब रिपोर्ट फ़ाइल चुनें।'
          : language === 'mr'
          ? 'कृपया विश्लेषणासाठी लॅब अहवाल फाईल निवडा.'
          : 'Please select a lab report file to analyze.';
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    // 2. Validate File Size (Max 10 MB)
    if (file.size > MAX_FILE_SIZE) {
      const msg =
        language === 'hi'
          ? `फ़ाइल का आकार 10 MB से अधिक है (${(file.size / (1024 * 1024)).toFixed(1)} MB)। कृपया 10 MB से छोटी फ़ाइल अपलोड करें।`
          : language === 'mr'
          ? `फाईलचा आकार १० MB पेक्षा जास्त आहे (${(file.size / (1024 * 1024)).toFixed(1)} MB). कृपया १० MB पेक्षा लहान फाईल अपलोड करा.`
          : `File size exceeds the 10 MB limit (${(file.size / (1024 * 1024)).toFixed(1)} MB). Please upload a file smaller than 10 MB.`;
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    if (file.size === 0) {
      const msg =
        language === 'hi'
          ? 'चुनी गई फ़ाइल खाली है। कृपया एक वैध लैब रिपोर्ट अपलोड करें।'
          : language === 'mr'
          ? 'निवडलेली फाईल रिकामी आहे. कृपया वैध अहवाल अपलोड करा.'
          : 'The selected file is empty. Please upload a valid lab report.';
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    // 3. Validate File Format
    const fileName = file.name || 'lab_report';
    const lowerName = fileName.toLowerCase();
    const hasValidExt = ALLOWED_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
    const isMimeAllowed = ALLOWED_MIME_TYPES.includes(file.type.toLowerCase()) || hasValidExt;

    if (!isMimeAllowed) {
      const msg =
        language === 'hi'
          ? 'असमर्थित फ़ाइल प्रारूप। कृपया केवल PDF, JPG या PNG दस्तावेज़ अपलोड करें।'
          : language === 'mr'
          ? 'असमर्थित फाईल प्रकार. कृपया फक्त PDF, JPG किंवा PNG फाईल अपलोड करा.'
          : 'Unsupported file format. Please upload a PDF, JPG, or PNG document.';
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    // 4. Read File in Memory (Zero Permanent Storage)
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const isPdf = lowerName.endsWith('.pdf') || file.type === 'application/pdf';

    let extractedText = '';
    let extractionMethod: 'pdf_text_structured' | 'ocr_tesseract' | 'vision_multimodal' = 'pdf_text_structured';
    let totalPages = 1;

    // 5. Extract Text from File
    if (isPdf) {
      try {
        const pdfResult = await extractTextFromPdf(buffer);
        extractedText = pdfResult.text;
        totalPages = pdfResult.pages.length;
        extractionMethod = 'pdf_text_structured';

        // If PDF text extraction yielded almost nothing (scanned PDF without OCR layer), try Tesseract or report scanned PDF
        if (extractedText.length < 20) {
          console.warn('PDF text extraction produced minimal text; scanned PDF detected.');
        }
      } catch (pdfErr) {
        console.warn('PDF text extraction error:', pdfErr);
      }
    } else {
      // Image file (JPG, PNG) - Run Tesseract OCR
      try {
        const imageResult = await extractTextFromImage(buffer, file.type);
        extractedText = imageResult.text;
        extractionMethod = 'ocr_tesseract';
      } catch (ocrErr) {
        console.warn('Image OCR error:', ocrErr);
      }
    }

    const openai = getOpenAIClient();

    // 6. If OpenAI is configured and active, we can run multi-modal vision or AI extraction
    if (openai && isOpenAIConfigured()) {
      try {
        const model = getOpenAIModel();
        const systemPrompt = `You are an expert diagnostic laboratory document reader for IMD Care.
Your ONLY task is to extract exact laboratory test rows printed on this document into structured JSON.
CRITICAL EXTRACTION RULES:
1. Extract ALL test rows printed on the report.
2. testName: exact test parameter name.
3. resultValue: exact printed result string (e.g., "10.8", "1.8", "Negative", "Trace", "1:160"). NEVER alter decimals or signs.
4. unit: exact printed unit (e.g., "g/dL", "mg/dL", "%"). If no unit printed, leave empty "".
5. referenceRange: exact printed reference interval. If NO reference range printed, set EXACTLY "Not specified on report". NEVER invent or substitute standard ranges!
6. labFlag: any printed flag like "High", "Low", "Normal", "Abnormal", "Critical", "*", or null if none.
7. If document is unreadable, blurry, or not a lab report, set "isUnreadable": true with "unreadableReason".
8. DO NOT invent missing values or standard ranges. Output strictly what is printed.
OUTPUT JSON FORMAT ONLY:
{
  "reportTitle": "Title of report or panel",
  "isUnreadable": false,
  "unreadableReason": "",
  "tests": [
    {
      "testName": "Hemoglobin (Hb)",
      "resultValue": "10.8",
      "unit": "g/dL",
      "referenceRange": "12.0 - 15.5 g/dL",
      "labFlag": "Low"
    }
  ]
}`;

        let messagesPayload: any[];
        if (!isPdf) {
          const mimeType = file.type || (lowerName.endsWith('.png') ? 'image/png' : 'image/jpeg');
          const base64 = buffer.toString('base64');
          messagesPayload = [
            { role: 'system', content: systemPrompt },
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: `Please extract the exact lab report rows from this image (${fileName}).`
                },
                {
                  type: 'image_url',
                  image_url: {
                    url: `data:${mimeType};base64,${base64}`,
                    detail: 'high'
                  }
                }
              ]
            }
          ];
        } else {
          messagesPayload = [
            { role: 'system', content: systemPrompt },
            {
              role: 'user',
              content: `Please extract the exact lab report rows from this PDF document text (${fileName}):\n\n${extractedText.slice(0, 4000)}`
            }
          ];
        }

        const completion = await openai.chat.completions.create({
          model,
          messages: messagesPayload,
          temperature: 0.1,
          response_format: { type: 'json_object' }
        });

        const rawJson = completion.choices[0]?.message?.content || '{}';
        const aiParsed = JSON.parse(rawJson);

        if (aiParsed.isUnreadable) {
          const fallbackReason =
            language === 'hi'
              ? 'अपलोड किए गए दस्तावेज़ को स्पष्ट रूप से पढ़ा नहीं जा सका। कृपया स्पष्ट डिजिटल PDF या अच्छी रोशनी वाली फोटो अपलोड करें।'
              : language === 'mr'
              ? 'अपलोड केलेला अहवाल वाचता आला नाही. कृपया स्पष्ट डिजिटल PDF किंवा चांगल्या प्रकाशातील फोटो अपलोड करा.'
              : 'The uploaded document could not be clearly read. Please upload a clearer, well-lit photo or digital PDF of your report.';

          return NextResponse.json({
            reportTitle: 'Unreadable Laboratory Document',
            fileName,
            fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
            totalPages,
            tests: [],
            rawTextPreview: extractedText.slice(0, 1000),
            isUnreadable: true,
            unreadableReason: aiParsed.unreadableReason || fallbackReason,
            extractionConfidence: 0,
            extractionMethod: 'vision_multimodal',
            language
          });
        }

        if (Array.isArray(aiParsed.tests) && aiParsed.tests.length > 0) {
          // Normalize AI extracted tests with our strict status & verification logic
          const normalizedTests: ImportedTestItem[] = aiParsed.tests.map((t: any) => {
            const valStr = String(t.resultValue || '').trim();
            const numVal = parseFloat(valStr.replace(/[<>=,]/g, ''));
            const rangeStr = t.referenceRange || 'Not specified on report';
            const labFlag = t.labFlag || undefined;

            let status: 'below' | 'normal' | 'above' | 'inconclusive' = 'inconclusive';
            if (labFlag) {
              const fl = labFlag.toLowerCase();
              if (fl.includes('high') || fl === 'h' || fl.includes('above')) status = 'above';
              else if (fl.includes('low') || fl === 'l' || fl.includes('below')) status = 'below';
              else if (fl.includes('normal') || fl.includes('nil')) status = 'normal';
              else if (fl.includes('abnormal') || fl.includes('critical') || fl === '*') status = 'above';
            }

            if (status === 'inconclusive' && !isNaN(numVal) && rangeStr !== 'Not specified on report') {
              const rangeMatch = rangeStr.replace(/,/g, '').match(/([\d\.]+)\s*(?:-|to)\s*([\d\.]+)/i);
              if (rangeMatch) {
                const min = parseFloat(rangeMatch[1]);
                const max = parseFloat(rangeMatch[2]);
                if (!isNaN(min) && !isNaN(max)) {
                  status = numVal < min ? 'below' : numVal > max ? 'above' : 'normal';
                }
              }
            }

            const isQual = !numVal || isNaN(numVal);
            const needsVer =
              rangeStr === 'Not specified on report' ||
              (!t.unit && !isQual) ||
              status === 'inconclusive';

            return {
              id: `rec_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
              testName: String(t.testName || '').trim(),
              resultValue: valStr,
              rawExtractedValue: valStr,
              numericValue: !isNaN(numVal) ? numVal : null,
              unit: String(t.unit || '').trim(),
              referenceRange: rangeStr,
              labFlag,
              status,
              verificationStatus: needsVer ? 'needs_verification' : 'verified',
              verificationReason: needsVer
                ? rangeStr === 'Not specified on report'
                  ? 'Reference range not specified on report'
                  : 'Please verify value and clinical unit'
                : undefined,
              sourceSnippet: `${t.testName}: ${valStr} ${t.unit || ''} (Ref: ${rangeStr})`,
              confidence: needsVer ? 75 : 95,
              simpleExplanation: ''
            };
          });

          const verifiedCount = normalizedTests.filter((x) => x.verificationStatus === 'verified').length;
          const conf = Math.round((verifiedCount / normalizedTests.length) * 100);

          const extractedData: ExtractedReportData = {
            reportTitle: aiParsed.reportTitle || fileName.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' '),
            fileName,
            fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
            totalPages,
            tests: normalizedTests,
            rawTextPreview: extractedText.slice(0, 3000),
            isUnreadable: false,
            extractionConfidence: conf,
            extractionMethod: 'vision_multimodal',
            language
          };

          // If caller requested extraction-only (the Review step)
          if (action === 'extract') {
            return NextResponse.json(extractedData);
          }

          // If direct one-shot requested, attach explanations
          const analysisResult = generateExplanationsForRecords(normalizedTests, language, fileName);
          analysisResult.fileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
          analysisResult.rawTextPreview = extractedText.slice(0, 3000);
          analysisResult.extractionConfidence = conf;
          return NextResponse.json(analysisResult);
        }
      } catch (aiErr) {
        console.warn('OpenAI vision extraction error, using deterministic parser:', aiErr);
      }
    }

    // 7. Deterministic Local Table Parser (High accuracy, no hallucinations)
    const parsedData = parseLabReportText(extractedText, fileName, totalPages);
    parsedData.fileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
    parsedData.extractionMethod = extractionMethod;
    parsedData.language = language;

    // If caller requested extraction-only (the Review step)
    if (action === 'extract') {
      return NextResponse.json(parsedData);
    }

    // If direct one-shot analysis requested
    if (parsedData.isUnreadable) {
      return NextResponse.json(parsedData);
    }

    const fullAnalysis = generateExplanationsForRecords(parsedData.tests, language, fileName);
    fullAnalysis.fileSize = parsedData.fileSize;
    fullAnalysis.rawTextPreview = parsedData.rawTextPreview;
    fullAnalysis.extractionConfidence = parsedData.extractionConfidence;
    return NextResponse.json(fullAnalysis);
  } catch (err: unknown) {
    console.error('Import report endpoint error:', err);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred while processing the uploaded lab report. Please try again.'
      },
      { status: 500 }
    );
  }
}

/**
 * Handle explanation request for verified records (Step 2)
 */
async function handleExplainRequest(body: any) {
  const { confirmedTests, language = 'en', fileName = 'Lab Report' } = body;
  return handleExplainRecords(confirmedTests, language, fileName);
}

async function handleExplainRecords(
  confirmedTests: ImportedTestItem[],
  language: Language,
  fileName: string
) {
  if (!Array.isArray(confirmedTests) || confirmedTests.length === 0) {
    const msg =
      language === 'hi'
        ? 'कृपया व्याख्या के लिए कम से कम एक सत्यापित जांच मान दर्ज करें।'
        : language === 'mr'
        ? 'कृपया स्पष्टीकरणासाठी किमान एक तपासलेली चाचणी निवडा.'
        : 'Please provide at least one verified lab biomarker to explain.';
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  // Generate plain-language explanations strictly for the verified records
  const result = generateExplanationsForRecords(confirmedTests, language, fileName);
  return NextResponse.json(result);
}
