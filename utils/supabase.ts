import { createClient } from '@supabase/supabase-js';

// ✅ قراءة الرابط والمفتاح من متغيرات البيئة
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// ✅ التحقق من وجود الرابط قبل إنشاء العميل
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase URL or Anon Key. Please check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);