// ----------------------------------------------
// Takunda Maluwa - Portfolio JS
// Smooth Scroll | Section Animation | Form Alert
// ----------------------------------------------

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Section reveal on scroll using IntersectionObserver
const observerOptions = {
  threshold: 0.2
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, observerOptions);

// Apply observer to all main sections
document.querySelectorAll('section').forEach(section => {
  sectionObserver.observe(section);
});

// Contact form submit - fake alert
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('✅ Message sent! Takunda will get back to you shortly.');
    contactForm.reset();
  });
}
<script>
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1500);
  });
</script>

