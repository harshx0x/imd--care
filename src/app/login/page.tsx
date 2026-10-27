'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { useApp } from '@/context/AppContext';
import { AUTH_TRANSLATIONS } from '@/lib/translations/auth';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/';

  const { language, isSupabaseReady } = useApp();
  const t = AUTH_TRANSLATIONS[language] || AUTH_TRANSLATIONS.en;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    // Validation
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
    if (!password) {
      setErrorMsg(t.passwordRequired);
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password
      });

      if (error) {
        if (
          error.message.toLowerCase().includes('invalid login credentials') ||
          error.message.toLowerCase().includes('invalid grant')
        ) {
          setErrorMsg(t.invalidCredentials);
        } else {
          setErrorMsg(error.message || t.genericError);
        }
        setLoading(false);
        return;
      }

      if (data?.user) {
        setSuccessMsg(t.loginSuccess);
        setTimeout(() => {
          router.push(redirectUrl);
          router.refresh();
        }, 800);
      }
    } catch (err: unknown) {
      console.error('Login error:', err);
      setErrorMsg(t.genericError);
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="space-y-1.5">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#102A43] tracking-tight">
          {t.loginHeading}
        </h2>
        <p className="text-xs sm:text-sm text-[#64748B]">
          {t.loginSubheading}
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

      {/* Success Notification */}
      {successMsg && (
        <div
          role="status"
          className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-start gap-2.5 animate-in fade-in duration-150"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span className="leading-snug font-medium">{successMsg}</span>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div>
          <label
            htmlFor="login-email"
            className="block text-xs font-bold uppercase tracking-wider text-[#243447] mb-1.5"
          >
            {t.emailLabel} *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="login-email"
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

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="login-password"
              className="block text-xs font-bold uppercase tracking-wider text-[#243447]"
            >
              {t.passwordLabel} *
            </label>
            <Link
              href="/forgot-password"
              className="text-xs font-semibold text-[#0F766E] hover:underline"
            >
              {t.forgotPasswordLink}
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
              <Lock className="w-4 h-4" />
            </div>
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.passwordPlaceholder}
              className="w-full bg-[#E8F7F5]/40 border border-[#CDE8E2] rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-[#243447] placeholder:text-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#64748B] hover:text-[#243447] transition cursor-pointer"
              aria-label={showPassword ? t.hidePassword : t.showPassword}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Remember Me Option */}
        <div className="flex items-center pt-1">
          <label className="flex items-center space-x-2 text-xs text-[#64748B] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded text-[#0F766E] focus:ring-[#0F766E] border-[#CDE8E2] cursor-pointer"
            />
            <span>{t.rememberMe}</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-4 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:opacity-60 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          {loading ? (
            <span>{t.loggingIn}</span>
          ) : (
            <>
              <LogIn className="w-4 h-4" />
              <span>{t.loginBtn}</span>
            </>
          )}
        </button>
      </form>

      {/* Link to Register */}
      <div className="pt-4 border-t border-[#CDE8E2]/70 text-center text-xs text-[#64748B]">
        <span>{t.dontHaveAccount} </span>
        <Link
          href="/register"
          className="font-bold text-[#0F766E] hover:underline"
        >
          {t.signUpLink} →
        </Link>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <AuthLayout activeTab="login">
      <Suspense
        fallback={
          <div className="p-8 text-center text-xs text-[#64748B]">
            Loading login form...
          </div>
        }
      >
        <LoginFormContent />
      </Suspense>
    </AuthLayout>
  );
}
