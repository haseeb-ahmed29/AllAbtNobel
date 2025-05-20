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
      
      // Carousel Functionality
      let currentSlide = 0;
      const slides = document.querySelectorAll('.carousel-slide');
      const dots = document.querySelectorAll('.carousel-dot');
      
      function showSlide(n) {
          slides.forEach(slide => slide.classList.remove('active'));
          dots.forEach(dot => dot.classList.remove('active'));
          
          currentSlide = (n + slides.length) % slides.length;
          slides[currentSlide].classList.add('active');
          dots[currentSlide].classList.add('active');
      }
      
      function goToSlide(n) {
          showSlide(n);
      }
      
      function nextSlide() {
          showSlide(currentSlide + 1);
      }
      
      // Auto-advance carousel every 5 seconds
      setInterval(nextSlide, 5000);
      
      // Initialize carousel
      showSlide(0);
      
      // Fun Facts Data
      const facts = [
          "The Nobel Prize medal for Physics, Chemistry, Medicine, and Literature features Alfred Nobel's profile with the inscription: 'Inventas vitam juvat excoluisse per artes' ('And they who bettered life on earth by new found mastery')",
          "Between 1901 and 2022, the Nobel Prizes were awarded 615 times to 989 people and organizations, with some receiving it more than once.",
          "The Nobel Peace Prize medal is the only one that features a different design, showing three naked men forming a fraternal bond.",
          "In 1968, Sveriges Riksbank (Sweden's central bank) established the Prize in Economic Sciences in Memory of Alfred Nobel, which is not technically a Nobel Prize.",
          "Four Nobel laureates were forced by authorities to decline the award: Adolf Hitler forbade three Germans from accepting it, and Boris Pasternak was coerced by Soviet authorities.",
          "The Nobel Prize amount for 2023 was set at 11 million Swedish kronor (about $1 million USD) per full prize."
      ];
      
      let currentFactIndex = 0;
      const factElement = document.getElementById('current-fact');
      
      // Display initial fact
      factElement.textContent = facts[currentFactIndex];
      
      // Navigation functions
      function nextFact() {
          currentFactIndex = (currentFactIndex + 1) % facts.length;
          factElement.textContent = facts[currentFactIndex];
      }
      
      function prevFact() {
          currentFactIndex = (currentFactIndex - 1 + facts.length) % facts.length;
          factElement.textContent = facts[currentFactIndex];
      }
      
      // Auto-rotate facts every 8 seconds
      setInterval(nextFact, 8000);