// Smooth scroll + active state for sidebar nav
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item[data-target]');
  const sections = document.querySelectorAll('.project-card[id]');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navItems.forEach(i => i.classList.remove('active'));
          const match = document.querySelector(`.nav-item[data-target="${entry.target.id}"]`);
          if (match) match.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  // Filter pills (visual only for now — all projects shown)
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });
});
