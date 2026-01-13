// assets/nav.js
(function () {
  function initNav() {
    const nav = document.getElementById("siteNav");
    const btn = document.getElementById("menuBtn");
    if (!nav || !btn) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("nav-open");
    });

    // Close when clicking a link
    nav.querySelectorAll(".nav-links a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("nav-open");
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target)) {
        nav.classList.remove("nav-open");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNav);
  } else {
    initNav();
  }
})();
