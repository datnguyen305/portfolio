(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const elements = document.querySelectorAll('.detail-hero > div, .detail-content, .detail-stack, .feature-section > h2, .feature-row');
  elements.forEach(element => element.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {threshold: .1, rootMargin: '0px 0px -35px 0px'});
  elements.forEach(element => observer.observe(element));
})();
