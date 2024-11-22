// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        const button = this.querySelector('button');
        
        // Show loading state
        button.disabled = true;
        button.textContent = 'Sending...';
        
        // Form will be handled automatically by Formspree
        // This is just for UX feedback
        setTimeout(() => {
            button.disabled = false;
            button.textContent = 'Send Message';
        }, 1000);
    });

// Scroll-based navigation highlight
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = link.getAttribute('href').substring(1) === currentSection 
            ? '#0984e3' 
            : '#2d3436';
    });
});