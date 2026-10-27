import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient, getOpenAIModel, isOpenAIConfigured } from '@/lib/openai';
import { checkEmergencySymptoms } from '@/lib/emergency';
import { getSyntheticChatResponse } from '@/lib/synthetic-data';
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

    // Emergency check
    const emergencyEval = checkEmergencySymptoms(message);
    if (emergencyEval.isEmergency) {
      const emergencyWarning = language === 'hi'
        ? `⚠️ **आपातकालीन चेतावनी (EMERGENCY RED FLAG DETECTED)**\n\nआपके संदेश में संभावित गंभीर स्वास्थ्य लक्षण पहचाने गए हैं (${emergencyEval.reason})।\n\n**कृपया तुरंत आपातकालीन सहायता लें:**\n- राष्ट्रीय आपातकालीन नंबर: **112**\n- एम्बुलेंस सेवा: **108**\n\nAI चैट पर प्रतीक्षा न करें। कृपया नजदीकी अस्पताल के आपातकालीन विभाग में तुरंत जाएं।`
        : language === 'mr'
        ? `⚠️ **तातडीची वैद्यकीय सूचना (EMERGENCY RED FLAG DETECTED)**\n\nआपल्या संदेशात गंभीर लक्षणांचे संकेत आहेत (${emergencyEval.reason}).\n\n**कृपया तातडीने मदत मिळवा:**\n- राष्ट्रीय आपत्कालीन क्रमांक: **112**\n- रुग्णवाहिका क्रमांक: **108**\n\nकृपया वाट पाहू नका, नजीकच्या रुग्णालयात तातडीने जा.`
        : `⚠️ **EMERGENCY WARNING (POTENTIAL CRITICAL RED FLAG)**\n\nYour message mentions symptoms that may indicate an acute medical emergency (${emergencyEval.reason}).\n\n**Immediate Action Required:**\n- Call National Emergency Helpline: **112**\n- Call Ambulance Service: **108**\n- Do not drive yourself. Have someone drive you or call an ambulance to reach the nearest casualty/emergency department immediately.\n\nAutomated AI guidance cannot replace emergency medical triage.`;

      return NextResponse.json({
        response: emergencyWarning,
        isEmergency: true,
        emergencyEvaluation: emergencyEval,
        isDemo: false,
        language
      });
    }

    const openai = getOpenAIClient();

    if (!openai || !isOpenAIConfigured()) {
      const syntheticResponse = getSyntheticChatResponse(message, language);
      return NextResponse.json({
        response: syntheticResponse,
        isDemo: true,
        model: 'synthetic-demo-mode',
        language
      });
    }

    // Construct prompt with medical safety system instructions
    const systemPrompt = `You are "IMD Care Health Assistant", a clinical communication & health literacy AI designed for an Indian healthcare startup.
Your core mission is to provide accurate, empathetic, accessible health education and help users make informed decisions.

MANDATORY MEDICAL SAFETY RULES:
1. NEVER diagnose conditions definitively. Use cautious phrases ("This could potentially be associated with...", "Common benign causes include...").
2. NEVER prescribe prescription medications, antibiotics, or specific drug dosages.
3. You may suggest standard non-pharmacological comfort measures (adequate hydration, rest, steam inhalation, warm salt-water gargle, gentle diet).
4. Always clarify when to seek professional medical evaluation from a licensed physician (MBBS/MD/specialist).
5. For India context, recommend consulting local registered practitioners and highlight standard emergency numbers (112, 108) if worsening.
6. LANGUAGE: Respond STRICTLY in the requested language:
   - If language is 'hi', reply in clear, culturally respectful Hindi using Devanagari script.
   - If language is 'mr', reply in fluent Marathi using Devanagari script.
   - If language is 'en', reply in clear, professional Indian English.
7. Format with structured bullet points, readable sections, and a short gentle closing disclaimer.`;

    const messagesPayload: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: systemPrompt }
    ];

    // Add safe conversation history
    for (const h of history) {
      if (h.role === 'user' || h.role === 'assistant') {
        messagesPayload.push({
          role: h.role,
          content: String(h.content || '').slice(0, 1000)
        });
      }
    }

    // Add current user prompt with language instruction
    messagesPayload.push({
      role: 'user',
      content: `[User Language: ${language.toUpperCase()}]\nUser Question: ${message}`
    });

    const model = getOpenAIModel();

    try {
      const completion = await openai.chat.completions.create({
        model: model,
        messages: messagesPayload,
        temperature: 0.6,
        max_tokens: 800,
      });

      const aiResponse = completion.choices[0]?.message?.content || '';

      if (!aiResponse) {
        throw new Error('Empty response from OpenAI');
      }

      return NextResponse.json({
        response: aiResponse,
        isDemo: false,
        model: model,
        language
      });
    } catch (apiError: unknown) {
      console.error('OpenAI API call error, falling back to synthetic guidance:', apiError);
      const fallbackResponse = getSyntheticChatResponse(message, language);
      return NextResponse.json({
        response: fallbackResponse,
        isDemo: true,
        fallbackNotice: 'Demo fallback activated due to API timeout or rate limit.',
        language
      });
    }
  } catch (err: unknown) {
    console.error('Chat route error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your health inquiry.' },
      { status: 500 }
    );
  }
}
