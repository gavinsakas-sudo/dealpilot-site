// assets/supabaseClient.js

const SUPABASE_URL = "https://pkrtksnqrocoqrknfypa.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrcnRrc25xcm9jb3Fya25meXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzMzM4OTYsImV4cCI6MjA4MzkwOTg5Nn0.t8_u58yFVWoSFEAscjhRqLsB19Z_gU4w5KtoSq-KUaw";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

window.supabaseClient = supabase;
