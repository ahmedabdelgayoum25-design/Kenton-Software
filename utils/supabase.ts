import { createClient } from '@supabase/supabase-js';

// ✅ ضع هنا الرابط الذي نسخته من Supabase
const supabaseUrl = 'xkaxdlygaijvglnboevr'; 

// ✅ ضع هنا المفتاح الذي نسخته من Supabase
const supabaseAnonKey = 'eu-north-1'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);