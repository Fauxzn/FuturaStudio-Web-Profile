export function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.remove("opacity-0", "translate-y-10");
        el.classList.add("opacity-100", "translate-y-0");
      } else {
        el.classList.remove("opacity-100", "translate-y-0");
        el.classList.add("opacity-0", "translate-y-10");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("[data-animate-on-scroll]").forEach((el) => {
    observer.observe(el);
  });
}
