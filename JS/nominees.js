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

      // Function to show description when category is clicked
      function showDescription(category) {
          // Hide all descriptions first
          document.querySelectorAll('.category-description').forEach(desc => {
              desc.style.display = 'none';
          });
          
          // Show the selected description
          const selectedDesc = document.getElementById(`${category}-description`);
          if (selectedDesc) {
              selectedDesc.style.display = 'block';
              selectedDesc.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      }

      // Show physics description by default
      window.onload = function() {
          showDescription('physics');
      };