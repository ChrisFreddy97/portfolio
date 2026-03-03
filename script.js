// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in animation
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    faders.forEach(fader => {
        const rect = fader.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            fader.classList.add('show');
        }
    });
});
