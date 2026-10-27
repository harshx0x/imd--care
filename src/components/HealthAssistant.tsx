'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Trash2,
  PhoneCall,
  ShieldAlert,
  BookOpen,
  ExternalLink,
  Info
} from 'lucide-react';
import { ChatMessage, Language } from '@/lib/types';
import { APP_TRANSLATIONS } from '@/lib/translations/app';
import { DailyHealthTips } from '@/components/DailyHealthTips';

interface HealthAssistantProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  openEmergencyModal: () => void;
  isDemoMode: boolean;
}

export function HealthAssistant({
  language,
  setLanguage,
  openEmergencyModal,
  isDemoMode
}: HealthAssistantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;

  const suggestedPrompts: Record<Language, string[]> = {
    en: [
      'What causes mild tension headaches and how to relieve them?',
      'How to manage high blood pressure with everyday Indian diet?',
      'Common home remedies for seasonal dry cough and throat irritation',
      'What are early warning signs of Type 2 Diabetes to watch for?'
    ],
    hi: [
      'हल्के सिरदर्द के क्या कारण हैं और इससे कैसे राहत पाएं?',
      'भारतीय खानपान से ब्लड प्रेशर कैसे नियंत्रित रखें?',
      'मौसमी सूखी खांसी के घरेलू उपाय क्या हैं?',
      'टाइप-2 डायबिटीज के शुरुआती लक्षण क्या हैं?'
    ],
    mr: [
      'डोकेदुखीची सामान्य कारणे आणि घरगुती उपाय काय आहेत?',
      'दैनंदिन आहारात रक्तदाब (BP) कसा नियंत्रित ठेवावा?',
      'खोकला आणि घशाच्या खवखवीवर आराम कसा मिळवावा?',
      'मधुमेहाची (Diabetes) प्राथमिक लक्षणे कोणती?'
    ]
  };

  // Initial welcome message based on language
  useEffect(() => {
    const initialWelcome: Record<Language, string> = {
      en: "Namaste! I am your IMD Care AI Health Assistant. How can I help you understand your wellness, lifestyle questions, or symptoms today?\n\n*Note: I provide educational health information and cannot diagnose or prescribe medicines. For emergencies, please call 112.*",
      hi: "नमस्ते! मैं आपका IMD Care AI स्वास्थ्य सहायक हूँ। आज मैं आपके स्वास्थ्य, जीवनशैली या लक्षणों को समझने में क्या सहायता कर सकता हूँ?\n\n*नोट: यह मार्गदर्शन केवल स्वास्थ्य जागरूकता के लिए है, किसी डॉक्टर का विकल्प नहीं है। आपात स्थिति में 112 डायल करें।*",
      mr: "नमस्कार! मी आपला IMD Care AI आरोग्य सहाय्यक आहे. आज मी आपल्याला आरोग्यविषयक किंवा जीवनशैलीच्या कोणत्या शंकांचे निरसन करण्यास मदत करू?\n\n*टीप: ही माहिती केवळ आरोग्य साक्षरतेसाठी आहे. तातडीच्या प्रसंगी 112 वर संपर्क करा.*"
    };

    const raf = requestAnimationFrame(() => {
      setMessages((prev) => {
        if (prev.length === 0 || (prev.length === 1 && prev[0].id === 'welcome-msg')) {
          return [
            {
              id: 'welcome-msg',
              role: 'assistant',
              content: initialWelcome[language] || initialWelcome.en,
              language: language,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              isDemo: isDemoMode
            }
          ];
        }
        return prev;
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [language, isDemoMode]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || input).trim();
    if (!messageText || loading) return;

    setError(null);
    const userMsgId = 'user-' + Date.now();
    const newUserMessage: ChatMessage = {
      id: userMsgId,
      role: 'user',
      content: messageText,
      language: language,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newUserMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          language: language,
          history: messages.slice(-4)
        })
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: 'assistant-' + Date.now(),
        role: 'assistant',
        content: data.response || t.assistant.emptyResponse,
        language: data.language || language,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isDemo: data.isDemo,
        citations: Array.isArray(data.citations) ? data.citations : [],
        isEvidenceSufficient: data.isEvidenceSufficient !== false,
        isRAGEnabled: Boolean(data.isRAGEnabled)
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: unknown) {
      console.error('Chat error:', err);
      setError(t.assistant.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    if (window.confirm(t.assistant.resetChatConfirm)) {
      setMessages([]);
    }
  };

  // Format assistant text with clean paragraph and bold formatting
  const renderMessageContent = (content: string) => {
    return content.split('\n\n').map((paragraph, pIdx) => {
      const lines = paragraph.split('\n');
      return (
        <div key={pIdx} className="mb-2.5 last:mb-0">
          {lines.map((line, lIdx) => {
            const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ') || /^\d+\.\s/.test(line.trim());
            const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

            return (
              <p
                key={lIdx}
                className={`${isBullet ? 'pl-3 relative before:content-["•"] before:absolute before:left-0 before:text-[#0F766E]' : ''} leading-relaxed`}
                dangerouslySetInnerHTML={{ __html: formattedLine }}
              />
            );
          })}
        </div>
      );
    });
  };

  return (
    <section id="assistant" className="py-8 sm:py-12 bg-[#E8F7F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#D9F3EC] text-[#0F766E] text-xs font-bold uppercase tracking-wider border border-[#35B8A6]/30">
            <Bot className="w-3.5 h-3.5 text-[#35B8A6]" />
            <span>{t.assistant.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
            {t.assistant.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t.assistant.description}
          </p>
        </div>

        {/* Chat Card Container */}
        <div className="bg-white rounded-2xl border border-[#CDE8E2] shadow-md overflow-hidden flex flex-col h-[650px]">
          {/* Chat Header Bar */}
          <div className="bg-[#102A43] text-white px-5 py-3.5 flex items-center justify-between border-b border-[#35B8A6]/20">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#35B8A6] flex items-center justify-center text-white shadow-sm border border-[#D9F3EC]/30">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-sm text-white">{t.assistant.botHeaderTitle}</h3>
                  <span className="w-2 h-2 rounded-full bg-[#35B8A6]" />
                </div>
                <p className="text-[11px] text-slate-300">
                  {t.assistant.activeStatus}
                </p>
              </div>
            </div>

            {/* Language & Actions */}
            <div className="flex items-center space-x-2">
              <div className="flex bg-white/10 p-0.5 rounded-lg border border-white/10 text-xs font-semibold">
                {(['en', 'hi', 'mr'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 rounded-md transition cursor-pointer ${
                      language === lang
                        ? 'bg-[#0F766E] text-white shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {lang === 'en' ? 'EN' : lang === 'hi' ? 'हिंदी' : 'मराठी'}
                  </button>
                ))}
              </div>

              <button
                onClick={handleClearChat}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition cursor-pointer"
                title={t.assistant.resetChatTitle}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#E8F7F5]/40">
            {messages.map((msg) => {
              const isAssistant = msg.role === 'assistant';
              const isEmergencyMsg =
                msg.content.includes('EMERGENCY RED FLAG') ||
                msg.content.includes('EMERGENCY WARNING') ||
                msg.content.includes('आपातकालीन चेतावनी') ||
                msg.content.includes('तातडीची वैद्यकीय सूचना');

              return (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-3 animate-fade-in-up ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-full bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shrink-0 mt-1 shadow-xs border border-[#CDE8E2]">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-xs sm:text-sm shadow-xs ${
                      isAssistant
                        ? isEmergencyMsg
                          ? 'bg-[#FEE2E2] text-red-950 border-2 border-red-400'
                          : 'bg-white text-[#243447] border border-[#CDE8E2]'
                        : 'bg-[#0F766E] text-white shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] pb-1.5 mb-1.5 border-b border-black/5">
                      <span className="font-bold flex items-center gap-1">
                        {isAssistant ? (
                          isEmergencyMsg ? (
                            <span className="text-red-700 flex items-center gap-1 font-bold">
                              <ShieldAlert className="w-3.5 h-3.5" /> {t.assistant.criticalAlert}
                            </span>
                          ) : (
                            <span className="text-[#0F766E] font-bold">{t.assistant.botHeaderTitle}</span>
                          )
                        ) : (
                          t.assistant.userLabel
                        )}
                      </span>
                      <div className="flex items-center space-x-1.5 opacity-70">
                        {isAssistant && msg.isRAGEnabled && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-semibold bg-[#D9F3EC] text-[#0F766E] border border-[#35B8A6]/20 flex items-center gap-0.5">
                            <BookOpen className="w-2.5 h-2.5" /> RAG
                          </span>
                        )}
                        {isAssistant && (
                          <span
                            className={`px-1.5 py-0.2 rounded text-[9px] font-semibold ${
                              msg.isDemo ? 'bg-amber-100 text-amber-800' : 'bg-[#D9F3EC] text-[#0F766E]'
                            }`}
                          >
                            {msg.isDemo ? t.common.demoMode : t.common.openAI}
                          </span>
                        )}
                        <span>{msg.timestamp}</span>
                      </div>
                    </div>

                    <div className="break-words">
                      {renderMessageContent(msg.content)}
                    </div>

                    {/* Verified Evidence Sources (RAG Citations) */}
                    {isAssistant && msg.citations && msg.citations.length > 0 && !isEmergencyMsg && (
                      <div className="mt-3.5 pt-3 border-t border-[#CDE8E2] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#102A43] flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-[#0F766E]" />
                            {t.assistant.sourcesTitle}
                          </span>
                          <span className="text-[10px] text-[#0F766E] bg-[#D9F3EC] px-2 py-0.5 rounded-full font-semibold border border-[#35B8A6]/20">
                            {t.assistant.verifiedSourcesBadge}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-2 pt-1">
                          {msg.citations.map((cite, cIdx) => (
                            <a
                              key={cite.id || cIdx}
                              href={cite.canonicalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block p-2.5 rounded-xl bg-[#E8F7F5]/50 hover:bg-[#D9F3EC] border border-[#CDE8E2] hover:border-[#35B8A6] transition duration-150 text-left"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="w-4 h-4 rounded-full bg-[#0F766E] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                                      {cIdx + 1}
                                    </span>
                                    <span className="text-[10px] font-bold text-[#0F766E] truncate">
                                      {cite.publisher}
                                    </span>
                                  </div>
                                  <p className="text-xs font-semibold text-[#102A43] group-hover:text-[#0F766E] transition line-clamp-1">
                                    {cite.sourceTitle}
                                  </p>
                                  {cite.heading && (
                                    <p className="text-[10px] text-[#64748B] line-clamp-1">
                                      {cite.heading}
                                    </p>
                                  )}
                                </div>
                                <div className="flex flex-col items-end shrink-0 gap-1">
                                  <span className="text-[9px] font-semibold text-[#0F766E] bg-white px-1.5 py-0.5 rounded border border-[#CDE8E2]">
                                    {cite.relevanceScore}% match
                                  </span>
                                  <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-[#0F766E] transition" />
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Insufficient Evidence Notice */}
                    {isAssistant && msg.isEvidenceSufficient === false && !isEmergencyMsg && (
                      <div className="mt-3 p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
                        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-900">{t.assistant.insufficientEvidenceTitle}</p>
                          <p className="text-amber-800 text-[11px] mt-0.5">{t.assistant.insufficientEvidenceDesc}</p>
                        </div>
                      </div>
                    )}

                    {isEmergencyMsg && (
                      <div className="mt-3 pt-2 border-t border-red-200 flex items-center justify-between">
                        <button
                          onClick={openEmergencyModal}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>{t.assistant.call112Btn}</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {!isAssistant && (
                    <div className="w-8 h-8 rounded-full bg-[#102A43] text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading typing indicator */}
            {loading && (
              <div className="flex items-start space-x-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shrink-0 mt-1 border border-[#CDE8E2]">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-[#CDE8E2] rounded-2xl px-4 py-3 shadow-xs flex items-center space-x-2">
                  <span className="text-xs text-[#64748B] font-medium">{t.assistant.formulatingGuidance}</span>
                  <div className="flex space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-dot-1" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-dot-2" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-dot-3" />
                  </div>
                </div>
              </div>
            )}

            {/* Error display */}
            {error && (
              <div className="p-3 bg-[#FEE2E2] border border-red-200 rounded-xl text-xs text-red-900 flex items-center justify-between">
                <span>{error}</span>
                <button
                  onClick={() => handleSendMessage()}
                  className="px-2.5 py-1 bg-red-100 hover:bg-red-200 text-red-900 font-semibold rounded-md transition cursor-pointer"
                >
                  {t.common.retry}
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts Shelf */}
          <div className="bg-white border-t border-[#CDE8E2] px-4 py-2.5">
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] uppercase font-bold text-[#64748B] shrink-0">
                {t.assistant.suggestedLabel}
              </span>
              {suggestedPrompts[language]?.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={loading}
                  className="text-xs bg-[#D9F3EC]/80 hover:bg-[#0F766E] text-[#0F766E] hover:text-white px-3 py-1 rounded-full whitespace-nowrap transition border border-[#CDE8E2] font-medium shrink-0 disabled:opacity-50 cursor-pointer shadow-2xs"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="bg-white p-3 sm:p-4 border-t border-[#CDE8E2] flex items-center space-x-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.assistant.inputPlaceholder}
              rows={1}
              disabled={loading}
              className="flex-1 resize-none bg-[#E8F7F5]/50 border border-[#CDE8E2] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#243447] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent transition"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={loading || !input.trim()}
              className="p-3 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:bg-slate-300 text-white rounded-xl shadow-md transition transform active:scale-95 disabled:scale-100 cursor-pointer"
              aria-label={t.assistant.sendAria}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Safety Note */}
        <p className="text-[11px] text-[#64748B] text-center mt-3">
          {t.assistant.safetyNote}
        </p>

        {/* Compact Daily Medical Tip for Assistant Users */}
        <div className="mt-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
          <DailyHealthTips language={language} variant="compact" />
        </div>
      </div>
    </section>
  );
}
