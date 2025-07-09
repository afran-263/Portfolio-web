document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const overlayNav = document.getElementById('overlay-nav');
  const closeBtn = document.getElementById('close-btn');

  // Open menu: show nav, hide toggle
  menuToggle.addEventListener('click', () => {
    overlayNav.classList.add('active');
    menuToggle.classList.add('hidden'); // hide hamburger
  });

  // Close menu: hide nav, show toggle again
  closeBtn.addEventListener('click', () => {
    overlayNav.classList.remove('active');
    menuToggle.classList.remove('hidden'); // show hamburger again
  });

  // Close on nav link click
  document.querySelectorAll('.side-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      overlayNav.classList.remove('active');
      menuToggle.classList.remove('hidden'); // show hamburger again
    });
  });
});
