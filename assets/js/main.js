(() => {
  // ===== Footer year =====
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ===== Mobile nav =====
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // ===== Theme toggle (persists) =====
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light") document.documentElement.setAttribute("data-theme", "light");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      if (isLight) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    });
  }

  // ===== Slider =====
  const slider = document.querySelector("[data-slider]");
  if (slider) {
    const slides = Array.from(slider.querySelectorAll(".slide"));
    const dotsWrap = slider.querySelector("[data-dots]");
    const prevBtn = slider.querySelector("[data-prev]");
    const nextBtn = slider.querySelector("[data-next]");

    let idx = slides.findIndex(s => s.classList.contains("is-active"));
    if (idx < 0) idx = 0;

    const setActive = (newIdx) => {
      idx = (newIdx + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
      if (dotsWrap) {
        const dots = Array.from(dotsWrap.querySelectorAll(".dot"));
        dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
      }
    };

    // Create dots
    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = "dot" + (i === idx ? " is-active" : "");
        dot.type = "button";
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.addEventListener("click", () => setActive(i));
        dotsWrap.appendChild(dot);
      });
    }

    if (prevBtn) prevBtn.addEventListener("click", () => setActive(idx - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => setActive(idx + 1));

    // Auto-play (optional)
    const AUTO_MS = 6500;
    let timer = setInterval(() => setActive(idx + 1), AUTO_MS);

    // Pause on hover/focus
    slider.addEventListener("mouseenter", () => clearInterval(timer));
    slider.addEventListener("mouseleave", () => timer = setInterval(() => setActive(idx + 1), AUTO_MS));
  }
})();
