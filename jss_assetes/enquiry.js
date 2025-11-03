/* Linked to enquiry.js in enquiry.html */
<link rel="stylesheet" href="css_assets/styles.css"></link>

/* Enquiry Form Script */
console.log("Enquiry Assetes JavaScript Loaded");
const enquirySection = document.querySelector('.enquiry-section');
const enquiryHeading = enquirySection.querySelector('h2');
const enquiryForm = enquirySection.querySelector('form');
enquiryHeading.textContent = "Enquire Now!";
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

/* End of JS */