import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient, getOpenAIModel, isOpenAIConfigured } from '@/lib/openai';
import { getSyntheticReportExplanation } from '@/lib/synthetic-data';
import { ReportExplanationRequest, ReportExplanationResult } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body: ReportExplanationRequest = await req.json();
    const testName = typeof body.testName === 'string' ? body.testName.trim().slice(0, 150) : '';
    const resultValue = typeof body.resultValue === 'string' ? body.resultValue.trim().slice(0, 50) : '';
    const unit = typeof body.unit === 'string' ? body.unit.trim().slice(0, 50) : '';
    const referenceRange = typeof body.referenceRange === 'string' ? body.referenceRange.trim().slice(0, 150) : '';
    const clinicalContext = typeof body.clinicalContext === 'string' ? body.clinicalContext.trim().slice(0, 300) : '';
    const language = ['en', 'hi', 'mr'].includes(body.language) ? body.language : 'en';

    if (!testName || !resultValue) {
      return NextResponse.json(
        { error: 'Please provide at least a test name and your result value.' },
        { status: 400 }
      );
    }

    const openai = getOpenAIClient();

    if (!openai || !isOpenAIConfigured()) {
      const synthetic = getSyntheticReportExplanation({
        testName,
        resultValue,
        unit,
        referenceRange,
        clinicalContext,
        language
      });
      return NextResponse.json(synthetic);
    }

    const promptText = `
You are an expert medical lab report communicator for IMD Care, an Indian health literacy startup.
A patient has entered the following diagnostic lab test details:

- Test Name: "${testName}"
- Result Value: "${resultValue}"
- Unit: "${unit}"
- Laboratory Reference Range: "${referenceRange || 'Not provided'}"
- Optional Context: "${clinicalContext || 'None'}"
- Target Language: "${language}" ('en' for English, 'hi' for Hindi, 'mr' for Marathi)

INSTRUCTIONS:
1. NEVER invent missing lab results or pretend the test is normal or abnormal if data is missing.
2. Determine if the value is 'below', 'normal', 'above', or 'inconclusive' relative to the reference range.
3. Provide a clear, layman-friendly explanation of what this test measures in the human body.
4. List 3 key factors that might influence this test (e.g., fasting status, dehydration, stress, medications).
5. Provide 3-4 specific, empowered questions the patient can ask their doctor during their next visit.
6. Emphasize that lab results must always be interpreted alongside full clinical history.
7. Output STRICT JSON in the target language (${language}).

OUTPUT FORMAT - ONLY VALID JSON, NO MARKDOWN OR EXTRA TEXT:
{
  "testName": "${testName}",
  "resultSummary": "Short summary of the test and result value",
  "status": "below" | "normal" | "above" | "inconclusive",
  "plainLanguageExplanation": "Detailed plain-language paragraph explaining what this marker means",
  "factorsToConsider": ["factor 1", "factor 2", "factor 3"],
  "questionsForDoctor": ["question 1", "question 2", "question 3", "question 4"],
  "disclaimer": "Safety disclaimer stating this is synthetic educational interpretation"
}
`;

    const model = getOpenAIModel();

    try {
      const completion = await openai.chat.completions.create({
        model: model,
        messages: [
          { role: 'system', content: 'You are an AI medical report educator that outputs strict JSON for lab test explanations.' },
          { role: 'user', content: promptText }
        ],
        temperature: 0.3,
        response_format: { type: 'json_object' }
      });

      const rawJson = completion.choices[0]?.message?.content || '{}';
      const parsed = JSON.parse(rawJson);

      const statusVal = ['below', 'normal', 'above', 'inconclusive'].includes(parsed.status)
        ? parsed.status
        : 'normal';

      const result: ReportExplanationResult = {
        testName: parsed.testName || testName,
        resultSummary: parsed.resultSummary || `${testName}: ${resultValue} ${unit}`,
        status: statusVal,
        plainLanguageExplanation: parsed.plainLanguageExplanation || 'Explanation of this biological marker.',
        factorsToConsider: Array.isArray(parsed.factorsToConsider) ? parsed.factorsToConsider : ['Hydration and dietary factors.'],
        questionsForDoctor: Array.isArray(parsed.questionsForDoctor) ? parsed.questionsForDoctor : ['What do these results mean for my treatment?'],
        disclaimer: parsed.disclaimer || 'Educational interpretation only. Discuss results with your physician.',
        language,
        isDemo: false
      };

      return NextResponse.json(result);
    } catch (apiErr: unknown) {
      console.error('OpenAI report simplification error, falling back to synthetic guidance:', apiErr);
      const synthetic = getSyntheticReportExplanation({
        testName,
        resultValue,
        unit,
        referenceRange,
        clinicalContext,
        language
      });
      return NextResponse.json(synthetic);
    }
  } catch (err: unknown) {
    console.error('Report route error:', err);
    return NextResponse.json(
      { error: 'An error occurred while simplifying this medical report.' },
      { status: 500 }
    );
  }
}
