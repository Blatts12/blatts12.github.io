const sliders = document.querySelectorAll(".slide-in");

const slideInOnScroll = new IntersectionObserver(
  (entries, slideInOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      slideInOnScroll.unobserve(entry.target);
    });
  },
  { rootMargin: "0px 0px -50px 0px" }
);

sliders.forEach((slider) => {
  slideInOnScroll.observe(slider);
});
