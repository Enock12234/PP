// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert('⚠️ Please fill out all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('📛 Please enter a valid email address.');
    return;
  }

  alert('✅ Message sent successfully (mock)');
  this.reset();
});

// Simple email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Animate on scroll using intersection observer
const animateOnScroll = () => {
  const animatedElems = document.querySelectorAll('.animate__animated');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__fadeInUp');
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, { threshold: 0.2 });

  animatedElems.forEach(el => {
    observer.observe(el);
  });
};

// Init animations on DOM load
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
});

