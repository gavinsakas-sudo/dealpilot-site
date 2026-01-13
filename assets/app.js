function money(n){
  if(!isFinite(n)) return "$0";
  return n.toLocaleString(undefined, {style:"currency", currency:"USD", maximumFractionDigits:0});
}

function clamp(n, min, max){ return Math.min(max, Math.max(min, n)); }

function computeDeal(){
  const arv = Number(document.querySelector("#arv").value || 0);
  const repairs = Number(document.querySelector("#repairs").value || 0);
  const assign = Number(document.querySelector("#assignment").value || 0);
  const offer = Number(document.querySelector("#offer").value || 0);

  const mao = (arv * 0.70) - repairs - assign;
  const profit = arv - repairs - offer - assign;

  // simple grading against MAO
  let grade = "D";
  if (offer <= mao * 0.90) grade = "A";
  else if (offer <= mao) grade = "B";
  else if (offer <= mao * 1.05) grade = "C";

  // Update UI
  document.querySelector("#maoOut").textContent = money(mao);
  document.querySelector("#profitOut").textContent = money(profit);
  document.querySelector("#gradeOut").textContent = grade;
  document.querySelector("#spreadOut").textContent = money(arv - offer);

  // quick “deal feel”
  const note = document.querySelector("#noteOut");
  if (arv <= 0) note.textContent = "Enter an ARV to score the deal.";
  else if (grade === "A") note.textContent = "Strong buy. You’re well under MAO.";
  else if (grade === "B") note.textContent = "Solid. Near MAO.";
  else if (grade === "C") note.textContent = "Thin. Try lowering offer or verifying repairs.";
  else note.textContent = "Likely overpriced versus 70% rule.";

  // safety: show negatives clearly
  const profitBox = document.querySelector("#profitBox");
  profitBox.style.borderColor = profit < 0 ? "rgba(255,90,90,.35)" : "rgba(110,231,255,.25)";
}

document.addEventListener("input", (e)=>{
  if (e.target.closest("#analyzerForm")) computeDeal();
});

document.addEventListener("DOMContentLoaded", ()=>{
  if (document.querySelector("#analyzerForm")) computeDeal();
});
