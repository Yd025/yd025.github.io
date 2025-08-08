document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.toggle-btn');
  const dropdown = document.querySelector('.experience-dropdown');

  if (toggleBtn && dropdown) {
    toggleBtn.addEventListener('click', () => {
      dropdown.classList.toggle('open');
      toggleBtn.textContent = dropdown.classList.contains('open') ? 'View Less' : 'View More';
    });
  }
});