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

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
      
      // FAQ Accordion functionality
      const faqQuestions = document.querySelectorAll('.faq-question');
      
      faqQuestions.forEach(question => {
          question.addEventListener('click', () => {
              const answer = question.nextElementSibling;
              const isActive = question.classList.contains('active');
              
              // Close all other answers
              faqQuestions.forEach(q => {
                  if (q !== question) {
                      q.classList.remove('active');
                      q.nextElementSibling.style.maxHeight = null;
                  }
              });
              
              // Toggle current answer
              question.classList.toggle('active');
              
              if (!isActive) {
                  answer.style.maxHeight = answer.scrollHeight + 'px';
              } else {
                  answer.style.maxHeight = null;
              }
          });
      });