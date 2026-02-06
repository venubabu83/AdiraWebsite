// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.navbar');
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Carousel functionality (if carousel exists on page)
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        let currentSlideIndex = 0;
        const slides = carousel.querySelectorAll('.carousel-slide');
        const indicators = carousel.querySelectorAll('.carousel-indicator');
        
        if (slides.length > 1) {
            // Auto-play carousel
            setInterval(() => {
                slides[currentSlideIndex].classList.remove('active');
                if (indicators[currentSlideIndex]) {
                    indicators[currentSlideIndex].classList.remove('active');
                }
                
                currentSlideIndex = (currentSlideIndex + 1) % slides.length;
                
                slides[currentSlideIndex].classList.add('active');
                if (indicators[currentSlideIndex]) {
                    indicators[currentSlideIndex].classList.add('active');
                }
            }, 5000);
        }
    });
});

// Global carousel functions for inline onclick handlers
window.changeSlide = function(direction) {
    const carousel = event.target.closest('.carousel-container');
    if (!carousel) return;
    
    let currentSlideIndex = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentSlideIndex = index;
        }
    });
    
    slides[currentSlideIndex].classList.remove('active');
    if (indicators[currentSlideIndex]) {
        indicators[currentSlideIndex].classList.remove('active');
    }
    
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
    
    slides[currentSlideIndex].classList.add('active');
    if (indicators[currentSlideIndex]) {
        indicators[currentSlideIndex].classList.add('active');
    }
};

window.currentSlide = function(index) {
    const carousel = event.target.closest('.carousel-container');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    const slideIndex = index - 1;
    if (slides[slideIndex]) {
        slides[slideIndex].classList.add('active');
    }
    if (indicators[slideIndex]) {
        indicators[slideIndex].classList.add('active');
    }
};
