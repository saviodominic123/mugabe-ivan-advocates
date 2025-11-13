// Contact Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent form submission

        // Get values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "" || !validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (subject === "") {
            alert("Please enter a subject.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        // If all is valid, you can submit or show success
        alert("Thank you! Your message has been sent.");
        form.reset(); // clear the form
    });

    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});
