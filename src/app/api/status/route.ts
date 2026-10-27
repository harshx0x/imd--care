import { NextResponse } from 'next/server';
import { isOpenAIConfigured, getOpenAIModel } from '@/lib/openai';
import { getIndianEmergencyNumbers } from '@/lib/emergency';

export async function GET() {
  const configured = isOpenAIConfigured();
  const model = getOpenAIModel();
  const emergencyNumbers = getIndianEmergencyNumbers();

  return NextResponse.json({
    status: 'ok',
    openAIConfigured: configured,
    model: configured ? model : 'synthetic-demo-mode',
    demoMode: !configured,
    emergencyHelpline: '112',
    ambulanceHelpline: '108',
    emergencyNumbers,
    systemTime: new Date().toISOString()
  });
}
