document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      // Auto close nav on mobile
      document.getElementById('nav-menu').classList.remove('active');
      document.getElementById('menu-toggle').classList.remove('active');
    });
  });

  // Responsive nav toggle with icon change
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
  });
});
