/* Link to Enquiry Form JS File */

<link rel="stylesheet" href="css_assets/styles.css"></link>

/* Enquiry Form Section JS */

console.log("Enquiry Form Assetes JavaScript Loaded");
const enquiryFormSection = document.querySelector('.enquiry-form-section');
const enquiryFormHeading = enquiryFormSection.querySelector('h2');
const enquiryForm = enquiryFormSection.querySelector('form');
enquiryFormHeading.textContent = "Enquire Now!";
enquiryForm.innerHTML = `
    <label for="full-name">Full Name:</label>
    <input type="text" id="full-name" name="full-name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="enquiry-type">Enquiry Type:</label> 
    <select id="enquiry-type" name="enquiry-type" required>
        <option value="general">General</option>
        <option value="support">Support</option>
        <option value="sales">Sales</option>
    </select>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Submit Enquiry</button>
`;
/* Form Submission Handling */

enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your enquiry has been submitted! We will get back to you soon.');
    enquiryForm.reset();
});

/* Client-side Validation */
enquiryForm.addEventListener('input', () => {
    const fullName = enquiryForm.querySelector('#full-name').value.trim();
    const email = enquiryForm.querySelector('#email').value.trim();
    const message = enquiryForm.querySelector('#message').value.trim();
    const submitButton = enquiryForm.querySelector('button[type="submit"]');
    if (fullName && email && message) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }   
});

/* Error Handling */
enquiryForm.addEventListener('submit', (e) => {
    const email = enquiryForm.querySelector('#email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

/* End of JS */