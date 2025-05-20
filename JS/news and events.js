// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');
    
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
    });
    
    overlay.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      this.classList.remove('active');
    });
    
     // Close menu when clicking on a nav link (except dropdown parent)
const navLinks = document.querySelectorAll('nav ul li:not(.dropdown) > a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });
});

// Dropdown functionality for mobile
const dropdownToggle = document.querySelector('.dropdown > a');
if (dropdownToggle) {
  dropdownToggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) { // Only for mobile
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    }
  });
}
});

      document.querySelectorAll('header a[href^="#"], main a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
              const targetId = this.getAttribute('href');
              if (targetId === '#') return;
              
              const targetElement = document.querySelector(targetId);
              if (targetElement) {
                  window.scrollTo({
                      top: targetElement.offsetTop - 100,
                      behavior: 'smooth'
                  });
              }
          });
      });

      // Card hover effects
      if (window.innerWidth > 768) {
          const cards = document.querySelectorAll('.item-card');
          
          cards.forEach(card => {
              card.addEventListener('mousemove', (e) => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const angleX = (y - centerY) / 20;
                  const angleY = (centerX - x) / 20;
                  
                  card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px) scale(1.02)`;
              });
              
              card.addEventListener('mouseleave', () => {
                  card.style.transform = '';
              });
          });
      }