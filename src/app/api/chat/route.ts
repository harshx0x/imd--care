import { NextRequest, NextResponse } from 'next/server';
import { runRAGPipeline } from '@/lib/rag/rag-pipeline';
import { checkEmergencySymptoms } from '@/lib/emergency';
import { isOpenAIConfigured } from '@/lib/openai';
import { isMedGemmaConfigured } from '@/lib/ai/medgemma';
import { checkRateLimit } from '@/lib/security/rate-limiter';
import { sanitizeTextInput, validateLanguage } from '@/lib/security/input-validator';
import { metricsTracker } from '@/lib/monitoring/metrics-tracker';

export async function POST(req: NextRequest) {
  const start = Date.now();

  // 1. Enforce Rate Limiting
  const rateCheck = checkRateLimit(req, 'chat');
  if (!rateCheck.allowed) {
    metricsTracker.recordRequest('/api/chat', 'POST', 429, Date.now() - start);
    return NextResponse.json(
      {
        error: 'Too many chat requests. Please wait a moment before sending another message.',
        retryAfter: rateCheck.resetInSeconds
      },
      { status: 429, headers: { 'Retry-After': String(rateCheck.resetInSeconds) } }
    );
  }

  try {
    let body: Record<string, unknown> = {};
    try {
      body = await req.json();
    } catch {
      metricsTracker.recordRequest('/api/chat', 'POST', 400, Date.now() - start);
      return NextResponse.json({ error: 'Invalid JSON request payload.' }, { status: 400 });
    }

    // 2. Server-side Input Validation & Sanitization
    const validation = sanitizeTextInput(body.message, 2000, 'Message');
    if (!validation.valid || !validation.value) {
      metricsTracker.recordRequest('/api/chat', 'POST', 400, Date.now() - start);
      return NextResponse.json(
        { error: validation.error || 'Message cannot be empty.' },
        { status: 400 }
      );
    }
    const message = validation.value;
    const language = validateLanguage(body.language);
    const history = Array.isArray(body.history) ? body.history.slice(-6) : [];

    // 3. Critical safety layer: immediate triage before any vector lookup
    const emergencyEval = checkEmergencySymptoms(message);
    if (emergencyEval.isEmergency) {
      const emergencyWarning =
        language === 'hi'
          ? `⚠️ **आपातकालीन चेतावनी (EMERGENCY RED FLAG DETECTED)**\n\nआपके संदेश में संभावित गंभीर स्वास्थ्य लक्षण पहचाने गए हैं (${emergencyEval.reason})।\n\n**कृपया तुरंत आपातकालीन सहायता लें:**\n- राष्ट्रीय आपातकालीन नंबर: **112**\n- एम्बुलेंस सेवा: **108**\n\nAI चैट पर प्रतीक्षा न करें। कृपया नजदीकी अस्पताल के आपातकालीन विभाग में तुरंत जाएं।`
          : language === 'mr'
          ? `⚠️ **तातडीची वैद्यकीय सूचना (EMERGENCY RED FLAG DETECTED)**\n\nआपल्या संदेशात गंभीर लक्षणांचे संकेत आहेत (${emergencyEval.reason}).\n\n**कृपया तातडीने मदत मिळवा:**\n- राष्ट्रीय आपत्कालीन क्रमांक: **112**\n- रुग्णवाहिका क्रमांक: **108**\n\nकृपया वाट पाहू नका, नजीकच्या रुग्णालयात तातडीने जा.`
          : `⚠️ **EMERGENCY WARNING (POTENTIAL CRITICAL RED FLAG)**\n\nYour message mentions symptoms that may indicate an acute medical emergency (${emergencyEval.reason}).\n\n**Immediate Action Required:**\n- Call National Emergency Helpline: **112**\n- Call Ambulance Service: **108**\n- Do not drive yourself. Have someone drive you or call an ambulance to reach the nearest casualty/emergency department immediately.\n\nAutomated AI guidance cannot replace emergency medical triage.`;

      const duration = Date.now() - start;
      metricsTracker.recordRequest('/api/chat', 'POST', 200, duration);

      return NextResponse.json({
        response: emergencyWarning,
        citations: [],
        isEmergency: true,
        emergencyEvaluation: emergencyEval,
        isEvidenceSufficient: true,
        isRAGEnabled: false,
        isDemo: false,
        language
      });
    }

    // 4. Execute grounded RAG pipeline
    const ragResult = await runRAGPipeline(message, language, {
      history: history.map((h: { role?: string; content?: string }) => ({
        role: h.role === 'assistant' ? 'assistant' : 'user',
        content: String(h.content || '').slice(0, 1000)
      })),
      topK: 4,
      minSimilarityThreshold: 0.20
    });

    const isLiveAI = isOpenAIConfigured() || isMedGemmaConfigured();
    const modelUsed = ragResult.modelUsed || (isOpenAIConfigured() ? 'openai-rag' : 'curated-rag-engine');

    metricsTracker.recordAICall(
      isOpenAIConfigured() ? 'openai' : isMedGemmaConfigured() ? 'medgemma' : 'offline'
    );
    const duration = Date.now() - start;
    metricsTracker.recordRequest('/api/chat', 'POST', 200, duration);

    return NextResponse.json({
      response: ragResult.answer,
      citations: ragResult.citations,
      isEvidenceSufficient: ragResult.isEvidenceSufficient,
      isRAGEnabled: ragResult.isRAGEnabled,
      isDemo: !isLiveAI,
      model: modelUsed,
      language
    });
  } catch (err: unknown) {
    console.error('Chat RAG endpoint error:', err);
    const duration = Date.now() - start;
    metricsTracker.recordRequest('/api/chat', 'POST', 500, duration);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred while processing your query.',
        response:
          'We encountered a momentary issue consulting our medical knowledge base. Please try asking your question again.'
      },
      { status: 500 }
    );
  }
}
