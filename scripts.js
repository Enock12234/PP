// script.js - Takunda Portfolio Interaction Script
// ----------------------------------------

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Contact form fake submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple feedback (alert or custom popup)
    alert('Thank you for contacting me! 🚀 I will get back to you soon.');

    // Reset form
    this.reset();
});

// Animate sections when in view
const sections = document.querySelectorAll('section');

const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.2,
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Optional: Hero section simple text animation
const heroText = document.querySelector('.hero-text');

window.addEventListener('load', () => {
    heroText.classList.add('loaded');
});
