import { NextRequest, NextResponse } from 'next/server';
import { PDFParse } from 'pdf-parse';
import { getOpenAIClient, getOpenAIModel, isOpenAIConfigured } from '@/lib/openai';
import { getSyntheticImportedReportAnalysis } from '@/lib/synthetic-data';
import { ImportedReportAnalysisResult, Language } from '@/lib/types';

// Max file size: 10 MB
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_MIME_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png'];

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const rawLang = formData.get('language') as string;
    const language: Language = ['en', 'hi', 'mr'].includes(rawLang) ? (rawLang as Language) : 'en';

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

    let extractedPdfText = '';

    // If PDF, extract text using PDFParse
    if (isPdf) {
      try {
        const parser = new PDFParse({ data: buffer });
        const textResult = await parser.getText();
        extractedPdfText = (textResult.text || '').trim();
        await parser.destroy();
      } catch (pdfErr) {
        console.warn('PDF text extraction error, will attempt fallback parsing:', pdfErr);
      }
    }

    const openai = getOpenAIClient();

    // 5. Handle via OpenAI (if configured and active)
    if (openai && isOpenAIConfigured()) {
      const model = getOpenAIModel();

      const systemPrompt = `You are an expert medical laboratory report reader and clinical health educator for IMD Care, an Indian health literacy startup.
Your core task is to extract diagnostic lab biomarkers from the user's uploaded document and provide a clear, empathetic, structured educational explanation.

CRITICAL HEALTH & SAFETY RULES:
1. Extract all clearly readable laboratory test rows:
   - testName (e.g., Hemoglobin Hb, Fasting Glucose, TSH, Serum Creatinine, LDL Cholesterol)
   - resultValue (e.g., 10.8, 104)
   - unit (e.g., g/dL, mg/dL, µIU/mL)
   - referenceRange (stated reference interval on report)
2. NEVER INVENT missing test values or reference ranges. If a reference range is not printed on the document, set referenceRange to "Not specified on report".
3. Determine whether each value is 'below', 'normal', 'above', or 'inconclusive' relative strictly to the provided reference interval.
4. Explain what each biological marker measures in simple layman terms.
5. In abnormalReassurance, EMPHASIZE strongly that abnormal values do NOT automatically mean a person has a disease. Explain that temporary factors such as hydration, last meal timing, physical exertion, sleep quality, psychological stress, and lab equipment calibration variances frequently shift values.
6. Provide 3-4 empowered, constructive questions for the patient to ask their doctor.
7. If the document is unreadable, blurry, dark, corrupt, or not a medical report, set "isUnreadable": true and explain in "unreadableReason" what is needed (e.g., "Please upload a clearer, well-lit photo or digital PDF").
8. LANGUAGE REQUIREMENT: Output ALL explanatory text, titles, reassurance, questions, and descriptions in the requested language: "${language}" ('en' for English, 'hi' for Hindi in Devanagari, 'mr' for Marathi in Devanagari).
9. Output STRICT JSON only.`;

      const jsonSchemaInstruction = `
OUTPUT JSON FORMAT ONLY:
{
  "reportTitle": "Title of the laboratory panel (e.g. Complete Blood Count / Lipid Profile)",
  "isUnreadable": false,
  "unreadableReason": "",
  "tests": [
    {
      "testName": "Hemoglobin (Hb)",
      "resultValue": "10.8",
      "unit": "g/dL",
      "referenceRange": "12.0 - 15.5 g/dL",
      "status": "below",
      "simpleExplanation": "Plain-language explanation of this test in the requested language"
    }
  ],
  "overallSummary": "High-level overview of the uploaded report in the requested language",
  "abnormalReassurance": "Empathetic explanation that abnormal values do not automatically mean disease",
  "factorsToConsider": ["factor 1", "factor 2", "factor 3"],
  "questionsForDoctor": ["question 1", "question 2", "question 3"],
  "disclaimer": "Safety disclaimer stating this is AI health literacy and not a clinical diagnosis"
}`;

      try {
        let messagesPayload: any[];

        if (!isPdf) {
          // Image input with OpenAI Vision
          const mimeType = file.type || (lowerName.endsWith('.png') ? 'image/png' : 'image/jpeg');
          const base64 = buffer.toString('base64');

          messagesPayload = [
            { role: 'system', content: `${systemPrompt}\n\n${jsonSchemaInstruction}` },
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: `Please analyze this uploaded lab report image (${fileName}) in ${language.toUpperCase()} language. Extract the test values, units, reference ranges, and plain language explanations.`
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
          // PDF input with extracted text
          const textContent =
            extractedPdfText.length > 20
              ? extractedPdfText.slice(0, 4000)
              : `[PDF document: ${fileName}, text extraction was minimal or scanned without OCR layer]`;

          messagesPayload = [
            { role: 'system', content: `${systemPrompt}\n\n${jsonSchemaInstruction}` },
            {
              role: 'user',
              content: `Please analyze the following extracted text from the lab report PDF "${fileName}" in ${language.toUpperCase()} language:\n\n${textContent}`
            }
          ];
        }

        const completion = await openai.chat.completions.create({
          model: model,
          messages: messagesPayload,
          temperature: 0.2,
          response_format: { type: 'json_object' }
        });

        const rawJson = completion.choices[0]?.message?.content || '{}';
        const parsed = JSON.parse(rawJson);

        if (parsed.isUnreadable) {
          const fallbackReason =
            language === 'hi'
              ? 'अपलोड किए गए दस्तावेज़ को स्पष्ट रूप से पढ़ा नहीं जा सका। कृपया स्पष्ट डिजिटल PDF या अच्छी रोशनी वाली फोटो अपलोड करें।'
              : language === 'mr'
              ? 'अपलोड केलेला अहवाल वाचता आला नाही. कृपया स्पष्ट डिजिटल PDF किंवा चांगल्या प्रकाशातील फोटो अपलोड करा.'
              : 'The uploaded document could not be clearly read. Please upload a clearer, well-lit photo or digital PDF of your report.';

          return NextResponse.json({
            isUnreadable: true,
            unreadableReason: parsed.unreadableReason || fallbackReason,
            fileName,
            language
          });
        }

        const result: ImportedReportAnalysisResult = {
          reportTitle: parsed.reportTitle || fileName.replace(/\.[^/.]+$/, ''),
          fileName,
          fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
          tests: Array.isArray(parsed.tests) ? parsed.tests : [],
          overallSummary: parsed.overallSummary || 'Laboratory report analysis completed.',
          abnormalReassurance:
            parsed.abnormalReassurance ||
            'Important Note: Abnormal values do not automatically mean you have a disease. Consult your physician for clinical interpretation.',
          factorsToConsider: Array.isArray(parsed.factorsToConsider) ? parsed.factorsToConsider : [],
          questionsForDoctor: Array.isArray(parsed.questionsForDoctor) ? parsed.questionsForDoctor : [],
          disclaimer:
            parsed.disclaimer ||
            'IMD Care provides educational health literacy and does not constitute medical diagnosis or prescription.',
          language,
          isDemo: false
        };

        return NextResponse.json(result);
      } catch (aiErr: unknown) {
        console.error('OpenAI vision/report error, falling back to synthetic analysis:', aiErr);
        // Fall back to synthetic analysis
        const synthetic = getSyntheticImportedReportAnalysis(fileName, extractedPdfText, language);
        synthetic.fileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
        return NextResponse.json(synthetic);
      }
    }

    // 6. Demo Mode / Offline Synthetic Extractor
    const synthetic = getSyntheticImportedReportAnalysis(fileName, extractedPdfText, language);
    synthetic.fileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
    return NextResponse.json(synthetic);
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
