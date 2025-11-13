// Scroll animations for sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // animate once
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-section'); // initial hidden state
        observer.observe(section);
    });
});
