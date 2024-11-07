document.addEventListener("DOMContentLoaded", () => {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  sidebarLinks.forEach((link) => {
    link.classList.remove('active');

    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
