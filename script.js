// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const mobile = formData.get('mobile');
        const message = formData.get('message');

        // Create mailto link
        const subject = encodeURIComponent(`Enquiry from ${name} - VELAVAIN Exports`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Mobile: ${mobile}\n\n` +
            `Message:\n${message}`
        );

        window.location.href = `mailto:velavaexports@gmail.com?subject=${subject}&body=${body}`;

        // Show success message
        alert('Thank you for your enquiry! Your email client will open to send the message.');

        // Reset form
        contactForm.reset();
    });
}

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add fade-in animation to product cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card, .product-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

console.log('VELAVAIN Exports - Website Loaded Successfully');
