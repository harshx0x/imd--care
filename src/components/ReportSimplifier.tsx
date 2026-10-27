'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Upload,
  FileSpreadsheet,
  Sparkles,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Eye,
  ChevronDown,
  ChevronUp,
  Lock,
  Plus,
  RotateCcw,
  HelpCircle,
  Info,
  FileCheck
} from 'lucide-react';
import { SYNTHETIC_LAB_REPORTS } from '@/lib/synthetic-data';
import { determineTestStatus } from '@/lib/report-parser';
import {
  ReportExplanationRequest,
  ReportExplanationResult,
  Language,
  ImportedReportAnalysisResult,
  ImportedTestItem,
  ExtractedReportData
} from '@/lib/types';
import { APP_TRANSLATIONS } from '@/lib/translations/app';
import { DailyHealthTips } from '@/components/DailyHealthTips';

interface ReportSimplifierProps {
  language: Language;
}

export function ReportSimplifier({ language }: ReportSimplifierProps) {
  // Upload and Analysis States
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [extractLoading, setExtractLoading] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);

  // Extracted Data and Layman Analysis
  const [extractedData, setExtractedData] = useState<ExtractedReportData | null>(null);
  const [reviewItems, setReviewItems] = useState<ImportedTestItem[]>([]);
  const [finalAnalysis, setFinalAnalysis] = useState<ImportedReportAnalysisResult | null>(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Expandable Accordion States (all collapsed by default)
  const [showAllResultsTable, setShowAllResultsTable] = useState(false);
  const [showExtractionDetails, setShowExtractionDetails] = useState(false);
  const [showRawText, setShowRawText] = useState(false);
  const [expandedTestIds, setExpandedTestIds] = useState<Set<string>>(new Set());

  // Optional manual mode toggle (kept minimal, off by default)
  const [showManualMode, setShowManualMode] = useState(false);
  const [testName, setTestName] = useState(SYNTHETIC_LAB_REPORTS[0].testName);
  const [resultValue, setResultValue] = useState(SYNTHETIC_LAB_REPORTS[0].resultValue);
  const [unit, setUnit] = useState(SYNTHETIC_LAB_REPORTS[0].unit);
  const [referenceRange, setReferenceRange] = useState(SYNTHETIC_LAB_REPORTS[0].referenceRange);
  const [clinicalContext, setClinicalContext] = useState('');
  const [manualLoading, setManualLoading] = useState(false);
  const [manualExplanation, setManualExplanation] = useState<ReportExplanationResult | null>(null);
  const [manualError, setManualError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;

  // Cleanup object URL when selectedFile changes
  useEffect(() => {
    if (!selectedFile) {
      setFilePreviewUrl(null);
      return;
    }
    if (selectedFile.type.startsWith('image/')) {
      const url = URL.createObjectURL(selectedFile);
      setFilePreviewUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setFilePreviewUrl(null);
    }
  }, [selectedFile]);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const validateAndSetFile = (file: File) => {
    setImportError(null);
    const MAX_BYTES = 10 * 1024 * 1024; // 10 MB limit
    const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png'];
    const fileName = file.name.toLowerCase();
    const hasValidExt = allowedExtensions.some((ext) => fileName.endsWith(ext));
    const isMimeAllowed =
      file.type === 'application/pdf' ||
      file.type.startsWith('image/') ||
      hasValidExt;

    if (!isMimeAllowed) {
      setImportError(t.reports.errorUnsupportedType);
      return;
    }

    if (file.size > MAX_BYTES) {
      setImportError(t.reports.errorOversized);
      return;
    }

    setSelectedFile(file);
    setExtractedData(null);
    setReviewItems([]);
    setFinalAnalysis(null);
    setAnalysisComplete(false);
    setExpandedTestIds(new Set());
    setShowAllResultsTable(false);
    setShowExtractionDetails(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFilePreviewUrl(null);
    setShowPreviewModal(false);
    setExtractedData(null);
    setReviewItems([]);
    setFinalAnalysis(null);
    setAnalysisComplete(false);
    setImportError(null);
    setExpandedTestIds(new Set());
    setShowAllResultsTable(false);
    setShowExtractionDetails(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Pipeline: Extract & Analyze Document
  const handleAnalyzeDocument = async () => {
    if (!selectedFile || extractLoading) return;

    setExtractLoading(true);
    setImportError(null);

    try {
      // 1. Send file for extraction
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('action', 'extract');
      formData.append('language', language);

      const res = await fetch('/api/reports/import', {
        method: 'POST',
        body: formData
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(errData?.error || t.reports.errorMessage);
      }

      const data: ExtractedReportData = await res.json();
      setExtractedData(data);
      const items = data.tests || [];
      setReviewItems(items);

      if (data.isUnreadable || items.length === 0) {
        throw new Error(data.unreadableReason || t.reports.unreadableTryAgain);
      }

      // 2. Automatically generate concise layman analysis
      const explainPayload = {
        confirmedTests: items,
        fileName: selectedFile?.name || 'Uploaded Report',
        language
      };

      const explainRes = await fetch('/api/reports/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(explainPayload)
      });

      if (!explainRes.ok) {
        const errData = await explainRes.json().catch(() => null);
        throw new Error(errData?.error || t.reports.errorMessage);
      }

      const analysisData: ImportedReportAnalysisResult = await explainRes.json();
      setFinalAnalysis(analysisData);
      setAnalysisComplete(true);
    } catch (err: unknown) {
      console.error('Report analysis error:', err);
      setImportError(err instanceof Error ? err.message : t.reports.errorMessage);
    } finally {
      setExtractLoading(false);
    }
  };

  // Toggle individual test card explanation ("Understand This Result")
  const toggleTestExplanation = (testId: string) => {
    setExpandedTestIds((prev) => {
      const next = new Set(prev);
      if (next.has(testId)) {
        next.delete(testId);
      } else {
        next.add(testId);
      }
      return next;
    });
  };

  // Update Review Table Fields (User Correction in "View All Results")
  const handleUpdateItem = (
    index: number,
    field: keyof ImportedTestItem,
    value: string
  ) => {
    setReviewItems((prev) => {
      const updated = [...prev];
      const item = { ...updated[index], [field]: value };

      if (field === 'resultValue' || field === 'referenceRange') {
        const num = parseFloat(item.resultValue.replace(/[<>=,]/g, ''));
        item.numericValue = !isNaN(num) ? num : null;
        item.status = determineTestStatus(
          item.resultValue,
          item.numericValue,
          item.referenceRange || '',
          item.labFlag
        );
      }

      updated[index] = item;
      return updated;
    });
  };

  const handleToggleVerification = (index: number) => {
    setReviewItems((prev) => {
      const updated = [...prev];
      const current = updated[index];
      const nextStatus =
        current.verificationStatus === 'verified'
          ? 'needs_verification'
          : 'verified';
      updated[index] = {
        ...current,
        verificationStatus: nextStatus,
        verificationReason:
          nextStatus === 'verified' ? undefined : current.verificationReason
      };
      return updated;
    });
  };

  const handleDeleteRow = (index: number) => {
    setReviewItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddRow = () => {
    const newItem: ImportedTestItem = {
      id: `rec_new_${Date.now()}`,
      testName: 'New Biomarker',
      resultValue: '0.0',
      unit: '',
      referenceRange: 'Not specified on report',
      status: 'inconclusive',
      verificationStatus: 'needs_verification',
      verificationReason: 'User-added biomarker; please verify against original report',
      simpleExplanation: ''
    };
    setReviewItems((prev) => [...prev, newItem]);
  };

  // Refresh analysis when user edits values in "View All Results"
  const handleReanalyzeValues = async () => {
    if (reviewItems.length === 0 || extractLoading) return;
    setExtractLoading(true);
    setImportError(null);
    try {
      const explainPayload = {
        confirmedTests: reviewItems,
        fileName: selectedFile?.name || 'Uploaded Report',
        language
      };
      const explainRes = await fetch('/api/reports/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(explainPayload)
      });
      if (explainRes.ok) {
        const analysisData: ImportedReportAnalysisResult = await explainRes.json();
        setFinalAnalysis(analysisData);
      }
    } catch {
      // ignore
    } finally {
      setExtractLoading(false);
    }
  };

  // Manual fallback handler
  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testName.trim() || !resultValue.trim() || manualLoading) return;
    setManualError(null);
    setManualLoading(true);
    try {
      const payload: ReportExplanationRequest = {
        testName: testName.trim(),
        resultValue: resultValue.trim(),
        unit: unit.trim(),
        referenceRange: referenceRange.trim(),
        clinicalContext: clinicalContext.trim(),
        language
      };
      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        throw new Error(t.reports.errorMessage);
      }
      const data: ReportExplanationResult = await res.json();
      setManualExplanation(data);
    } catch (err) {
      setManualError(err instanceof Error ? err.message : t.reports.errorMessage);
    } finally {
      setManualLoading(false);
    }
  };

  // Computed metrics for After Analysis screen
  const abnormalCount = useMemo(() => {
    return reviewItems.filter(
      (t) => t.status === 'above' || t.status === 'below'
    ).length;
  }, [reviewItems]);

  // Sort tests so priority / flagged tests appear first in the compact cards
  const sortedTests = useMemo(() => {
    return [...reviewItems].sort((a, b) => {
      const aFlagged = a.status === 'above' || a.status === 'below' || a.verificationStatus === 'needs_verification';
      const bFlagged = b.status === 'above' || b.status === 'below' || b.verificationStatus === 'needs_verification';
      if (aFlagged && !bFlagged) return -1;
      if (!aFlagged && bFlagged) return 1;
      return 0;
    });
  }, [reviewItems]);

  const renderStatusBadge = (status: string, verificationStatus?: string) => {
    if (verificationStatus === 'needs_verification') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          <AlertTriangle className="w-3 h-3 text-amber-600" />
          <span>{t.reports.statusNeedsVerificationTag}</span>
        </span>
      );
    }
    if (status === 'above') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-300">
          <span>{t.reports.statusHigh}</span>
        </span>
      );
    }
    if (status === 'below') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-800 border border-sky-300">
          <span>{t.reports.statusLow}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#D9F3EC] text-[#0F766E] border border-[#35B8A6]/30">
        <CheckCircle2 className="w-3 h-3 text-[#0F766E]" />
        <span>{t.reports.statusWithinRange}</span>
      </span>
    );
  };

  return (
    <section id="reports" className="py-8 sm:py-12 bg-[#E8F7F5] min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Hidden native file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
          onChange={handleFileInputChange}
          className="hidden"
        />

        {/* =================================================================== */}
        {/* SCREEN 1 & 2: INITIAL SCREEN & AFTER UPLOAD SCREEN                  */}
        {/* =================================================================== */}
        {!analysisComplete && (
          <div className="max-w-xl mx-auto space-y-6 animate-fade-in-up">
            {/* 1. Compact Header */}
            <div className="text-center space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
                {t.reports.compactHeading}
              </h1>
              <p className="text-xs sm:text-sm text-[#64748B]">
                {t.reports.oneLineDesc}
              </p>
            </div>

            {/* Error Banner */}
            {importError && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-800 flex items-start gap-2.5 shadow-xs animate-fade-in">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold">{importError}</p>
                </div>
              </div>
            )}

            {/* 2. Upload Card (Initial State vs File Selected State) */}
            {!selectedFile ? (
              /* CLEAN MINIMAL INITIAL UPLOAD CARD */
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`bg-white rounded-3xl border-2 border-dashed p-8 sm:p-10 text-center cursor-pointer transition flex flex-col items-center justify-center shadow-sm group card-hover-lift ${
                  isDragging
                    ? 'border-[#0F766E] bg-[#D9F3EC]/50 scale-[1.01]'
                    : 'border-[#CDE8E2] hover:border-[#35B8A6] hover:bg-[#F4FBFA]'
                }`}
              >
                {/* Upload Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition transform">
                  <Upload className="w-7 h-7 text-[#0F766E]" />
                </div>

                {/* Single Primary Upload Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="px-6 py-3 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer btn-interactive mb-4"
                >
                  <Upload className="w-4 h-4" />
                  <span>{t.reports.uploadBtn}</span>
                </button>

                {/* Supported Formats */}
                <p className="text-xs text-[#64748B] font-medium">
                  {t.reports.supportedFormatsShort}
                </p>

                {/* Small Privacy Note */}
                <div className="mt-5 pt-4 border-t border-[#CDE8E2]/70 flex items-center justify-center gap-1.5 text-[11px] text-[#0F766E] font-medium">
                  <Lock className="w-3.5 h-3.5 text-[#35B8A6]" />
                  <span>{t.reports.privacyNoteShort}</span>
                </div>
              </div>
            ) : (
              /* COMPACT FILE CARD (AFTER UPLOAD) */
              <div className="bg-white rounded-2xl border border-[#CDE8E2] p-5 sm:p-6 shadow-sm space-y-4 animate-fade-in card-hover-lift">
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#CDE8E2]/70">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shrink-0 border border-[#35B8A6]/30">
                      <FileCheck className="w-5 h-5 text-[#0F766E]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#102A43] truncate">
                        {selectedFile.name}
                      </h4>
                      <span className="text-[11px] text-[#64748B] font-mono">
                        {formatFileSize(selectedFile.size)}
                      </span>
                    </div>
                  </div>

                  {/* Actions: Preview & Remove */}
                  <div className="flex items-center space-x-2 shrink-0">
                    {filePreviewUrl && (
                      <button
                        type="button"
                        onClick={() => setShowPreviewModal(!showPreviewModal)}
                        className="px-2.5 py-1 text-xs font-semibold text-[#0F766E] hover:bg-[#D9F3EC] rounded-lg transition border border-[#CDE8E2] flex items-center gap-1 cursor-pointer"
                        title={t.reports.previewBtn}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{t.reports.previewBtn}</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-1.5 text-[#64748B] hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                      title={t.reports.removeFile}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Optional Small Preview Thumbnail / Viewer */}
                {showPreviewModal && filePreviewUrl && (
                  <div className="rounded-xl border border-[#CDE8E2] bg-[#E8F7F5]/40 p-3 flex flex-col items-center animate-fade-in">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={filePreviewUrl}
                      alt="Uploaded lab report preview"
                      className="max-h-48 rounded-lg object-contain border border-[#CDE8E2] shadow-2xs"
                    />
                  </div>
                )}

                {/* Prominent Analyze Report Button */}
                <button
                  type="button"
                  onClick={handleAnalyzeDocument}
                  disabled={extractLoading}
                  className="w-full py-3.5 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:bg-slate-300 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer btn-interactive"
                >
                  {extractLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{t.reports.analyzingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-emerald-200" />
                      <span>{t.reports.analyzeBtn}</span>
                    </>
                  )}
                </button>

                {/* Progress Indicator during analysis */}
                {extractLoading && (
                  <div className="space-y-2 pt-1 animate-fade-in">
                    <div className="w-full bg-[#E8F7F5] rounded-full h-2.5 overflow-hidden border border-[#CDE8E2]">
                      <div className="progress-shimmer h-full w-full rounded-full" />
                    </div>
                    <p className="text-xs text-center text-[#0F766E] font-semibold animate-pulse">
                      {t.reports.analyzingHint}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Subtle Manual Fallback Link */}
            {!selectedFile && (
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setShowManualMode(!showManualMode)}
                  className="text-xs text-[#0F766E] hover:underline font-medium cursor-pointer"
                >
                  {showManualMode ? 'Hide manual test input' : 'Or enter a specific test value manually'}
                </button>

                {showManualMode && (
                  <form
                    onSubmit={handleManualSubmit}
                    className="mt-4 p-5 bg-white rounded-2xl border border-[#CDE8E2] text-left space-y-3 shadow-xs animate-fade-in"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
                      {t.reports.formTitle}
                    </h4>
                    <div>
                      <label className="text-[11px] font-bold text-[#64748B] block mb-1">
                        {t.reports.testNameLabel}
                      </label>
                      <input
                        type="text"
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        placeholder={t.reports.testNamePlaceholder}
                        required
                        className="w-full bg-[#E8F7F5]/40 border border-[#CDE8E2] rounded-xl px-3 py-2 text-xs text-[#243447] focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[11px] font-bold text-[#64748B] block mb-1">
                          {t.reports.resultValueLabel}
                        </label>
                        <input
                          type="text"
                          value={resultValue}
                          onChange={(e) => setResultValue(e.target.value)}
                          placeholder={t.reports.resultValuePlaceholder}
                          required
                          className="w-full bg-[#E8F7F5]/40 border border-[#CDE8E2] rounded-xl px-3 py-2 text-xs text-[#243447] focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-[#64748B] block mb-1">
                          {t.reports.unitLabel}
                        </label>
                        <input
                          type="text"
                          value={unit}
                          onChange={(e) => setUnit(e.target.value)}
                          placeholder={t.reports.unitPlaceholder}
                          required
                          className="w-full bg-[#E8F7F5]/40 border border-[#CDE8E2] rounded-xl px-3 py-2 text-xs text-[#243447] focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#64748B] block mb-1">
                        {t.reports.rangeLabel}
                      </label>
                      <input
                        type="text"
                        value={referenceRange}
                        onChange={(e) => setReferenceRange(e.target.value)}
                        placeholder={t.reports.rangePlaceholder}
                        className="w-full bg-[#E8F7F5]/40 border border-[#CDE8E2] rounded-xl px-3 py-2 text-xs text-[#243447] focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={manualLoading}
                      className="w-full py-2.5 bg-[#0F766E] hover:bg-[#0D655F] text-white font-bold text-xs rounded-xl shadow-xs transition btn-interactive cursor-pointer"
                    >
                      {manualLoading ? t.reports.loadingCta : t.reports.submitCta}
                    </button>
                    {manualError && (
                      <p className="text-xs text-red-600 font-semibold">{manualError}</p>
                    )}
                    {manualExplanation && (
                      <div className="mt-3 p-3.5 bg-[#D9F3EC]/70 rounded-xl border border-[#35B8A6]/40 text-xs text-[#102A43] space-y-1.5 animate-fade-in">
                        <p className="font-bold text-[#0F766E]">{manualExplanation.resultSummary}</p>
                        <p>{manualExplanation.plainLanguageExplanation}</p>
                      </div>
                    )}
                  </form>
                )}
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* SCREEN 3: AFTER ANALYSIS SCREEN (MINIMAL & ORGANIZED)               */}
        {/* =================================================================== */}
        {analysisComplete && finalAnalysis && (
          <div className="space-y-6 animate-fade-in-up">
            {/* Top Short Summary Card */}
            <div className="bg-white rounded-3xl border border-[#CDE8E2] p-6 sm:p-7 shadow-sm space-y-4 card-hover-lift">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#CDE8E2]/70">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F766E] block">
                      {t.reports.resultsReadyStatus}
                    </span>
                    <h2 className="text-base sm:text-lg font-extrabold text-[#102A43]">
                      {finalAnalysis.reportTitle || selectedFile?.name}
                    </h2>
                  </div>
                </div>

                {/* Reset / Import Another Option */}
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="self-start sm:self-center px-3.5 py-1.5 text-xs font-semibold text-[#0F766E] hover:bg-[#D9F3EC] rounded-xl border border-[#CDE8E2] transition flex items-center gap-1.5 cursor-pointer btn-interactive"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.reports.analyzeAnother}</span>
                </button>
              </div>

              {/* Metrics Pill Row: Tests Extracted & Flagged Count */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E8F7F5] text-[#102A43] font-bold border border-[#CDE8E2]">
                  {t.reports.testsExtractedBadge(reviewItems.length)}
                </span>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full font-bold border ${
                    abnormalCount > 0
                      ? 'bg-amber-50 text-amber-900 border-amber-300'
                      : 'bg-[#D9F3EC] text-[#0F766E] border-[#35B8A6]/40'
                  }`}
                >
                  {t.reports.flaggedBadge(abnormalCount)}
                </span>
                {extractedData?.fileName && (
                  <span className="text-[#64748B] text-xs ml-auto hidden sm:inline">
                    {extractedData.fileName} ({extractedData.fileSize})
                  </span>
                )}
              </div>

              {/* Short AI-Generated Overview (2-3 Sentences) */}
              <p className="text-xs sm:text-sm text-[#243447] leading-relaxed pt-1">
                {finalAnalysis.overallSummary}
              </p>
            </div>

            {/* Compact Test Cards Grid (Most Important Results) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  {t.reports.extractedTestsTitle} ({reviewItems.length})
                </h3>
                <span className="text-[11px] text-[#64748B]">
                  Click &ldquo;Understand This Result&rdquo; to expand
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {sortedTests.map((item, idx) => {
                  const testId = item.id || `test_${idx}`;
                  const isExpanded = expandedTestIds.has(testId);

                  return (
                    <div
                      key={testId}
                      className="bg-white rounded-2xl border border-[#CDE8E2] p-4 shadow-xs hover:border-[#35B8A6] transition card-hover-lift space-y-3 flex flex-col justify-between"
                    >
                      {/* Top Row: Test Name & Simple Status Badge */}
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-[#102A43] leading-snug">
                          {item.testName}
                        </h4>
                        <div className="shrink-0">
                          {renderStatusBadge(item.status, item.verificationStatus)}
                        </div>
                      </div>

                      {/* Middle: Measured Value & Reference Range */}
                      <div className="flex items-baseline justify-between pt-1 border-t border-[#CDE8E2]/50 text-xs">
                        <div className="flex items-baseline gap-1">
                          <span className="text-base sm:text-lg font-black text-[#102A43]">
                            {item.resultValue}
                          </span>
                          {item.unit && (
                            <span className="text-xs font-medium text-[#64748B]">
                              {item.unit}
                            </span>
                          )}
                        </div>

                        <div className="text-[11px] text-[#64748B] text-right truncate max-w-[55%]">
                          <span className="font-medium">Ref: </span>
                          <span>
                            {item.referenceRange &&
                            item.referenceRange !== 'Not specified on report'
                              ? item.referenceRange
                              : t.reports.notSpecified}
                          </span>
                        </div>
                      </div>

                      {/* Expandable Section: Understand This Result */}
                      <div className="pt-2 border-t border-[#CDE8E2]/50">
                        <button
                          type="button"
                          onClick={() => toggleTestExplanation(testId)}
                          className="w-full flex items-center justify-between text-xs font-semibold text-[#0F766E] hover:text-[#0D655F] transition cursor-pointer"
                        >
                          <span>
                            {isExpanded
                              ? t.reports.hideExplanation
                              : t.reports.understandThisResult}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="mt-2.5 p-3 bg-[#D9F3EC]/70 rounded-xl border border-[#35B8A6]/30 text-xs text-[#102A43] space-y-2 animate-fade-in">
                            <p className="leading-relaxed">
                              {item.simpleExplanation ||
                                'This test measures metabolic baselines. Variations may occur naturally due to hydration or diet.'}
                            </p>

                            {item.verificationStatus === 'needs_verification' && (
                              <p className="text-[11px] text-amber-900 bg-amber-100/70 p-2 rounded-lg border border-amber-200">
                                <strong>Note: </strong>
                                {item.verificationReason ||
                                  'Value requires comparison against your original report in "View All Results" below.'}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =============================================================== */}
            {/* EXPANDABLE SECTION 1: VIEW ALL RESULTS (FULL TABLE & EDIT)       */}
            {/* =============================================================== */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setShowAllResultsTable(!showAllResultsTable)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-[#CDE8E2] shadow-xs hover:border-[#35B8A6] transition cursor-pointer card-hover-lift"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="w-4 h-4 text-[#0F766E]" />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-xs sm:text-sm text-[#102A43] block">
                      {showAllResultsTable
                        ? t.reports.hideAllResults
                        : t.reports.viewAllResults}
                    </span>
                    <span className="text-[11px] text-[#64748B]">
                      {reviewItems.length} biomarkers • Review, compare & edit values
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-bold text-[#0F766E]">
                  <span>{showAllResultsTable ? 'Hide' : 'Expand'}</span>
                  {showAllResultsTable ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {showAllResultsTable && (
                <div className="bg-white rounded-2xl border border-[#CDE8E2] p-4 sm:p-5 shadow-sm space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-[#CDE8E2]/70 text-xs">
                    <p className="text-[#64748B] text-xs">
                      Compare figures with your original report. You can edit cells or add missing tests.
                    </p>
                    <button
                      type="button"
                      onClick={handleAddRow}
                      className="px-3 py-1 bg-[#D9F3EC] hover:bg-[#0F766E] hover:text-white text-[#0F766E] font-bold rounded-lg text-xs transition cursor-pointer flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{t.reports.addTestBtn}</span>
                    </button>
                  </div>

                  {/* Editable Review Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-[#CDE8E2] text-[#64748B] text-[10px] uppercase font-bold tracking-wider">
                          <th className="py-2.5 px-3">{t.reports.tableHeaderTestName}</th>
                          <th className="py-2.5 px-3">{t.reports.tableHeaderResult}</th>
                          <th className="py-2.5 px-3">{t.reports.tableHeaderUnit}</th>
                          <th className="py-2.5 px-3">{t.reports.tableHeaderRange}</th>
                          <th className="py-2.5 px-3">{t.reports.tableHeaderStatus}</th>
                          <th className="py-2.5 px-3 text-center">{t.reports.tableHeaderVerification}</th>
                          <th className="py-2.5 px-2 text-right"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#CDE8E2]/60">
                        {reviewItems.map((item, idx) => (
                          <tr key={item.id || idx} className="hover:bg-[#E8F7F5]/30 transition">
                            <td className="py-2 px-3">
                              <input
                                type="text"
                                value={item.testName}
                                onChange={(e) =>
                                  handleUpdateItem(idx, 'testName', e.target.value)
                                }
                                className="w-full bg-white border border-[#CDE8E2] rounded-lg px-2 py-1 text-xs text-[#102A43] font-semibold focus:outline-none focus:ring-1 focus:ring-[#0F766E]"
                              />
                            </td>
                            <td className="py-2 px-3 w-28">
                              <input
                                type="text"
                                value={item.resultValue}
                                onChange={(e) =>
                                  handleUpdateItem(idx, 'resultValue', e.target.value)
                                }
                                className="w-full bg-white border border-[#CDE8E2] rounded-lg px-2 py-1 text-xs text-[#102A43] font-bold focus:outline-none focus:ring-1 focus:ring-[#0F766E]"
                              />
                            </td>
                            <td className="py-2 px-3 w-24">
                              <input
                                type="text"
                                value={item.unit}
                                onChange={(e) =>
                                  handleUpdateItem(idx, 'unit', e.target.value)
                                }
                                className="w-full bg-white border border-[#CDE8E2] rounded-lg px-2 py-1 text-xs text-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#0F766E]"
                              />
                            </td>
                            <td className="py-2 px-3 w-36">
                              <input
                                type="text"
                                value={item.referenceRange || ''}
                                onChange={(e) =>
                                  handleUpdateItem(idx, 'referenceRange', e.target.value)
                                }
                                className="w-full bg-white border border-[#CDE8E2] rounded-lg px-2 py-1 text-xs text-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#0F766E]"
                              />
                            </td>
                            <td className="py-2 px-3">
                              {renderStatusBadge(item.status)}
                            </td>
                            <td className="py-2 px-3 text-center">
                              <button
                                type="button"
                                onClick={() => handleToggleVerification(idx)}
                                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer ${
                                  item.verificationStatus === 'verified'
                                    ? 'bg-[#D9F3EC] text-[#0F766E] border border-[#35B8A6]/40'
                                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                                }`}
                              >
                                {item.verificationStatus === 'verified'
                                  ? t.reports.statusVerified
                                  : t.reports.statusNeedsVerification}
                              </button>
                            </td>
                            <td className="py-2 px-2 text-right">
                              <button
                                type="button"
                                onClick={() => handleDeleteRow(idx)}
                                className="p-1 text-slate-400 hover:text-red-600 rounded transition cursor-pointer"
                                title={t.reports.deleteTestRow}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Update Explanations Button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={handleReanalyzeValues}
                      disabled={extractLoading}
                      className="px-4 py-2 bg-[#0F766E] hover:bg-[#0D655F] text-white font-bold text-xs rounded-xl shadow-xs transition btn-interactive cursor-pointer flex items-center gap-1.5"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${extractLoading ? 'animate-spin' : ''}`} />
                      <span>{t.reports.backToReviewBtn}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* =============================================================== */}
            {/* EXPANDABLE SECTION 2: EXTRACTION DETAILS                        */}
            {/* =============================================================== */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setShowExtractionDetails(!showExtractionDetails)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-[#CDE8E2] shadow-xs hover:border-[#35B8A6] transition cursor-pointer card-hover-lift"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shrink-0">
                    <Info className="w-4 h-4 text-[#0F766E]" />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-xs sm:text-sm text-[#102A43] block">
                      {showExtractionDetails
                        ? t.reports.hideExtractionDetails
                        : t.reports.extractionDetails}
                    </span>
                    <span className="text-[11px] text-[#64748B]">
                      Confidence: {extractedData?.extractionConfidence || 95}% •{' '}
                      {extractedData?.extractionMethod === 'pdf_text_structured'
                        ? 'Digital Text Extraction'
                        : 'OCR Tesseract Pipeline'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-bold text-[#0F766E]">
                  <span>{showExtractionDetails ? 'Hide' : 'Expand'}</span>
                  {showExtractionDetails ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {showExtractionDetails && extractedData && (
                <div className="bg-white rounded-2xl border border-[#CDE8E2] p-5 shadow-sm space-y-3 text-xs text-[#243447] animate-fade-in">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-2.5 bg-[#E8F7F5] rounded-xl border border-[#CDE8E2]">
                      <span className="text-[10px] uppercase font-bold text-[#64748B] block">Filename</span>
                      <span className="font-bold text-[#102A43] truncate block">{extractedData.fileName}</span>
                    </div>
                    <div className="p-2.5 bg-[#E8F7F5] rounded-xl border border-[#CDE8E2]">
                      <span className="text-[10px] uppercase font-bold text-[#64748B] block">File Size</span>
                      <span className="font-bold text-[#102A43] block">{extractedData.fileSize}</span>
                    </div>
                    <div className="p-2.5 bg-[#E8F7F5] rounded-xl border border-[#CDE8E2]">
                      <span className="text-[10px] uppercase font-bold text-[#64748B] block">Total Pages</span>
                      <span className="font-bold text-[#102A43] block">{extractedData.totalPages || 1}</span>
                    </div>
                    <div className="p-2.5 bg-[#E8F7F5] rounded-xl border border-[#CDE8E2]">
                      <span className="text-[10px] uppercase font-bold text-[#64748B] block">Confidence</span>
                      <span className="font-bold text-[#0F766E] block">{extractedData.extractionConfidence}%</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setShowRawText(!showRawText)}
                      className="text-xs font-bold text-[#0F766E] hover:underline"
                    >
                      {showRawText ? t.reports.hideRawText : t.reports.viewRawText}
                    </button>
                    {showRawText && (
                      <pre className="mt-2 p-3 bg-slate-900 text-slate-100 rounded-xl text-[10px] overflow-x-auto max-h-52 font-mono leading-relaxed select-all">
                        {extractedData.rawTextPreview}
                      </pre>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Questions for Doctor visit */}
            {finalAnalysis.questionsForDoctor && finalAnalysis.questionsForDoctor.length > 0 && (
              <div className="bg-[#D9F3EC]/70 p-4 sm:p-5 rounded-2xl border border-[#35B8A6]/40 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F766E] flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#35B8A6]" />
                  <span>{t.reports.questionsHeader}</span>
                </h4>
                <ul className="text-xs text-[#243447] space-y-1.5">
                  {finalAnalysis.questionsForDoctor.slice(0, 3).map((q, i) => (
                    <li key={i} className="flex items-start gap-2 italic">
                      <span className="font-bold text-[#0F766E] not-italic shrink-0">{i + 1}.</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Compact Daily Medical Tip for Report Analyzer Users */}
        <div className="mt-10 max-w-4xl mx-auto animate-fade-in-up delay-100">
          <DailyHealthTips language={language} variant="compact" />
        </div>
      </div>
    </section>
  );
}
