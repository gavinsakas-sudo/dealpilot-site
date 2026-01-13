// assets/gate.js
async function requireAuth() {
  const supabase = window.supabaseClient;
  const { data } = await supabase.auth.getSession();
  const session = data.session;

  if (!session) {
    const next = encodeURIComponent(window.location.pathname.split("/").pop());
    window.location.href = `login.html?next=${next}`;
    return null;
  }
  return session;
}

async function requirePremium() {
  const supabase = window.supabaseClient;
  const session = await requireAuth();
  if (!session) return;

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_premium")
    .eq("user_id", session.user.id)
    .single();

  if (!profile?.is_premium) {
    window.location.href = "pricing.html#checkout";
  }
}

window.DealPilotGate = { requireAuth, requirePremium };
