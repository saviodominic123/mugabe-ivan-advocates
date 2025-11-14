// ==============================
// HAMBURGER MENU TOGGLE
// ==============================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // show/hide menu
    hamburger.classList.toggle('active'); // animate hamburger
});

// ==============================
// OPTIONAL: SMOOTH SCROLL
// Applies if you add internal links like #about, #services
// ==============================
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close hamburger menu after clicking on mobile
        if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});
// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
});
<script src="js/animation.js" defer></script>
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if(response.ok){
            alert("Thank you! Your message has been sent.");
            form.reset();
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    });
});
