import { createBrowserClient } from '@supabase/ssr';
import { SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Checks whether valid Supabase credentials have been configured in environment variables.
 * Validates that values are not empty, default placeholders, or undefined.
 */
export function isSupabaseConfigured(): boolean {
  if (!supabaseUrl || !supabaseAnonKey) {
    return false;
  }
  const url = supabaseUrl.trim();
  const key = supabaseAnonKey.trim();

  if (url === '' || key === '') {
    return false;
  }
  if (url.includes('your-project-id') || key.includes('your-anon-key')) {
    return false;
  }
  // Basic URL structure check
  return url.startsWith('https://') || url.startsWith('http://');
}

let browserClient: SupabaseClient | null = null;

/**
 * Returns a singleton browser Supabase client if configured, or null if setup is required.
 */
export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!browserClient) {
    browserClient = createBrowserClient(supabaseUrl!, supabaseAnonKey!);
  }

  return browserClient;
}
