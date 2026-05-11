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

// Contact form → mailto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name    = document.getElementById('fname')?.value.trim()   || '';
        const company = document.getElementById('company')?.value.trim() || '';
        const problem = document.getElementById('problem')?.value.trim() || '';
        const note    = document.getElementById('formNote');

        if (!name || !problem) {
            if (note) { note.textContent = 'Please fill in Name and the problem description.'; note.className = 'form-note error'; note.hidden = false; }
            return;
        }

        const subject = encodeURIComponent(`Inquiry from ${name}${company ? ` — ${company}` : ''}`);
        const body    = encodeURIComponent(`Name: ${name}\nCompany: ${company || 'N/A'}\n\nWhat problem are you solving:\n${problem}`);

        window.location.href = `mailto:bardh.dev18@gmail.com?subject=${subject}&body=${body}`;

        if (note) { note.textContent = 'Opening your email client…'; note.className = 'form-note'; note.hidden = false; }
    });
}

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

    el.textContent = isDeleting
        ? current.substring(0, --charIndex)
        : current.substring(0, ++charIndex);

    let delay = isDeleting ? 50 : 90;

    if (!isDeleting && charIndex === current.length) {
        delay = 1900; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 350;
    }

    setTimeout(type, delay);
}

type();
