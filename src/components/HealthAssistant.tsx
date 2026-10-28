'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Send,
  Bot,
  User,
  Trash2,
  PhoneCall,
  ShieldAlert,
  BookOpen,
  ExternalLink,
  Info,
  Sparkles
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

  // Question chips matching prompt requirements
  const promptChips: Record<Language, { label: string; text: string }[]> = {
    en: [
      { label: 'Explain this health term', text: 'What do systolic and diastolic blood pressure readings mean?' },
      { label: 'How can I sleep better?', text: 'What are proven daily habits to improve sleep quality naturally?' },
      { label: 'What do common symptoms mean?', text: 'What causes mild tension headaches and when should I see a doctor?' },
      { label: 'Help me understand a lab result', text: 'Can you explain what an elevated HbA1c test result signifies?' }
    ],
    hi: [
      { label: 'स्वास्थ्य शब्द समझें', text: 'सिस्टोलिक और डायस्टोलिक ब्लड प्रेशर का क्या अर्थ है?' },
      { label: 'अच्छी नींद कैसे लें?', text: 'गहरी और आरामदायक नींद के लिए क्या उपाय करें?' },
      { label: 'सामान्य लक्षणों का क्या अर्थ है?', text: 'सिरदर्द के आम कारण क्या हैं और डॉक्टर से कब मिलें?' },
      { label: 'लैब रिपोर्ट समझने में मदद', text: 'HbA1c टेस्ट का स्तर बढ़ने का क्या मतलब होता है?' }
    ],
    mr: [
      { label: 'वैद्यकीय संज्ञा समजून घ्या', text: 'रक्तदाबातील सिस्टॉलिक आणि डायस्टॉलिक म्हणजे काय?' },
      { label: 'शांत झोप कशी मिळवावी?', text: 'शांत आणि निरोगी झोपेसाठी दैनंदिन उपाय कोणते?' },
      { label: 'सामान्य लक्षणांचा अर्थ काय?', text: 'डोकेदुखीची सामान्य कारणे आणि खबरदारी काय घ्यावी?' },
      { label: 'लॅब रिपोर्ट समजून घ्या', text: 'HbA1c चे प्रमाण वाढल्यास त्याचा नेमका अर्थ काय होतो?' }
    ]
  };

  const handleSendMessage = useCallback(async (textToSend?: string) => {
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
  }, [input, loading, language, messages, t.assistant.emptyResponse, t.assistant.errorMessage]);

  // Check URL query param `?q=...` on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const query = params.get('q');
      if (query && query.trim()) {
        const timer = setTimeout(() => {
          handleSendMessage(query.trim());
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [handleSendMessage]);

  // Initial welcome message based on language
  useEffect(() => {
    const initialWelcome: Record<Language, string> = {
      en: "Namaste! I am your IMD Care AI Health Assistant — your personal health companion. How can I help you understand your wellness, lifestyle questions, or lab results today?\n\n*Note: I provide educational health information grounded in verified medical references. I cannot diagnose or prescribe medications. In an acute emergency, please call 112 immediately.*",
      hi: "नमस्ते! मैं आपका IMD Care AI स्वास्थ्य साथी हूँ — आपका व्यक्तिगत स्वास्थ्य मार्गदर्शक। आज मैं आपके स्वास्थ्य, जीवनशैली या लैब रिपोर्ट को समझने में क्या सहायता कर सकता हूँ?\n\n*नोट: यह मार्गदर्शन केवल स्वास्थ्य जागरूकता के लिए है। आपात स्थिति में तुरंत 112 या 108 डायल करें।*",
      mr: "नमस्कार! मी आपला IMD Care AI आरोग्य मित्र आहे — आपला वैयक्तिक आरोग्य मार्गदर्शक. आज मी आपल्या आरोग्यविषयक, जीवनशैलीच्या किंवा लॅब रिपोर्टच्या कोणत्या शंकांचे निरसन करण्यास मदत करू?\n\n*टीप: ही माहिती केवळ आरोग्य साक्षरतेसाठी आहे. तातडीच्या प्रसंगी तात्काळ ११२ किंवा १०८ वर संपर्क करा.*"
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

  const currentChips = promptChips[language] || promptChips.en;

  return (
    <section id="assistant" className="py-8 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Friendly Hero Banner with Assistant Avatar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            {/* Friendly Assistant Mascot Avatar */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] p-1 shadow-md shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-16 sm:h-16" fill="none">
                <circle cx="24" cy="22" r="14" fill="#FFFFFF" />
                <circle cx="19" cy="20" r="2" fill="#0F766E" />
                <circle cx="29" cy="20" r="2" fill="#0F766E" />
                <path d="M18 25C20 28 28 28 30 25" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 22C10 14 14 8 24 8C34 8 38 14 38 22" stroke="#D9F3EC" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="10" cy="22" r="2.5" fill="#35B8A6" />
                <circle cx="38" cy="22" r="2.5" fill="#35B8A6" />
                <circle cx="36" cy="10" r="4" fill="#FEF3C7" />
                <path d="M36 8V12M34 10H38" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F7F5] text-[#0F766E] text-2xs font-bold uppercase tracking-wider border border-[#0F766E]/20 mb-1.5">
                <Sparkles className="w-3 h-3 text-[#35B8A6]" />
                <span>Your Personal Health Companion</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight">
                {t.assistant.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                {t.assistant.description}
              </p>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-semibold self-center shrink-0">
            {(['en', 'hi', 'mr'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1.5 rounded-xl transition cursor-pointer ${
                  language === lang
                    ? 'bg-[#0F766E] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#102A43] hover:bg-white/60'
                }`}
              >
                {lang === 'en' ? 'English' : lang === 'hi' ? 'हिंदी' : 'मराठी'}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden flex flex-col h-[650px]">
          {/* Chat Header Bar */}
          <div className="bg-[#102A43] text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#35B8A6] flex items-center justify-center text-white shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-sm text-white">{t.assistant.botHeaderTitle}</h3>
                  <span className="w-2 h-2 rounded-full bg-[#35B8A6] animate-pulse" />
                </div>
                <p className="text-2xs text-slate-300">
                  {t.assistant.activeStatus}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleClearChat}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
                title={t.assistant.resetChatTitle}
                aria-label={t.assistant.resetChatTitle}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/60">
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
                  className={`flex items-start space-x-3 animate-fade-in ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-2xl bg-[#E8F7F5] text-[#0F766E] flex items-center justify-center shrink-0 mt-1 shadow-2xs border border-[#0F766E]/20">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-3xl px-5 py-3.5 text-xs sm:text-sm shadow-2xs ${
                      isAssistant
                        ? isEmergencyMsg
                          ? 'bg-rose-50 text-rose-950 border-2 border-rose-400'
                          : 'bg-white text-slate-800 border border-slate-200/90'
                        : 'bg-[#0F766E] text-white shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between text-2xs pb-1.5 mb-1.5 border-b border-black/5">
                      <span className="font-bold flex items-center gap-1">
                        {isAssistant ? (
                          isEmergencyMsg ? (
                            <span className="text-rose-700 flex items-center gap-1 font-bold">
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
                          <span className="px-1.5 py-0.2 rounded text-3xs font-semibold bg-[#E8F7F5] text-[#0F766E] border border-[#0F766E]/20 flex items-center gap-0.5">
                            <BookOpen className="w-2.5 h-2.5" /> RAG
                          </span>
                        )}
                        {isAssistant && (
                          <span
                            className={`px-1.5 py-0.2 rounded text-3xs font-semibold ${
                              msg.isDemo ? 'bg-amber-100 text-amber-800' : 'bg-[#E8F7F5] text-[#0F766E]'
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
                      <div className="mt-3.5 pt-3 border-t border-slate-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#102A43] flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-[#0F766E]" />
                            {t.assistant.sourcesTitle}
                          </span>
                          <span className="text-2xs text-[#0F766E] bg-[#E8F7F5] px-2 py-0.5 rounded-full font-semibold border border-[#0F766E]/20">
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
                              className="group block p-2.5 rounded-2xl bg-slate-50 hover:bg-[#E8F7F5] border border-slate-200 hover:border-[#35B8A6] transition duration-150 text-left"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="w-4 h-4 rounded-full bg-[#0F766E] text-white text-3xs font-bold flex items-center justify-center shrink-0">
                                      {cIdx + 1}
                                    </span>
                                    <span className="text-2xs font-bold text-[#0F766E] truncate">
                                      {cite.publisher}
                                    </span>
                                  </div>
                                  <p className="text-xs font-semibold text-[#102A43] group-hover:text-[#0F766E] transition line-clamp-1">
                                    {cite.sourceTitle}
                                  </p>
                                  {cite.heading && (
                                    <p className="text-2xs text-slate-500 line-clamp-1">
                                      {cite.heading}
                                    </p>
                                  )}
                                </div>
                                <div className="flex flex-col items-end shrink-0 gap-1">
                                  <span className="text-3xs font-semibold text-[#0F766E] bg-white px-1.5 py-0.5 rounded border border-slate-200">
                                    {cite.relevanceScore}% match
                                  </span>
                                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0F766E] transition" />
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Insufficient Evidence Notice */}
                    {isAssistant && msg.isEvidenceSufficient === false && !isEmergencyMsg && (
                      <div className="mt-3 p-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-2xs text-amber-900 flex items-start gap-2">
                        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-900">{t.assistant.insufficientEvidenceTitle}</p>
                          <p className="text-amber-800 text-2xs mt-0.5">{t.assistant.insufficientEvidenceDesc}</p>
                        </div>
                      </div>
                    )}

                    {isEmergencyMsg && (
                      <div className="mt-3 pt-2 border-t border-rose-200 flex items-center justify-between">
                        <button
                          onClick={openEmergencyModal}
                          className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>{t.assistant.call112Btn}</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {!isAssistant && (
                    <div className="w-8 h-8 rounded-2xl bg-[#102A43] text-white flex items-center justify-center shrink-0 mt-1 shadow-2xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading typing indicator */}
            {loading && (
              <div className="flex items-start space-x-3 justify-start">
                <div className="w-8 h-8 rounded-2xl bg-[#E8F7F5] text-[#0F766E] flex items-center justify-center shrink-0 mt-1 border border-[#0F766E]/20">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 rounded-3xl px-4 py-3 shadow-2xs flex items-center space-x-2">
                  <span className="text-xs text-slate-500 font-medium">{t.assistant.formulatingGuidance}</span>
                  <div className="flex space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse delay-75" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse delay-150" />
                  </div>
                </div>
              </div>
            )}

            {/* Error display */}
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-900 flex items-center justify-between">
                <span>{error}</span>
                <button
                  onClick={() => handleSendMessage()}
                  className="px-2.5 py-1 bg-rose-100 hover:bg-rose-200 text-rose-900 font-semibold rounded-xl transition cursor-pointer"
                >
                  {t.common.retry}
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts Shelf matching requirements */}
          <div className="bg-white border-t border-slate-200 px-4 py-2.5">
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-3xs uppercase font-bold text-slate-400 shrink-0">
                Suggested:
              </span>
              {currentChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip.text)}
                  disabled={loading}
                  className="text-xs bg-slate-100 hover:bg-[#E8F7F5] text-slate-700 hover:text-[#0F766E] px-3 py-1 rounded-full whitespace-nowrap transition border border-slate-200 font-medium shrink-0 disabled:opacity-50 cursor-pointer shadow-2xs flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="bg-white p-3 sm:p-4 border-t border-slate-200 flex items-center space-x-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.assistant.inputPlaceholder}
              rows={1}
              disabled={loading}
              className="flex-1 resize-none bg-slate-50 border border-slate-300 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0F766E]/40 focus:bg-white transition"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={loading || !input.trim()}
              className="p-3 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:bg-slate-300 text-white rounded-2xl shadow-xs transition transform active:scale-95 disabled:scale-100 cursor-pointer"
              aria-label={t.assistant.sendAria}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Safety Note */}
        <p className="text-2xs text-slate-500 text-center mt-3">
          {t.assistant.safetyNote}
        </p>

        {/* Compact Daily Medical Tip for Assistant Users */}
        <div className="mt-8 max-w-3xl mx-auto">
          <DailyHealthTips language={language} variant="compact" />
        </div>
      </div>
    </section>
  );
}
