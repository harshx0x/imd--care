import { ImportedTestItem, ImportedReportAnalysisResult } from '../types';

export interface SavedReport {
  id: string;
  userId: string;
  reportTitle: string;
  fileName: string;
  fileSize?: string;
  createdAt: string;
  updatedAt: string;
  tests: ImportedTestItem[];
  analysis?: ImportedReportAnalysisResult;
}

// In-memory tenant-isolated report store: Map<reportId, SavedReport>
const reportStore = new Map<string, SavedReport>();

/**
 * Saves or updates a report owned by a specific userId.
 */
export async function saveUserReport(
  userId: string,
  data: {
    reportTitle: string;
    fileName: string;
    fileSize?: string;
    tests: ImportedTestItem[];
    analysis?: ImportedReportAnalysisResult;
  }
): Promise<SavedReport> {
  if (!userId || !userId.trim()) {
    throw new Error('Valid userId is required to save a report.');
  }

  const id = `rep_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const now = new Date().toISOString();

  const report: SavedReport = {
    id,
    userId: userId.trim(),
    reportTitle: data.reportTitle,
    fileName: data.fileName,
    fileSize: data.fileSize,
    createdAt: now,
    updatedAt: now,
    tests: data.tests,
    analysis: data.analysis
  };

  reportStore.set(id, report);
  return report;
}

/**
 * Retrieves all reports belonging to a specific user.
 * STRICT: Never returns reports belonging to other users.
 */
export async function getUserReports(userId: string): Promise<SavedReport[]> {
  if (!userId) return [];
  const cleanId = userId.trim();

  const results: SavedReport[] = [];
  for (const report of reportStore.values()) {
    if (report.userId === cleanId) {
      results.push(report);
    }
  }

  return results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

/**
 * Retrieves a specific report by ID, verifying that the requesting user owns it.
 */
export async function getUserReportById(
  reportId: string,
  userId: string
): Promise<{ report: SavedReport | null; status: number; error?: string }> {
  if (!reportId) {
    return { report: null, status: 400, error: 'Report ID is required.' };
  }

  const report = reportStore.get(reportId.trim());
  if (!report) {
    return { report: null, status: 404, error: 'Report not found.' };
  }

  // Cross-user access check
  if (report.userId !== userId.trim()) {
    return {
      report: null,
      status: 403,
      error: 'Forbidden: You do not have permission to access this report.'
    };
  }

  return { report, status: 200 };
}

/**
 * Deletes a report and its associated extracted records.
 * STRICT ACCESS CHECK: Only the report owner can delete it.
 */
export async function deleteUserReport(
  reportId: string,
  userId: string
): Promise<{ success: boolean; status: number; error?: string }> {
  if (!reportId) {
    return { success: false, status: 400, error: 'Report ID is required.' };
  }

  const cleanId = reportId.trim();
  const report = reportStore.get(cleanId);
  if (!report) {
    return { success: false, status: 404, error: 'Report not found.' };
  }

  // Cross-user access check
  if (report.userId !== userId.trim()) {
    return {
      success: false,
      status: 403,
      error: 'Forbidden: You do not have permission to delete another user\'s report.'
    };
  }

  reportStore.delete(cleanId);
  return { success: true, status: 200 };
}

/**
 * Clear all reports (for testing)
 */
export function clearReportStore(): void {
  reportStore.clear();
}

