// script.js

// Smooth scroll to sections when clicking sidebar links
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
