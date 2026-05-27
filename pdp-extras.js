/* REVIONrx PDP extras — reveal clinical bars on scroll */
(function () {
  const bars = document.querySelectorAll('.clinical-bar');
  if (!bars.length || !('IntersectionObserver' in window)) {
    bars.forEach(b => b.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => io.observe(b));
})();
