'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Send,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  KeyRound
} from 'lucide-react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { useApp } from '@/context/AppContext';
import { AUTH_TRANSLATIONS } from '@/lib/translations/auth';
import { getSupabaseBrowserClient, isSupabaseConfigured } from '@/lib/supabase/client';

export default function ForgotPasswordPage() {
  const { language, isSupabaseReady } = useApp();
  const t = AUTH_TRANSLATIONS[language] || AUTH_TRANSLATIONS.en;

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successSent, setSuccessSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setErrorMsg(t.emailRequired);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMsg(t.emailInvalid);
      return;
    }

    if (!isSupabaseReady) {
      setErrorMsg(t.setupBannerDesc);
      return;
    }

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setErrorMsg(t.setupBannerDesc);
      return;
    }

    setLoading(true);

    try {
      const redirectUrl = `${window.location.origin}/login`;
      const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
        redirectTo: redirectUrl
      });

      if (error) {
        // Safe handling: unless network error, avoid leaking whether email exists
        console.warn('Password recovery error:', error.message);
      }

      // Always show safe success confirmation
      setSuccessSent(true);
    } catch (err: unknown) {
      console.error('Password reset error:', err);
      setErrorMsg(t.genericError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout activeTab="forgot-password">
      <div className="space-y-6">
        {/* Heading */}
        <div className="space-y-1.5">
          <div className="w-10 h-10 rounded-2xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center mb-2 shadow-xs">
            <KeyRound className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#102A43] tracking-tight">
            {t.forgotPasswordHeading}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            {t.forgotPasswordSubheading}
          </p>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div
            role="alert"
            className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 flex items-start gap-2.5 animate-in fade-in duration-150"
          >
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <span className="leading-snug">{errorMsg}</span>
          </div>
        )}

        {/* Success Confirmation State */}
        {successSent ? (
          <div className="p-5 bg-emerald-50 border border-emerald-300 rounded-2xl text-xs text-emerald-950 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center space-x-2 font-bold text-emerald-900 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.resetLinkSentTitle}</span>
            </div>
            <p className="leading-relaxed text-[#243447]">
              {t.resetLinkSentDesc}
            </p>
            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F766E] hover:bg-[#0D655F] text-white font-bold rounded-xl text-xs transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t.backToLoginBtn}</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="reset-email"
                className="block text-xs font-bold uppercase tracking-wider text-[#243447] mb-1.5"
              >
                {t.emailLabel} *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="reset-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full bg-[#E8F7F5]/40 border border-[#CDE8E2] rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-[#243447] placeholder:text-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:opacity-60 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <span>{t.sendingReset}</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.sendResetBtn}</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Link back to login */}
        <div className="pt-4 border-t border-[#CDE8E2]/70 text-center text-xs text-[#64748B]">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 font-bold text-[#0F766E] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.backToLoginBtn}</span>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
