import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient, getOpenAIModel, isOpenAIConfigured } from '@/lib/openai';
import { getSyntheticReportExplanation } from '@/lib/synthetic-data';
import {
  ReportExplanationRequest,
  ReportExplanationResult,
  ImportedTestItem,
  ImportedReportAnalysisResult
} from '@/lib/types';
import { checkRateLimit } from '@/lib/security/rate-limiter';
import { sanitizeTextInput, validateLanguage } from '@/lib/security/input-validator';
import { metricsTracker } from '@/lib/monitoring/metrics-tracker';
import { getAuthenticatedUser } from '@/lib/auth/auth-service';
import {
  getUserReports,
  getUserReportById,
  deleteUserReport,
  saveUserReport
} from '@/lib/reports/report-store';

/**
 * GET /api/reports
 * Retrieves saved reports for the authenticated user, or a specific report by ID.
 * STRICT: Enforces tenant isolation so users can never see another user's reports.
 */
export async function GET(req: NextRequest) {
  const start = Date.now();

  const rateCheck = checkRateLimit(req, 'reports');
  if (!rateCheck.allowed) {
    metricsTracker.recordRequest('/api/reports', 'GET', 429, Date.now() - start);
    return NextResponse.json(
      { error: 'Too many requests. Please slow down.' },
      { status: 429, headers: { 'Retry-After': String(rateCheck.resetInSeconds) } }
    );
  }

  const auth = await getAuthenticatedUser(req);
  if (!auth.authenticated || !auth.user) {
    metricsTracker.recordRequest('/api/reports', 'GET', 401, Date.now() - start);
    return NextResponse.json(
      { error: 'Authentication required to access saved reports.' },
      { status: 401 }
    );
  }

  const url = new URL(req.url);
  const reportId = url.searchParams.get('id');

  if (reportId) {
    const result = await getUserReportById(reportId, auth.user.id);
    const duration = Date.now() - start;
    metricsTracker.recordRequest('/api/reports', 'GET', result.status, duration);

    if (!result.report) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }
    return NextResponse.json({ report: result.report });
  }

  const userReports = await getUserReports(auth.user.id);
  const duration = Date.now() - start;
  metricsTracker.recordRequest('/api/reports', 'GET', 200, duration);

  return NextResponse.json({
    reports: userReports,
    count: userReports.length
  });
}

/**
 * DELETE /api/reports?id=...
 * Permanently deletes a saved report and all associated extracted data.
 * STRICT: Enforces user ownership — returns 403 Forbidden if attempting cross-user deletion.
 */
export async function DELETE(req: NextRequest) {
  const start = Date.now();

  const rateCheck = checkRateLimit(req, 'reports');
  if (!rateCheck.allowed) {
    metricsTracker.recordRequest('/api/reports', 'DELETE', 429, Date.now() - start);
    return NextResponse.json(
      { error: 'Too many requests. Please slow down.' },
      { status: 429, headers: { 'Retry-After': String(rateCheck.resetInSeconds) } }
    );
  }

  const auth = await getAuthenticatedUser(req);
  if (!auth.authenticated || !auth.user) {
    metricsTracker.recordRequest('/api/reports', 'DELETE', 401, Date.now() - start);
    return NextResponse.json(
      { error: 'Authentication required to delete reports.' },
      { status: 401 }
    );
  }

  const url = new URL(req.url);
  const reportId = url.searchParams.get('id');

  if (!reportId) {
    metricsTracker.recordRequest('/api/reports', 'DELETE', 400, Date.now() - start);
    return NextResponse.json(
      { error: 'Query parameter "id" is required for report deletion.' },
      { status: 400 }
    );
  }

  const deleteResult = await deleteUserReport(reportId, auth.user.id);
  const duration = Date.now() - start;
  metricsTracker.recordRequest('/api/reports', 'DELETE', deleteResult.status, duration);

  if (!deleteResult.success) {
    return NextResponse.json(
      { error: deleteResult.error || 'Failed to delete report.' },
      { status: deleteResult.status }
    );
  }

  return NextResponse.json({
    success: true,
    deletedId: reportId,
    message: 'Report and all associated clinical records permanently deleted.'
  });
}

/**
 * POST /api/reports
 * Explains a single diagnostic test parameter.
 * Also supports saving a complete analyzed report if action === 'save'.
 */
