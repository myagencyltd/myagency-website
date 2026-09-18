// My Agency Ltd — shared behaviour

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-menu__close");

  // nav background on scroll
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // mobile menu
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.add("is-open"));
    closeBtn.addEventListener("click", () => menu.classList.remove("is-open"));
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => menu.classList.remove("is-open"))
    );
  }

  // hero line-draw animation — the one orchestrated moment
  const strokes = document.querySelectorAll(".hero__art .stroke");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (strokes.length && !reduceMotion) {
    strokes.forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.getBoundingClientRect(); // force reflow
      path.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.65,.05,.2,1) ${0.15 * i}s`;
      requestAnimationFrame(() => {
        path.style.strokeDashoffset = "0";
      });
    });

    // gentle scroll-linked parallax on the hero art, tied to actual scroll position
    const art = document.querySelector(".hero__art");
    if (art) {
      const onParallax = () => {
        const y = Math.min(window.scrollY, 400);
        art.style.transform = `translateY(${y * 0.06}px)`;
      };
      window.addEventListener("scroll", onParallax, { passive: true });
    }
  }
});
