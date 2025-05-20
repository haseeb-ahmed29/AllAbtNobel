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

      // Contact Form Validation
      const contactForm = document.getElementById('contactForm');
      const successMessage = document.querySelector('.success-message');
      
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          let isValid = true;
          
          // Reset all errors
          document.querySelectorAll('.form-group').forEach(group => {
              group.classList.remove('error');
          });
          
          // Validate name
          const nameInput = document.getElementById('name');
          if (!nameInput.value.trim()) {
              nameInput.parentElement.classList.add('error');
              isValid = false;
          }
          
          // Validate email
          const emailInput = document.getElementById('email');
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailInput.value.trim())) {
              emailInput.parentElement.classList.add('error');
              isValid = false;
          }
          
          // Validate subject
          const subjectInput = document.getElementById('subject');
          if (!subjectInput.value) {
              subjectInput.parentElement.classList.add('error');
              isValid = false;
          }
          
          // Validate message
          const messageInput = document.getElementById('message');
          if (!messageInput.value.trim()) {
              messageInput.parentElement.classList.add('error');
              isValid = false;
          }
          
          if (isValid) {
              // Here you would normally send the form data to a server
              // For demonstration, we'll just show the success message
              contactForm.reset();
              successMessage.style.display = 'block';
              
              // Scroll to success message
              successMessage.scrollIntoView({ behavior: 'smooth' });
              
              // Hide success message after 5 seconds
              setTimeout(() => {
                  successMessage.style.display = 'none';
              }, 5000);
          } else {
              // Scroll to first error
              const firstError = document.querySelector('.error');
              if (firstError) {
                  firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
          }
      });
      
      // Real-time validation for inputs
      document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select').forEach(input => {
          input.addEventListener('input', function() {
              if (this.value.trim()) {
                  this.parentElement.classList.remove('error');
              }
          });
      });