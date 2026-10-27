/**
 * IMD Care — Backend Architecture Core Modules
 *
 * Provides a unified, well-structured interface for:
 * 1. Authentication & Authorization
 * 2. Security (Rate Limiting, Input Validation, Privacy)
 * 3. AI Services & MedGemma Integration
 * 4. Medical Report Management & Data Retention
 * 5. Monitoring & Health Telemetry
 * 6. Grounded Medical RAG
 */

// Authentication & Authorization
export * from './auth/auth-service';

// Security & Privacy
export * from './security/rate-limiter';
export * from './security/input-validator';
export * from './security/privacy';

// AI Services & MedGemma
export * from './ai/medgemma';
export * from './ai/ai-service';

// Report Management & Safe Retention
export * from './reports/temp-cleaner';
export * from './reports/report-store';

// Monitoring & Telemetry
export * from './monitoring/metrics-tracker';
export * from './monitoring/health-service';

