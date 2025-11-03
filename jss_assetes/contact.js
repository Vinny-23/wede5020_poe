/* Link to Contact JS File */
<link rel="stylesheet" href="css_assets/styles.css"></link>

/* Contact Section JS */
console.log("Contact Assetes JavaScript Loaded");
const contactSection = document.querySelector('.contact-section');
const contactHeading = contactSection.querySelector('h2');
const contactForm = contactSection.querySelector('form');
contactHeading.textContent = "Get in Touch!";
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
}
);

/* End of JS */
