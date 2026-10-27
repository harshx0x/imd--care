import { NextRequest, NextResponse } from 'next/server';
import { runRAGPipeline } from '@/lib/rag/rag-pipeline';
import { checkEmergencySymptoms } from '@/lib/emergency';
import { isOpenAIConfigured } from '@/lib/openai';
import { Language } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = typeof body.message === 'string' ? body.message.trim().slice(0, 2000) : '';
    const language: Language = ['en', 'hi', 'mr'].includes(body.language) ? body.language : 'en';
    const history = Array.isArray(body.history) ? body.history.slice(-6) : [];

    if (!message) {
      return NextResponse.json(
        { error: 'Message cannot be empty.' },
        { status: 400 }
      );
    }

    // 1. Critical safety layer: immediate triage before any vector lookup
    const emergencyEval = checkEmergencySymptoms(message);
    if (emergencyEval.isEmergency) {
      const emergencyWarning =
        language === 'hi'
          ? `⚠️ **आपातकालीन चेतावनी (EMERGENCY RED FLAG DETECTED)**\n\nआपके संदेश में संभावित गंभीर स्वास्थ्य लक्षण पहचाने गए हैं (${emergencyEval.reason})।\n\n**कृपया तुरंत आपातकालीन सहायता लें:**\n- राष्ट्रीय आपातकालीन नंबर: **112**\n- एम्बुलेंस सेवा: **108**\n\nAI चैट पर प्रतीक्षा न करें। कृपया नजदीकी अस्पताल के आपातकालीन विभाग में तुरंत जाएं।`
          : language === 'mr'
          ? `⚠️ **तातडीची वैद्यकीय सूचना (EMERGENCY RED FLAG DETECTED)**\n\nआपल्या संदेशात गंभीर लक्षणांचे संकेत आहेत (${emergencyEval.reason}).\n\n**कृपया तातडीने मदत मिळवा:**\n- राष्ट्रीय आपत्कालीन क्रमांक: **112**\n- रुग्णवाहिका क्रमांक: **108**\n\nकृपया वाट पाहू नका, नजीकच्या रुग्णालयात तातडीने जा.`
          : `⚠️ **EMERGENCY WARNING (POTENTIAL CRITICAL RED FLAG)**\n\nYour message mentions symptoms that may indicate an acute medical emergency (${emergencyEval.reason}).\n\n**Immediate Action Required:**\n- Call National Emergency Helpline: **112**\n- Call Ambulance Service: **108**\n- Do not drive yourself. Have someone drive you or call an ambulance to reach the nearest casualty/emergency department immediately.\n\nAutomated AI guidance cannot replace emergency medical triage.`;

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

    // 2. Execute grounded RAG pipeline
    const ragResult = await runRAGPipeline(message, language, {
      history: history.map((h: { role?: string; content?: string }) => ({
        role: h.role === 'assistant' ? 'assistant' : 'user',
        content: String(h.content || '')
      })),
      topK: 4,
      minSimilarityThreshold: 0.20
    });

    return NextResponse.json({
      response: ragResult.answer,
      citations: ragResult.citations,
      isEvidenceSufficient: ragResult.isEvidenceSufficient,
      isRAGEnabled: ragResult.isRAGEnabled,
      isDemo: !isOpenAIConfigured(),
      model: ragResult.modelUsed || (isOpenAIConfigured() ? 'openai-rag' : 'synthetic-demo-mode'),
      language
    });
  } catch (err: unknown) {
    console.error('Chat RAG endpoint error:', err);
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
