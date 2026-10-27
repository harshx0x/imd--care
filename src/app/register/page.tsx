'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  AlertCircle,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { useApp } from '@/context/AppContext';
import { AUTH_TRANSLATIONS } from '@/lib/translations/auth';
import { getSupabaseBrowserClient, isSupabaseConfigured } from '@/lib/supabase/client';

export default function RegisterPage() {
  const router = useRouter();
  const { language, isSupabaseReady, openDisclaimerModal } = useApp();
  const t = AUTH_TRANSLATIONS[language] || AUTH_TRANSLATIONS.en;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [consentTerms, setConsentTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    // Validation
    const cleanName = fullName.trim();
    if (!cleanName) {
      setErrorMsg(t.nameRequired);
      return;
    }
    if (cleanName.length < 2) {
      setErrorMsg(t.nameMinLength);
      return;
    }

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
    if (password.length < 6) {
      setErrorMsg(t.passwordMinLength);
      return;
    }

    if (!confirmPassword) {
      setErrorMsg(t.confirmPasswordRequired);
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg(t.passwordsDoNotMatch);
      return;
    }

    if (!consentTerms) {
      setErrorMsg(t.termsRequired);
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
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          data: {
            full_name: cleanName
          }
        }
      });

      if (error) {
        if (
          error.message.toLowerCase().includes('already registered') ||
          error.message.toLowerCase().includes('user already exists')
        ) {
          setErrorMsg(t.emailAlreadyInUse);
        } else {
          setErrorMsg(error.message || t.genericError);
        }
        setLoading(false);
        return;
      }

      if (data?.user) {
        setSuccessMsg(t.registerSuccessDesc);
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setConsentTerms(false);
      }
    } catch (err: unknown) {
      console.error('Registration error:', err);
      setErrorMsg(t.genericError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout activeTab="register">
      <div className="space-y-6">
        {/* Heading */}
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#102A43] tracking-tight">
            {t.registerHeading}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t.registerSubheading}
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
            className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-xs text-emerald-950 space-y-2 animate-in fade-in duration-200"
          >
            <div className="flex items-center space-x-2 font-bold text-emerald-900 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.registerSuccessTitle}</span>
            </div>
            <p className="leading-relaxed">{successMsg}</p>
            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F766E] hover:bg-[#0D655F] text-white font-bold rounded-xl text-xs transition"
              >
                <span>{t.loginLink} →</span>
              </Link>
            </div>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="register-name"
              className="block text-xs font-bold uppercase tracking-wider text-[#243447] mb-1"
            >
              {t.fullNameLabel} *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                <User className="w-4 h-4" />
              </div>
              <input
                id="register-name"
                type="text"
                autoComplete="name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t.fullNamePlaceholder}
                className="w-full bg-[#E8F7F5]/40 border border-[#CDE8E2] rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-[#243447] placeholder:text-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="register-email"
              className="block text-xs font-bold uppercase tracking-wider text-[#243447] mb-1"
            >
              {t.emailLabel} *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                <Mail className="w-4 h-4" />
              </div>
              <input
                id="register-email"
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
            <label
              htmlFor="register-password"
              className="block text-xs font-bold uppercase tracking-wider text-[#243447] mb-1"
            >
              {t.passwordLabel} *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id="register-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
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

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="register-confirm-password"
              className="block text-xs font-bold uppercase tracking-wider text-[#243447] mb-1"
            >
              {t.confirmPasswordLabel} *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id="register-confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t.confirmPasswordPlaceholder}
                className="w-full bg-[#E8F7F5]/40 border border-[#CDE8E2] rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-[#243447] placeholder:text-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#64748B] hover:text-[#243447] transition cursor-pointer"
                aria-label={showConfirmPassword ? t.hidePassword : t.showPassword}
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terms & Medical Disclaimer Consent */}
          <div className="pt-1">
            <label className="flex items-start space-x-2.5 text-xs text-[#243447] cursor-pointer">
              <input
                type="checkbox"
                required
                checked={consentTerms}
                onChange={(e) => setConsentTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded text-[#0F766E] focus:ring-[#0F766E] border-[#CDE8E2] shrink-0 cursor-pointer"
              />
              <span className="leading-relaxed text-[11px] sm:text-xs text-[#64748B]">
                {t.termsConsentPrefix}{' '}
                <button
                  type="button"
                  onClick={openDisclaimerModal}
                  className="font-bold text-[#0F766E] underline cursor-pointer"
                >
                  {t.termsConsentLink}
                </button>{' '}
                {t.termsConsentSuffix}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:opacity-60 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
          >
            {loading ? (
              <span>{t.registering}</span>
            ) : (
              <>
                <UserPlus className="w-4 h-4" />
                <span>{t.registerBtn}</span>
              </>
            )}
          </button>
        </form>

        {/* Link back to login */}
        <div className="pt-4 border-t border-[#CDE8E2]/70 text-center text-xs text-[#64748B]">
          <span>{t.alreadyHaveAccount} </span>
          <Link
            href="/login"
            className="font-bold text-[#0F766E] hover:underline"
          >
            {t.loginLink} →
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
