// Back to Top button
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth scroll for anchor nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing effect
const phrases = [
    'Full-Stack Web Apps.',
    'AI-Powered Solutions.',
    'Clean .NET Backends.',
    'Angular Frontends.',
];

let phraseIndex = 0;
let charIndex   = 0;
let isDeleting  = false;

function type() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const current = phrases[phraseIndex];

    if (isDeleting) {
        el.textContent = current.substring(0, --charIndex);
    } else {
        el.textContent = current.substring(0, ++charIndex);
    }

    let delay = isDeleting ? 50 : 90;

    if (!isDeleting && charIndex === current.length) {
        delay = 1900;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 350;
    }

    setTimeout(type, delay);
}

type();
