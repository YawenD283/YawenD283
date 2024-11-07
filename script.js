// Script to highlight the active section title in the sidebar
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  sidebarLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
