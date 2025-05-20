// Mobile menu functionality
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

    // Field cards animation
    const fields = document.querySelectorAll('.field');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fields.forEach(field => observer.observe(field));

    // Detail section functionality
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const detailSections = document.querySelectorAll('.detail-section');
    const closeButtons = document.querySelectorAll('.close-button');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('data-target');
            detailSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const section = document.getElementById(targetId);
            section.classList.remove('active');
        });
    });

    // PDF Download functionality
    window.downloadPDF = function(sectionId) {
        const element = document.getElementById(sectionId);
        const opt = {
            margin: 0.5,
            filename: `${sectionId}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    }

    // Close mobile menu on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            const dropdownMenu = document.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        }
    });
});