export async function POST(req: NextRequest) {
  const start = Date.now();

  const rateCheck = checkRateLimit(req, 'reports');
  if (!rateCheck.allowed) {
    metricsTracker.recordRequest('/api/reports', 'POST', 429, Date.now() - start);
    return NextResponse.json(
      { error: 'Too many report requests. Please slow down.' },
      { status: 429, headers: { 'Retry-After': String(rateCheck.resetInSeconds) } }
    );
  }

  try {
    let body: Partial<ReportExplanationRequest> & {
      action?: string;
      reportTitle?: string;
      fileName?: string;
      tests?: ImportedTestItem[];
      analysis?: ImportedReportAnalysisResult;
    } = {};

    try {
      body = await req.json();
    } catch {
      metricsTracker.recordRequest('/api/reports', 'POST', 400, Date.now() - start);
      return NextResponse.json({ error: 'Invalid JSON request payload.' }, { status: 400 });
    }

    // Action: Save a complete report for an authenticated user
    if (body.action === 'save') {
      const auth = await getAuthenticatedUser(req);
      if (!auth.authenticated || !auth.user) {
        metricsTracker.recordRequest('/api/reports', 'POST', 401, Date.now() - start);
        return NextResponse.json(
          { error: 'Authentication required to save reports to your account.' },
          { status: 401 }
        );
      }

      const saved = await saveUserReport(auth.user.id, {
        reportTitle: body.reportTitle || 'Diagnostic Lab Report',
        fileName: body.fileName || 'report.pdf',
        tests: Array.isArray(body.tests) ? body.tests : [],
        analysis: body.analysis
      });

      const duration = Date.now() - start;
      metricsTracker.recordRequest('/api/reports', 'POST', 200, duration);
      return NextResponse.json({ success: true, report: saved });
    }

    // Standard action: Explain single test
    const testNameVal = sanitizeTextInput(body.testName, 150, 'Test name');
    const resultValueVal = sanitizeTextInput(body.resultValue, 50, 'Result value');

    if (!testNameVal.valid || !resultValueVal.valid) {
      metricsTracker.recordRequest('/api/reports', 'POST', 400, Date.now() - start);
      return NextResponse.json(
        { error: 'Please provide at least a test name and your result value.' },
        { status: 400 }
      );
    }

    const testName = testNameVal.value;
    const resultValue = resultValueVal.value;
    const unit = typeof body.unit === 'string' ? body.unit.trim().slice(0, 50) : '';
    const referenceRange = typeof body.referenceRange === 'string' ? body.referenceRange.trim().slice(0, 150) : '';
    const clinicalContext = typeof body.clinicalContext === 'string' ? body.clinicalContext.trim().slice(0, 300) : '';
    const language = validateLanguage(body.language);

    const openai = getOpenAIClient();

    if (!openai || !isOpenAIConfigured()) {
      metricsTracker.recordAICall('offline');
      const synthetic = getSyntheticReportExplanation({
        testName,
        resultValue,
        unit,
        referenceRange,
        clinicalContext,
        language
      });
      const duration = Date.now() - start;
      metricsTracker.recordRequest('/api/reports', 'POST', 200, duration);
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
        model,
        messages: [
          { role: 'system', content: 'You are an AI medical report educator that outputs strict JSON for lab test explanations.' },
          { role: 'user', content: promptText }
        ],
        temperature: 0.3,
        response_format: { type: 'json_object' }
      });

      metricsTracker.recordAICall('openai');

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

      const duration = Date.now() - start;
      metricsTracker.recordRequest('/api/reports', 'POST', 200, duration);
      return NextResponse.json(result);
    } catch (apiErr: unknown) {
      metricsTracker.recordAICall('openai', true);
      console.error('OpenAI report simplification error, falling back to synthetic guidance:', apiErr);
      const synthetic = getSyntheticReportExplanation({
        testName,
        resultValue,
        unit,
        referenceRange,
        clinicalContext,
        language
      });
      const duration = Date.now() - start;
      metricsTracker.recordRequest('/api/reports', 'POST', 200, duration);
      return NextResponse.json(synthetic);
    }
  } catch (err: unknown) {
    console.error('Report route error:', err);
    const duration = Date.now() - start;
    metricsTracker.recordRequest('/api/reports', 'POST', 500, duration);
    return NextResponse.json(
      { error: 'An error occurred while simplifying this medical report.' },
      { status: 500 }
    );
  }
}
