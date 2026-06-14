import { createClient } from '@supabase/supabase-js';

// Fallback to provided defaults if environment variables aren't injected
const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://sjkgopouraaztuzyvzhj.supabase.co';
const supabaseKey = (import.meta as any).env?.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_GbVjf2-cujrWeYGluBPjoA_6sxdiL5k';

export const supabase = createClient(supabaseUrl, supabaseKey);
