/*Link to Contact Form JS File*/

<link rel="stylesheet" href="css_assets/styles.css"></link>

/* Contact Form Section JS */

console.log("Contact Form Assetes JavaScript Loaded");
const contactFormSection = document.querySelector('.contact-form-section');
const contactFormHeading = contactFormSection.querySelector('h2');
const contactForm = contactFormSection.querySelector('form');
contactFormHeading.textContent = "Get in Touch!";
contactForm.innerHTML = `
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>   
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Send Message</button>
`;  
/* Form Submission Handling */

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    alert('Thank you for reaching out! We will get back to you soon.');
    contactForm.reset();
});

/* Client-side Validation */
contactForm.addEventListener('input', () => {
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (name && email && message) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

/* Error Handling */
contactForm.addEventListener('submit', (e) => {
    const email = contactForm.querySelector('#email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

/* End of JS */