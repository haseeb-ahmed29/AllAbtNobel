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

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Video Controls (revised with error handling)
function initializeVideoControls() {
    document.querySelectorAll('.imgWrap').forEach(wrap => {
        const video = wrap.querySelector('video');
        if (!video) return;

        // Create control elements dynamically
        const controls = document.createElement('div');
        controls.className = 'video-controls';
        
        const muteBtn = document.createElement('button');
        muteBtn.className = 'mute-btn';
        muteBtn.innerHTML = `
            <i class="fas fa-volume-mute"></i>
            <i class="fas fa-volume-up" style="display: none;"></i>
        `;
        
        controls.appendChild(muteBtn);
        wrap.appendChild(controls);

        // Initialize muted state
        video.muted = true;
        
        // Event listeners
        muteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            try {
                video.muted = !video.muted;
                const icons = this.querySelectorAll('i');
                icons.forEach(icon => icon.style.display = 
                    icon.classList.contains('fa-volume-mute') ? 
                    (video.muted ? 'inline-block' : 'none') : 
                    (video.muted ? 'none' : 'inline-block')
                );
            } catch (error) {
                console.error('Mute toggle failed:', error);
            }
        });

        video.addEventListener('dblclick', () => {
            try {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) { /* Safari */
                    video.webkitRequestFullscreen();
                }
            } catch (error) {
                console.error('Fullscreen failed:', error);
            }
        });
    });
}

// Initialize other components after DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize video controls first
    initializeVideoControls();

// Trivia Sliders initialization section:
document.querySelectorAll('.trivia-slider').forEach(slider => {
    const slides = slider.querySelectorAll('.trivia-slide');
    let currentIndex = 0;
    let autoPlayInterval;
    
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }

    // Auto-play setup
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }
    
    // Manual controls
    slider.querySelector('.trivia-next').addEventListener('click', () => {
        clearInterval(autoPlayInterval);
        nextSlide();
        startAutoPlay();
    });

    slider.querySelector('.trivia-prev').addEventListener('click', () => {
        clearInterval(autoPlayInterval);
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
        startAutoPlay();
    });

    // Start auto-play
    startAutoPlay();
});


    // Scroll Animations
    const scrollElements = document.querySelectorAll('[data-scroll]');
    const scrollThreshold = window.innerHeight * 0.8;

    function checkScroll() {
        scrollElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < scrollThreshold) {
                el.classList.add('visible');
            }
        });
    }

    let isScrolling;
    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(checkScroll, 100);
    });
    checkScroll();

    // Gallery Slider
    document.querySelectorAll(".gallery-slider__slide").forEach(slide => {
        slide.addEventListener("click", () => {
            document.querySelectorAll(".gallery-slider__slide").forEach(s => {
                s.classList.remove("active");
            });
            slide.classList.add("active");
        });
    });
});
