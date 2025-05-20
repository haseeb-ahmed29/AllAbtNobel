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
      // Timeline animation
      const timelineItems = document.querySelectorAll('.timeline-item');
      
      function animateTimeline() {
          const windowHeight = window.innerHeight;
          
          timelineItems.forEach(item => {
              const itemPosition = item.getBoundingClientRect().top;
              
              if (itemPosition < windowHeight - 100) {
                  item.style.opacity = '1';
                  item.style.transform = 'translateY(0)';
              }
          });
      }
      
      // Initialize timeline items
      timelineItems.forEach(item => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          item.style.transition = 'all 0.5s ease';
      });
      
      // Check on load and scroll
      animateTimeline();
      window.addEventListener('scroll', animateTimeline);
      
      // Smooth scrolling for navigation
      document.querySelectorAll('.sidebar a').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
              
              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);
              
              window.scrollTo({
                  top: targetElement.offsetTop - 120,
                  behavior: 'smooth'
              });
          });
      });