// Mobile menu toggle
document.querySelectorAll("[data-menu-toggle]").forEach((btn) => {
  const menu = document.getElementById(btn.getAttribute("aria-controls"));
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("hidden", open);
  });
});

// Hero fade slideshow
document.querySelectorAll("[data-slider]").forEach((slider) => {
  const slides = [...slider.querySelectorAll("[data-slide]")];
  const dots = [...slider.querySelectorAll("[data-slide-dot]")];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0;
  let timer;

  const show = (i) => {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, n) => {
      s.classList.toggle("opacity-100", n === current);
      s.classList.toggle("opacity-0", n !== current);
      s.setAttribute("aria-hidden", String(n !== current));
    });
    dots.forEach((d, n) => {
      d.classList.toggle("bg-blush", n === current);
      d.classList.toggle("border-blush", n === current);
    });
  };
  const start = () => {
    if (!reduced) timer = setInterval(() => show(current + 1), 6000);
  };

  dots.forEach((d, n) => d.addEventListener("click", () => {
    clearInterval(timer);
    show(n);
    start();
  }));
  start();
});

// Testimonials: scroll-snap track with prev/next
document.querySelectorAll("[data-testimonials]").forEach((box) => {
  const track = box.querySelector("[data-track]");
  const step = (dir) => {
    const max = track.scrollWidth - track.clientWidth;
    let left = track.scrollLeft + dir * track.clientWidth;
    if (left > max + 1) left = 0;
    if (left < -1) left = max;
    track.scrollTo({ left });
  };
  box.querySelector("[data-prev]").addEventListener("click", () => step(-1));
  box.querySelector("[data-next]").addEventListener("click", () => step(1));
});
