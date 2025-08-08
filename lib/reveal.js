// options let the section trigger when ~10% is visible
const observerOptions = {
    threshold: 0.1
  };
  
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // if you only want it once, you can unobserve:
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // watch every element with class="reveal"
  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });