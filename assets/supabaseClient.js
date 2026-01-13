// assets/supabaseClient.js
const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL";
const SUPABASE_ANON_KEY = "PASTE_YOUR_ANON_PUBLIC_KEY";

const supabase = window.supabase.createClient(sb_publishable_HO9nAtZvN2wBonVzLgIJKw_d1b--G68, sb_secret_IM7lLwCjrKRpVtEgn4vO4A_VBzQliT3);
window.supabaseClient = supabase;
