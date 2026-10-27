import { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { isSupabaseConfigured } from '../supabase/client';

export interface AuthenticatedUser {
  id: string;
  email: string | null;
  role: string;
}

export interface AuthCheckResult {
  authenticated: boolean;
  user: AuthenticatedUser | null;
  error?: string;
}

/**
 * Extracts and verifies the authenticated user from cookies or Authorization Bearer header.
 */
export async function getAuthenticatedUser(req: NextRequest): Promise<AuthCheckResult> {
  // 1. If Supabase is configured, verify using Supabase server client
  if (isSupabaseConfigured()) {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

      const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
        cookies: {
          get(name: string) {
            return req.cookies.get(name)?.value;
          },
          set() {},
          remove() {}
        }
      });

      // Also check Authorization header if cookie not present
      const authHeader = req.headers.get('authorization');
      if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        const { data: jwtData, error: jwtError } = await supabase.auth.getUser(token);
        if (!jwtError && jwtData.user) {
          return {
            authenticated: true,
            user: {
              id: jwtData.user.id,
              email: jwtData.user.email ?? null,
              role: jwtData.user.role ?? 'authenticated'
            }
          };
        }
      }

      const { data: { user }, error } = await supabase.auth.getUser();
      if (!error && user) {
        return {
          authenticated: true,
          user: {
            id: user.id,
            email: user.email ?? null,
            role: user.role ?? 'authenticated'
          }
        };
      }
    } catch (err) {
      console.warn('Supabase auth extraction error:', err);
    }
  }

  // 2. Demo / Local Test mode fallback
  const testUserId = req.headers.get('x-demo-user-id');
  if (testUserId && testUserId.trim()) {
    return {
      authenticated: true,
      user: {
        id: testUserId.trim(),
        email: `${testUserId.trim()}@demo.local`,
        role: 'authenticated'
      }
    };
  }

  return {
    authenticated: false,
    user: null,
    error: 'No active session or valid credentials provided.'
  };
}

/**
 * Verifies developer authorization for restricted monitoring & diagnostic endpoints.
 * Requires x-developer-key header or devKey query param matching server DEV_ACCESS_KEY.
 */
export function isDeveloperAuthorized(req: NextRequest): boolean {
  const configuredKey = process.env.DEV_ACCESS_KEY?.trim() || 'imd-dev-hackathon-2026';

  // Check header
  const headerKey = req.headers.get('x-developer-key')?.trim();
  if (headerKey && headerKey === configuredKey) {
    return true;
  }

  // Check query param
  const url = new URL(req.url);
  const paramKey = url.searchParams.get('devKey')?.trim();
  if (paramKey && paramKey === configuredKey) {
    return true;
  }

  // Check bearer token if formatted as developer token
  const authHeader = req.headers.get('authorization')?.trim();
  if (authHeader && authHeader === `Bearer ${configuredKey}`) {
    return true;
  }

  return false;
}

