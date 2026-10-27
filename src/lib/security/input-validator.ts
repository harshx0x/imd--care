import { Language } from '../types';

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

export type ValidatedFileType = 'pdf' | 'png' | 'jpeg';

export interface FileValidationResult {
  valid: boolean;
  fileType?: ValidatedFileType;
  error?: string;
}

/**
 * Checks magic byte file signatures to verify actual file format
 * rather than relying on spoofable file extensions or client headers.
 */
export function validateFileMagicBytes(buffer: Buffer): FileValidationResult {
  if (!buffer || buffer.length === 0) {
    return { valid: false, error: 'File is empty.' };
  }

  if (buffer.length > MAX_FILE_SIZE_BYTES) {
    const sizeMb = (buffer.length / (1024 * 1024)).toFixed(2);
    return {
      valid: false,
      error: `File size exceeds the 10 MB limit (${sizeMb} MB).`
    };
  }

  // PDF signature: %PDF (hex 25 50 44 46)
  if (
    buffer.length >= 4 &&
    buffer[0] === 0x25 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x44 &&
    buffer[3] === 0x46
  ) {
    return { valid: true, fileType: 'pdf' };
  }

  // PNG signature: 89 50 4E 47 0D 0A 1A 0A
  if (
    buffer.length >= 8 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  ) {
    return { valid: true, fileType: 'png' };
  }

  // JPEG / JPG signature: FF D8 FF
  if (
    buffer.length >= 3 &&
    buffer[0] === 0xff &&
    buffer[1] === 0xd8 &&
    buffer[2] === 0xff
  ) {
    return { valid: true, fileType: 'jpeg' };
  }

  return {
    valid: false,
    error: 'Invalid file format. File signature does not match a valid PDF, JPEG, or PNG document.'
  };
}

/**
 * Validates and sanitizes text input, removing dangerous control characters
 * and enforcing length limits.
 */
export function sanitizeTextInput(
  input: unknown,
  maxLength: number = 2000,
  fieldName: string = 'Input'
): { valid: boolean; value: string; error?: string } {
  if (typeof input !== 'string') {
    return { valid: false, value: '', error: `${fieldName} must be a text string.` };
  }

  // Strip null bytes and non-printable control characters (except common whitespace)
  const cleaned = input
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim();

  if (cleaned.length === 0) {
    return { valid: false, value: '', error: `${fieldName} cannot be empty.` };
  }

  if (cleaned.length > maxLength) {
    return {
      valid: false,
      value: cleaned.slice(0, maxLength),
      error: `${fieldName} exceeds maximum permitted length of ${maxLength} characters.`
    };
  }

  return { valid: true, value: cleaned };
}

/**
 * Validates language code against supported set
 */
export function validateLanguage(lang: unknown): Language {
  if (lang === 'hi' || lang === 'mr' || lang === 'en') {
    return lang;
  }
  return 'en';
}

