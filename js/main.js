// ==============================
// MAIN JS FOR MUGABE IVAN & CO.
// ==============================

// ====== HAMBURGER MENU TOGGLE ======
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Toggle hamburger animation
    hamburger.classList.toggle('active');
    
    // Slide mobile nav in/out
    navLinks.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ====== OPTIONAL: SCROLL TO TOP BUTTON ======
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.id = 'scrollBtn';
scrollBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 20px;
    display: none;
    background-color: #0b1d3a;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    z-index: 500;
`;
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide scroll button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

// ====== OPTIONAL: SMOOTH SCROLL FOR ANCHORS ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            e.preventDefault();
            const targetEl = document.querySelector(targetId);
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
