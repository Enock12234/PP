// --------------------------------------------------
//          Takunda Maluwa Portfolio Script
//        Loader - Smooth Scroll - Animations
// --------------------------------------------------

// Loader fade-out
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1500); // Loader stays for 1.5 seconds
});

// Navbar shrink on scroll
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

// Fake contact form submit
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  
  alert('✅ Thank you for contacting me, Takunda will reach back soon!');
  
  contactForm.reset();
});

// Section reveal on scroll
const sections = document.querySelectorAll('section');

const observerOptions = {
  threshold: 0.2
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Animate social links hover (optional minor touch)
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transform = 'scale(1.2)';
    link.style.transition = 'transform 0.3s';
  });
  link.addEventListener('mouseout', () => {
    link.style.transform = 'scale(1)';
  });
});
