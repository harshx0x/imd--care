'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  FileSpreadsheet,
  CheckCircle,
  HelpCircle,
  RefreshCw,
  Sparkles,
  Info,
  ShieldCheck,
  FileText,
  Upload,
  FileUp,
  FileCheck,
  Trash2,
  AlertTriangle,
  Lock,
  ArrowRight,
  Edit3,
  Plus,
  ChevronDown,
  ChevronUp,
  Eye
} from 'lucide-react';
import { SYNTHETIC_LAB_REPORTS } from '@/lib/synthetic-data';
import { determineTestStatus } from '@/lib/report-parser';
import {
  ReportExplanationRequest,
  ReportExplanationResult,
  LabReportSample,
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
  // Mode selection: 'import' (default) | 'manual'
  const [activeTab, setActiveTab] = useState<'import' | 'manual'>('import');

  // Import flow stages: 'upload' -> 'review' (verification table) -> 'analysis' (layman guidance)
  const [importStage, setImportStage] = useState<'upload' | 'review' | 'analysis'>('upload');

  // Manual Form States
  const [selectedSample, setSelectedSample] = useState<LabReportSample | null>(SYNTHETIC_LAB_REPORTS[0]);
  const [testName, setTestName] = useState(SYNTHETIC_LAB_REPORTS[0].testName);
  const [resultValue, setResultValue] = useState(SYNTHETIC_LAB_REPORTS[0].resultValue);
  const [unit, setUnit] = useState(SYNTHETIC_LAB_REPORTS[0].unit);
  const [referenceRange, setReferenceRange] = useState(SYNTHETIC_LAB_REPORTS[0].referenceRange);
  const [clinicalContext, setClinicalContext] = useState('');
  const [manualLoading, setManualLoading] = useState(false);
  const [explanation, setExplanation] = useState<ReportExplanationResult | null>(null);
  const [manualError, setManualError] = useState<string | null>(null);

  // Import Lab Report States
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [extractLoading, setExtractLoading] = useState(false);
  const [explainLoading, setExplainLoading] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);

  // Review & Verification Data
  const [extractedData, setExtractedData] = useState<ExtractedReportData | null>(null);
  const [reviewItems, setReviewItems] = useState<ImportedTestItem[]>([]);
  const [showRawText, setShowRawText] = useState(false);

  // Final Verified Explanation
  const [finalAnalysis, setFinalAnalysis] = useState<ImportedReportAnalysisResult | null>(null);

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
    setImportStage('upload');
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
    setExtractedData(null);
    setReviewItems([]);
    setFinalAnalysis(null);
    setImportError(null);
    setImportStage('upload');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleImportAnother = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // STEP 1: Extract Document & Transition to Review Step
  const handleExtractDocument = async () => {
    if (!selectedFile || extractLoading) return;

    setExtractLoading(true);
    setImportError(null);

    try {
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
      setReviewItems(data.tests || []);
      setImportStage('review');
    } catch (err: unknown) {
      console.error('Report extraction error:', err);
      setImportError(err instanceof Error ? err.message : t.reports.errorMessage);
    } finally {
      setExtractLoading(false);
    }
  };

  // STEP 2: Update Review Table Fields
  const handleUpdateItem = (
    index: number,
    field: keyof ImportedTestItem,
    value: string
  ) => {
    setReviewItems((prev) => {
      const updated = [...prev];
      const item = { ...updated[index], [field]: value };

      // Recalculate status and numeric values dynamically when result or range changes
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

  // Toggle Verification Status
  const handleToggleVerification = (index: number) => {
    setReviewItems((prev) => {
      const updated = [...prev];
      const current = updated[index];
      const nextStatus = current.verificationStatus === 'verified' ? 'needs_verification' : 'verified';
      updated[index] = {
        ...current,
        verificationStatus: nextStatus,
        verificationReason: nextStatus === 'verified' ? undefined : current.verificationReason
      };
      return updated;
    });
  };

  // Remove a row from review table
  const handleDeleteRow = (index: number) => {
    setReviewItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Add a new row to review table
  const handleAddRow = () => {
    const newItem: ImportedTestItem = {
      id: `rec_new_${Date.now()}`,
      testName: 'New Lab Biomarker',
      resultValue: '0.0',
      unit: '',
      referenceRange: 'Not specified on report',
      status: 'inconclusive',
      verificationStatus: 'needs_verification',
      verificationReason: 'User-added biomarker; please specify result and range',
      simpleExplanation: ''
    };
    setReviewItems((prev) => [...prev, newItem]);
  };

  // STEP 3: Confirm Verified Results & Generate Layman Explanation
  const handleConfirmAndExplain = async () => {
    if (reviewItems.length === 0 || explainLoading) return;

    setExplainLoading(true);
    setImportError(null);

    try {
      const payload = {
        confirmedTests: reviewItems,
        fileName: selectedFile?.name || 'Uploaded Report',
        language
      };

      const res = await fetch('/api/reports/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(errData?.error || t.reports.errorMessage);
      }

      const data: ImportedReportAnalysisResult = await res.json();
      setFinalAnalysis(data);
      setImportStage('analysis');
    } catch (err: unknown) {
      console.error('Report explanation error:', err);
      setImportError(err instanceof Error ? err.message : t.reports.errorMessage);
    } finally {
      setExplainLoading(false);
    }
  };

  // Manual Flow Handlers
  const handleSelectSample = (sample: LabReportSample) => {
    setSelectedSample(sample);
    setTestName(sample.testName);
    setResultValue(sample.resultValue);
    setUnit(sample.unit);
    setReferenceRange(sample.referenceRange);
    setClinicalContext(`Synthetic example: ${sample.description}`);
    setExplanation(null);
  };

  const handleLoadIntoManual = (item: ImportedTestItem) => {
    setTestName(item.testName);
    setResultValue(item.resultValue);
    setUnit(item.unit || '');
    setReferenceRange(
      item.referenceRange && item.referenceRange !== 'Not specified on report' && item.referenceRange !== t.reports.notSpecified
        ? item.referenceRange
        : ''
    );
    setClinicalContext(`Imported from ${selectedFile?.name || 'report'}`);
    setExplanation(null);
    setActiveTab('manual');
  };

  const handleManualExplain = async (e: React.FormEvent) => {
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
        throw new Error(`Report simplification failed with status: ${res.status}`);
      }

      const data: ReportExplanationResult = await res.json();
      setExplanation(data);
    } catch (err: unknown) {
      console.error('Report simplification error:', err);
      setManualError(t.reports.errorMessage);
    } finally {
      setManualLoading(false);
    }
  };

  const getStatusBadge = (status: 'below' | 'normal' | 'above' | 'inconclusive') => {
    switch (status) {
      case 'below':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300 inline-flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            {t.reports.statusBadges.below}
          </span>
        );
      case 'above':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300 inline-flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            {t.reports.statusBadges.above}
          </span>
        );
      case 'normal':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 inline-flex items-center gap-1 shrink-0">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            {t.reports.statusBadges.normal}
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300 inline-flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
            {t.reports.statusBadges.inconclusive}
          </span>
        );
    }
  };

  return (
    <section id="reports" className="py-8 sm:py-12 bg-[#E8F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#D9F3EC] text-[#0F766E] text-xs font-bold uppercase tracking-wider border border-[#35B8A6]/30">
            <FileSpreadsheet className="w-3.5 h-3.5 text-[#35B8A6]" />
            <span>{t.reports.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
            {t.reports.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t.reports.description}
          </p>
        </div>

        {/* Feature Navigation Tabs: Import Lab Report vs Manual Entry */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <div className="bg-white p-1.5 rounded-2xl border border-[#CDE8E2] shadow-sm flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('import')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'import'
                  ? 'bg-[#0F766E] text-white shadow-sm'
                  : 'text-[#243447] hover:bg-[#D9F3EC]/50 hover:text-[#0F766E]'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>{t.reports.tabImport}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  activeTab === 'import' ? 'bg-[#D9F3EC] text-[#0F766E]' : 'bg-[#E8F7F5] text-[#0F766E]'
                }`}
              >
                Verified OCR
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('manual')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'manual'
                  ? 'bg-[#0F766E] text-white shadow-sm'
                  : 'text-[#243447] hover:bg-[#D9F3EC]/50 hover:text-[#0F766E]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{t.reports.tabManual}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: IMPORT LAB REPORT */}
        {activeTab === 'import' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top Info Banner */}
            <div className="bg-white border border-[#CDE8E2] rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shrink-0">
                  <FileUp className="w-5 h-5 text-[#0F766E]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#102A43]">{t.reports.importTitle}</h3>
                  <p className="text-xs text-[#64748B]">{t.reports.importSubtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#0F766E] bg-[#D9F3EC] px-3 py-1 rounded-full border border-[#35B8A6]/30 self-stretch sm:self-auto justify-center">
                <Lock className="w-3 h-3 text-[#35B8A6]" />
                <span>{t.reports.privacyPledge}</span>
              </div>
            </div>

            {/* Hidden native file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
              onChange={handleFileInputChange}
              className="hidden"
            />

            {/* STAGE 1: UPLOAD DROPZONE */}
            {importStage === 'upload' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Dropzone & Selected File Details */}
                <div className="lg:col-span-6 space-y-4">
                  {!selectedFile ? (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`bg-white rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition flex flex-col items-center justify-center min-h-[340px] shadow-sm group ${
                        isDragging
                          ? 'border-[#0F766E] bg-[#D9F3EC]/40 scale-[1.01]'
                          : 'border-[#CDE8E2] hover:border-[#35B8A6] hover:bg-[#E8F7F5]/40'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center mb-4 shadow-inner group-hover:scale-105 transition transform">
                        <Upload className="w-8 h-8 text-[#0F766E]" />
                      </div>

                      <h4 className="text-base font-bold text-[#102A43] max-w-xs leading-snug">
                        {t.reports.dropzoneTitle}
                      </h4>

                      <p className="text-xs text-[#64748B] mt-2 mb-5 max-w-xs">
                        {t.reports.dropzoneSubtitle}
                      </p>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                        className="px-5 py-2.5 bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-2 cursor-pointer"
                      >
                        <Upload className="w-4 h-4" />
                        <span>{t.reports.browseFiles}</span>
                      </button>

                      <div className="mt-6 pt-5 border-t border-[#CDE8E2]/60 text-[11px] text-[#64748B] space-y-1">
                        <p className="font-medium">{t.reports.supportedFormats}</p>
                      </div>
                    </div>
                  ) : (
                    /* Selected File Preview Card */
                    <div className="bg-white rounded-2xl border border-[#CDE8E2] p-6 shadow-sm space-y-5">
                      <div className="flex items-center justify-between pb-3 border-b border-[#CDE8E2]/60">
                        <div className="flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-[#0F766E]" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
                            {t.reports.selectedFileTitle}
                          </h4>
                        </div>
                        <span className="text-[11px] font-mono font-semibold text-[#0F766E] bg-[#D9F3EC] px-2 py-0.5 rounded-full border border-[#35B8A6]/30">
                          {formatFileSize(selectedFile.size)}
                        </span>
                      </div>

                      {/* Visual File Preview */}
                      <div className="rounded-xl border border-[#CDE8E2] bg-[#E8F7F5]/40 p-4 flex flex-col items-center justify-center overflow-hidden">
                        {filePreviewUrl ? (
                          <div className="w-full flex flex-col items-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={filePreviewUrl}
                              alt="Lab report preview"
                              className="max-h-56 max-w-full rounded-lg object-contain shadow-xs border border-[#CDE8E2]"
                            />
                            <span className="text-[11px] text-[#64748B] mt-2 font-medium">
                              {t.reports.sourcePreview}
                            </span>
                          </div>
                        ) : (
                          <div className="py-6 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-20 rounded-lg bg-red-50 border-2 border-red-200 text-red-600 flex flex-col items-center justify-center shadow-xs">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded-sm">
                                PDF
                              </span>
                              <FileText className="w-7 h-7 mt-2 text-red-500" />
                            </div>
                            <span className="text-xs font-bold text-[#102A43] mt-3 break-all max-w-[260px]">
                              {selectedFile.name}
                            </span>
                            <span className="text-[11px] text-[#64748B] mt-0.5">
                              PDF Document ({formatFileSize(selectedFile.size)})
                            </span>
                          </div>
                        )}
                      </div>

                      {/* File Meta & Action Buttons */}
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="px-3.5 py-2 text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>{t.reports.removeFile}</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleImportAnother}
                          className="px-3.5 py-2 text-xs font-bold text-[#0F766E] bg-[#D9F3EC] hover:bg-[#CDE8E2] border border-[#35B8A6]/40 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>{t.reports.importAnother}</span>
                        </button>
                      </div>

                      {/* Extract Report Button */}
                      <button
                        type="button"
                        onClick={handleExtractDocument}
                        disabled={extractLoading}
                        className="w-full py-3.5 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:bg-slate-300 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
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

                  {/* Error Banner */}
                  {importError && (
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-start gap-2 shadow-xs">
                      <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">{importError}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Guidance Info */}
                <div className="lg:col-span-6">
                  <div className="bg-white rounded-2xl border border-[#CDE8E2] p-8 text-center space-y-4 shadow-sm flex flex-col items-center justify-center min-h-[340px]">
                    <div className="w-16 h-16 rounded-2xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shadow-inner">
                      <FileSpreadsheet className="w-8 h-8 text-[#0F766E]" />
                    </div>
                    <div className="max-w-md">
                      <h4 className="text-base font-bold text-[#102A43]">
                        {selectedFile ? 'Ready to Extract & Verify' : t.reports.awaitingTitle}
                      </h4>
                      <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                        {selectedFile
                          ? 'Click the "Analyze Report" button on the left. Our two-step pipeline extracts diagnostic tables, lets you verify values against the original report, and generates medically grounded explanations.'
                          : 'Upload a PDF, JPG, or PNG copy of your lab test report. Our engine extracts test rows, units, reference intervals, and flags while preserving exact decimal places.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 2: REVIEW & VERIFICATION TABLE */}
            {importStage === 'review' && extractedData && (
              <div className="space-y-6">
                {extractedData.isUnreadable ? (
                  /* Unreadable Document Alert */
                  <div className="bg-white rounded-2xl border border-amber-300 p-7 shadow-sm space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                        <AlertTriangle className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#102A43]">
                          {t.reports.unreadableTitle}
                        </h4>
                        <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                          {extractedData.unreadableReason || t.reports.unreadableTryAgain}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-[#E8F7F5] rounded-xl border border-[#CDE8E2] text-xs text-[#243447] space-y-1">
                      <p className="font-bold text-[#0F766E]">Tips for high OCR accuracy:</p>
                      <ul className="list-disc list-inside text-[11px] text-[#64748B] space-y-1">
                        <li>Ensure the paper is flat with uniform overhead lighting (avoid shadows).</li>
                        <li>Avoid blurriness or extreme rotation.</li>
                        <li>Original digital PDFs exported directly from the diagnostic portal yield the highest accuracy.</li>
                      </ul>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleImportAnother}
                        className="px-5 py-2.5 bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-2 cursor-pointer"
                      >
                        <Upload className="w-4 h-4" />
                        <span>{t.reports.importAnother}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setImportStage('upload')}
                        className="px-4 py-2.5 bg-[#D9F3EC] hover:bg-[#CDE8E2] text-[#0F766E] text-xs font-bold rounded-xl transition cursor-pointer"
                      >
                        Back
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Interactive Review & Verification Step */
                  <div className="bg-white rounded-2xl border border-[#CDE8E2] p-6 sm:p-7 shadow-sm space-y-6">
                    {/* Review Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-[#CDE8E2]/60 gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold text-[#0F766E] bg-[#D9F3EC] px-2.5 py-0.5 rounded-full border border-[#35B8A6]/30">
                            Verification Step
                          </span>
                          <span className="text-[10px] font-mono font-semibold text-[#64748B]">
                            {selectedFile?.name}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#102A43] mt-1">
                          {t.reports.reviewTitle}
                        </h3>
                        <p className="text-xs text-[#64748B] mt-0.5 max-w-2xl">
                          {t.reports.reviewSubtitle}
                        </p>
                      </div>

                      <div className="flex items-center flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#D9F3EC] text-[#0F766E] border border-[#35B8A6]/30">
                          {t.reports.testsCountLabel(reviewItems.length)}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8F7F5] text-[#102A43] border border-[#CDE8E2]">
                          {t.reports.confidenceLabel}: {extractedData.extractionConfidence}%
                        </span>
                      </div>
                    </div>

                    {/* Source Preview & Raw Text Toggle */}
                    <div className="bg-[#E8F7F5]/40 rounded-xl border border-[#CDE8E2] p-4 space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-bold text-[#102A43] flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-[#0F766E]" />
                          <span>{t.reports.sourcePreview}</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setShowRawText(!showRawText)}
                          className="text-xs font-bold text-[#0F766E] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>{showRawText ? t.reports.hideRawText : t.reports.viewRawText}</span>
                          {showRawText ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {showRawText && extractedData.rawTextPreview && (
                        <div className="p-3 bg-white rounded-lg border border-[#CDE8E2] text-[11px] font-mono text-[#243447] max-h-48 overflow-y-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                          {extractedData.rawTextPreview}
                        </div>
                      )}
                    </div>

                    {/* Editable Table */}
                    <div className="overflow-x-auto border border-[#CDE8E2] rounded-xl shadow-2xs">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead className="bg-[#D9F3EC]/70 text-[#102A43] font-bold uppercase tracking-wider text-[10px] border-b border-[#CDE8E2]">
                          <tr>
                            <th className="py-3 px-3.5 min-w-[200px]">{t.reports.tableHeaderTestName}</th>
                            <th className="py-3 px-3 min-w-[120px]">{t.reports.tableHeaderResult}</th>
                            <th className="py-3 px-3 min-w-[90px]">{t.reports.tableHeaderUnit}</th>
                            <th className="py-3 px-3.5 min-w-[170px]">{t.reports.tableHeaderRange}</th>
                            <th className="py-3 px-3 min-w-[130px]">{t.reports.tableHeaderStatus}</th>
                            <th className="py-3 px-3 min-w-[140px]">{t.reports.tableHeaderVerification}</th>
                            <th className="py-3 px-2 text-center w-12"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#CDE8E2]/60 bg-white">
                          {reviewItems.map((item, idx) => {
                            const isNeedsVer = item.verificationStatus === 'needs_verification';
                            return (
                              <tr
                                key={item.id || idx}
                                className={`transition-colors hover:bg-[#E8F7F5]/30 ${
                                  isNeedsVer ? 'bg-amber-50/40' : ''
                                }`}
                              >
                                {/* Test Name */}
                                <td className="py-2.5 px-3">
                                  <input
                                    type="text"
                                    value={item.testName}
                                    onChange={(e) => handleUpdateItem(idx, 'testName', e.target.value)}
                                    className="w-full bg-transparent border-b border-transparent hover:border-[#35B8A6] focus:border-[#0F766E] focus:outline-none font-bold text-[#102A43] py-0.5 text-xs"
                                  />
                                </td>

                                {/* Result Value */}
                                <td className="py-2.5 px-3">
                                  <input
                                    type="text"
                                    value={item.resultValue}
                                    onChange={(e) => handleUpdateItem(idx, 'resultValue', e.target.value)}
                                    className="w-full bg-[#E8F7F5]/40 border border-[#CDE8E2] rounded-md px-2 py-1 font-mono font-bold text-[#0F766E] text-xs focus:ring-1 focus:ring-[#0F766E] focus:outline-none"
                                  />
                                </td>

                                {/* Unit */}
                                <td className="py-2.5 px-3">
                                  <input
                                    type="text"
                                    value={item.unit}
                                    onChange={(e) => handleUpdateItem(idx, 'unit', e.target.value)}
                                    placeholder="e.g. mg/dL"
                                    className="w-full bg-transparent border-b border-transparent hover:border-[#35B8A6] focus:border-[#0F766E] focus:outline-none text-[#243447] py-0.5 text-xs font-medium"
                                  />
                                </td>

                                {/* Reference Range */}
                                <td className="py-2.5 px-3">
                                  <input
                                    type="text"
                                    value={item.referenceRange || ''}
                                    onChange={(e) => handleUpdateItem(idx, 'referenceRange', e.target.value)}
                                    placeholder={t.reports.notSpecified}
                                    className="w-full bg-transparent border-b border-transparent hover:border-[#35B8A6] focus:border-[#0F766E] focus:outline-none text-[#243447] py-0.5 text-xs font-mono"
                                  />
                                </td>

                                {/* Status Badge */}
                                <td className="py-2.5 px-3">{getStatusBadge(item.status)}</td>

                                {/* Verification Status Badge */}
                                <td className="py-2.5 px-3">
                                  <button
                                    type="button"
                                    onClick={() => handleToggleVerification(idx)}
                                    title="Click to toggle verification status"
                                    className="text-left cursor-pointer group"
                                  >
                                    {isNeedsVer ? (
                                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 inline-flex items-center gap-1 group-hover:bg-amber-200 transition">
                                        <AlertTriangle className="w-3 h-3 text-amber-600" />
                                        <span>{t.reports.statusNeedsVerification}</span>
                                      </span>
                                    ) : (
                                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 inline-flex items-center gap-1 group-hover:bg-emerald-200 transition">
                                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                                        <span>{t.reports.statusVerified}</span>
                                      </span>
                                    )}
                                  </button>
                                  {isNeedsVer && item.verificationReason && (
                                    <p className="text-[10px] text-amber-700 mt-1 leading-tight font-medium">
                                      {item.verificationReason}
                                    </p>
                                  )}
                                </td>

                                {/* Delete Action */}
                                <td className="py-2.5 px-2 text-center">
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteRow(idx)}
                                    title={t.reports.deleteTestRow}
                                    className="text-slate-400 hover:text-red-600 p-1 rounded transition cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Add Test Button & Action Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <button
                        type="button"
                        onClick={handleAddRow}
                        className="px-4 py-2 text-xs font-bold text-[#0F766E] bg-[#D9F3EC] hover:bg-[#CDE8E2] border border-[#35B8A6]/40 rounded-xl transition flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{t.reports.addTestBtn}</span>
                      </button>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => setImportStage('upload')}
                          className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#243447] text-xs font-bold rounded-xl transition cursor-pointer"
                        >
                          Back to Upload
                        </button>

                        <button
                          type="button"
                          onClick={handleConfirmAndExplain}
                          disabled={reviewItems.length === 0 || explainLoading}
                          className="flex-1 sm:flex-none px-6 py-2.5 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:bg-slate-300 text-white font-bold text-xs rounded-xl shadow-md transition transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {explainLoading ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              <span>Generating Explanations...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                              <span>{t.reports.confirmAndExplainBtn}</span>
                            </>
                          )}
                        </button>
                      </div>

                      {explainLoading && (
                        <div className="w-full mt-3 space-y-2 animate-fade-in">
                          <div className="w-full bg-[#E8F7F5] rounded-full h-2.5 overflow-hidden border border-[#CDE8E2]">
                            <div className="progress-shimmer h-full w-full rounded-full" />
                          </div>
                          <p className="text-xs text-center text-[#0F766E] font-semibold animate-pulse">
                            {language === 'hi'
                              ? 'बायोमार्कर्स का सरलीकरण और विश्लेषण जारी है...'
                              : language === 'mr'
                              ? 'बायोमार्कर्सचे विश्लेषण आणि सोप्या भाषेतील रूपांतर सुरू आहे...'
                              : 'Simplifying laboratory biomarkers into plain-language explanations...'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STAGE 3: FINAL VERIFIED EXPLANATION & GUIDANCE */}
            {importStage === 'analysis' && finalAnalysis && (
              <div className="bg-white rounded-2xl border border-[#CDE8E2] p-6 sm:p-7 shadow-sm space-y-6 animate-in fade-in duration-200">
                {/* Result Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#CDE8E2]/60 gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#0F766E] bg-[#D9F3EC] px-2.5 py-0.5 rounded-full border border-[#35B8A6]/30">
                      {t.reports.reportSummaryBadge}
                    </span>
                    <h3 className="text-lg font-bold text-[#102A43] mt-1.5">
                      {finalAnalysis.reportTitle || selectedFile?.name}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      {selectedFile?.name} • Verified Lab Profile
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setImportStage('review')}
                      className="px-3.5 py-1.5 text-xs font-bold text-[#0F766E] bg-[#D9F3EC] hover:bg-[#CDE8E2] border border-[#35B8A6]/40 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>{t.reports.backToReviewBtn}</span>
                    </button>
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#D9F3EC] text-[#0F766E] border border-[#35B8A6]/30">
                      {t.reports.testsCountLabel(finalAnalysis.tests.length)}
                    </span>
                  </div>
                </div>

                {/* Overall Summary */}
                {finalAnalysis.overallSummary && (
                  <div className="bg-[#E8F7F5]/50 p-4 rounded-xl border border-[#CDE8E2] text-xs sm:text-sm text-[#243447] leading-relaxed">
                    <p>{finalAnalysis.overallSummary}</p>
                  </div>
                )}

                {/* Reassurance Callout Box */}
                <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                    <Info className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>{t.reports.reassuranceTitle}</span>
                  </div>
                  <p className="text-xs text-amber-900/90 leading-relaxed">
                    {finalAnalysis.abnormalReassurance}
                  </p>
                </div>

                {/* Extracted Biomarkers Cards */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center justify-between">
                    <span>{t.reports.extractedTestsTitle}</span>
                    <span className="text-[11px] font-normal text-[#64748B]">
                      Showing {finalAnalysis.tests.length} Verified Biomarkers
                    </span>
                  </h4>

                  <div className="space-y-3">
                    {finalAnalysis.tests.map((item, idx) => (
                      <div
                        key={item.id || idx}
                        className="p-4 rounded-xl border border-[#CDE8E2] bg-white hover:border-[#35B8A6]/60 transition space-y-2.5 shadow-2xs"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h5 className="text-sm font-bold text-[#102A43]">
                              {item.testName}
                            </h5>
                            <div className="flex items-center flex-wrap gap-2 text-xs text-[#243447] mt-0.5">
                              <span>
                                {t.reports.measuredResultLabel}{' '}
                                <strong className="text-[#0F766E] font-mono">
                                  {item.resultValue} {item.unit}
                                </strong>
                              </span>
                              <span className="text-[#64748B]">•</span>
                              <span className="text-[#64748B]">
                                {t.reports.referenceRangeLabel}{' '}
                                <span className="font-mono text-[#243447]">
                                  {item.referenceRange || t.reports.notSpecified}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 self-start sm:self-center">
                            {getStatusBadge(item.status)}
                          </div>
                        </div>

                        <p className="text-xs text-[#243447] leading-relaxed bg-[#E8F7F5]/30 p-2.5 rounded-lg border border-[#CDE8E2]/60">
                          {item.simpleExplanation}
                        </p>

                        <div className="pt-1 flex items-center justify-end">
                          <button
                            type="button"
                            onClick={() => handleLoadIntoManual(item)}
                            className="text-[11px] font-bold text-[#0F766E] hover:text-[#0D655F] hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <span>Inspect in manual calculator</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Factors to Consider */}
                {finalAnalysis.factorsToConsider && finalAnalysis.factorsToConsider.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
                      {t.reports.factorsHeader}
                    </h4>
                    <ul className="text-xs text-[#243447] space-y-1.5 pl-1">
                      {finalAnalysis.factorsToConsider.map((factor, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Questions for Doctor */}
                {finalAnalysis.questionsForDoctor && finalAnalysis.questionsForDoctor.length > 0 && (
                  <div className="space-y-2 bg-[#D9F3EC]/70 p-4 rounded-xl border border-[#CDE8E2]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F766E] flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-[#35B8A6]" />
                      <span>{t.reports.questionsHeader}</span>
                    </h4>
                    <ul className="text-xs text-[#243447] space-y-2">
                      {finalAnalysis.questionsForDoctor.map((q, i) => (
                        <li key={i} className="flex items-start gap-2 italic">
                          <span className="font-bold text-[#0F766E] not-italic shrink-0">{i + 1}.</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Educational Disclaimer */}
                <div className="p-3 bg-white rounded-xl border border-[#CDE8E2] text-[11px] text-[#64748B] flex items-start gap-2 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <p>
                    <strong>{t.reports.disclaimerPrefix}</strong>{' '}
                    {finalAnalysis.disclaimer || t.reports.disclaimerSuffix}{' '}
                    {t.reports.disclaimerSuffix}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: MANUAL ENTRY FORM */}
        {activeTab === 'manual' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Synthetic Sample Selection Strip */}
            <div className="bg-white border border-[#CDE8E2] rounded-2xl p-4 sm:p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#243447] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#35B8A6]" />
                  {t.reports.sampleStripLabel}
                </span>
                <span className="text-[11px] font-semibold text-[#0F766E] bg-[#D9F3EC] px-2.5 py-0.5 rounded-full border border-[#35B8A6]/30">
                  {t.reports.sampleStripBadge}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {SYNTHETIC_LAB_REPORTS.map((sample) => {
                  const isSelected = selectedSample?.id === sample.id;
                  return (
                    <button
                      key={sample.id}
                      type="button"
                      onClick={() => handleSelectSample(sample)}
                      className={`p-3 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-[#0F766E] text-white border-[#0F766E] shadow-sm'
                          : 'bg-[#E8F7F5]/50 hover:bg-[#D9F3EC] text-[#243447] border-[#CDE8E2]'
                      }`}
                    >
                      <span
                        className={`text-[10px] uppercase font-bold block ${
                          isSelected ? 'text-[#D9F3EC]' : 'text-[#64748B]'
                        }`}
                      >
                        {sample.category.split('/')[0]}
                      </span>
                      <span className="text-xs font-bold mt-1 line-clamp-1">
                        {sample.testName.split('(')[0]}
                      </span>
                      <span
                        className={`text-[11px] mt-2 font-mono font-semibold ${
                          isSelected ? 'text-white' : 'text-[#0F766E]'
                        }`}
                      >
                        {sample.resultValue} {sample.unit}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form & Output Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Column */}
              <div className="lg:col-span-5 bg-white rounded-2xl border border-[#CDE8E2] p-6 sm:p-7 shadow-sm">
                <h3 className="text-base font-bold text-[#102A43] mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#0F766E]" />
                  <span>{t.reports.formTitle}</span>
                </h3>

                <form onSubmit={handleManualExplain} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#243447] mb-1 uppercase tracking-wider">
                      {t.reports.testNameLabel}
                    </label>
                    <input
                      type="text"
                      value={testName}
                      onChange={(e) => setTestName(e.target.value)}
                      placeholder={t.reports.testNamePlaceholder}
                      required
                      className="w-full bg-[#E8F7F5]/30 border border-[#CDE8E2] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#243447] mb-1 uppercase tracking-wider">
                        {t.reports.resultValueLabel}
                      </label>
                      <input
                        type="text"
                        value={resultValue}
                        onChange={(e) => setResultValue(e.target.value)}
                        placeholder={t.reports.resultValuePlaceholder}
                        required
                        className="w-full bg-[#E8F7F5]/30 border border-[#CDE8E2] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#243447] mb-1 uppercase tracking-wider">
                        {t.reports.unitLabel}
                      </label>
                      <input
                        type="text"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        placeholder={t.reports.unitPlaceholder}
                        required
                        className="w-full bg-[#E8F7F5]/30 border border-[#CDE8E2] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#243447] mb-1 uppercase tracking-wider">
                      {t.reports.rangeLabel}
                    </label>
                    <input
                      type="text"
                      value={referenceRange}
                      onChange={(e) => setReferenceRange(e.target.value)}
                      placeholder={t.reports.rangePlaceholder}
                      className="w-full bg-[#E8F7F5]/30 border border-[#CDE8E2] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#243447] mb-1 uppercase tracking-wider">
                      {t.reports.contextLabel}
                    </label>
                    <input
                      type="text"
                      value={clinicalContext}
                      onChange={(e) => setClinicalContext(e.target.value)}
                      placeholder={t.reports.contextPlaceholder}
                      className="w-full bg-[#E8F7F5]/30 border border-[#CDE8E2] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={manualLoading || !testName.trim() || !resultValue.trim()}
                    className="w-full py-3.5 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:bg-slate-300 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {manualLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>{t.reports.loadingCta}</span>
                      </>
                    ) : (
                      <>
                        <FileSpreadsheet className="w-4 h-4" />
                        <span>{t.reports.submitCta}</span>
                      </>
                    )}
                  </button>

                  {manualError && (
                    <p className="text-xs text-red-700 bg-[#FEE2E2] p-2.5 rounded-lg border border-red-200">
                      {manualError}
                    </p>
                  )}
                </form>
              </div>

              {/* Explanation Output Column */}
              <div className="lg:col-span-7">
                {!explanation ? (
                  <div className="bg-white rounded-2xl border border-[#CDE8E2] p-8 text-center space-y-4 shadow-sm flex flex-col items-center justify-center min-h-[380px]">
                    <div className="w-16 h-16 rounded-2xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shadow-inner">
                      <FileSpreadsheet className="w-8 h-8" />
                    </div>
                    <div className="max-w-md">
                      <h4 className="text-base font-bold text-[#102A43]">
                        {t.reports.awaitingTitle}
                      </h4>
                      <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                        {t.reports.awaitingDesc}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-[#CDE8E2] p-6 sm:p-7 shadow-sm space-y-5 animate-in fade-in duration-200">
                    {/* Result Header & Status */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#CDE8E2]/60 gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#64748B]">
                          {t.reports.reportSummaryBadge}
                        </span>
                        <h3 className="text-lg font-bold text-[#102A43]">
                          {explanation.testName}
                        </h3>
                        <p className="text-xs text-[#243447] mt-0.5 font-medium">
                          {t.reports.enteredLabel} <strong>{resultValue} {unit}</strong> (
                          {t.reports.rangeLabelText} {referenceRange || t.reports.defaultRangeFallback})
                        </p>
                      </div>
                      <div>{getStatusBadge(explanation.status)}</div>
                    </div>

                    {/* Plain-Language Explanation */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-[#0F766E]" />
                        {t.reports.plainLanguageHeader}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#243447] leading-relaxed bg-[#E8F7F5]/50 p-4 rounded-xl border border-[#CDE8E2]">
                        {explanation.plainLanguageExplanation}
                      </p>
                    </div>

                    {/* Factors to Consider */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
                        {t.reports.factorsHeader}
                      </h4>
                      <ul className="text-xs text-[#243447] space-y-1.5 pl-1">
                        {explanation.factorsToConsider.map((factor, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                            <span>{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Questions for Doctor */}
                    <div className="space-y-2 bg-[#D9F3EC]/70 p-4 rounded-xl border border-[#CDE8E2]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F766E] flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 text-[#35B8A6]" />
                        {t.reports.questionsHeader}
                      </h4>
                      <ul className="text-xs text-[#243447] space-y-2">
                        {explanation.questionsForDoctor.map((q, i) => (
                          <li key={i} className="flex items-start gap-2 italic">
                            <span className="font-bold text-[#0F766E] not-italic shrink-0">{i + 1}.</span>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Educational Disclaimer */}
                    <div className="p-3 bg-white rounded-xl border border-[#CDE8E2] text-[11px] text-[#64748B] flex items-start gap-2 shadow-2xs">
                      <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <p>
                        <strong>{t.reports.disclaimerPrefix}</strong> {explanation.disclaimer}{' '}
                        {t.reports.disclaimerSuffix}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Compact Daily Medical Tip for Report Simplifier Users */}
        <div className="mt-12 max-w-4xl mx-auto animate-fade-in-up delay-100">
          <DailyHealthTips language={language} variant="compact" />
        </div>
      </div>
    </section>
  );
}
