/* Welcome Section JS */
const welcomeMessage = document.getElementById('welcome-message');
const currentHour = new Date().getHours();
let message = '';

if (currentHour < 12) { 
    message = 'Good Morning! Welcome to our website.';
} else if (currentHour < 18) {
    message = 'Good Afternoon! Welcome to our website.';
} else {
    message = 'Good Evening! Welcome to our website.';
}
welcomeMessage.textContent = message;

/* Featured Products Section JS */
const products = [
    { name: 'Product 1', description: 'This is product 1', price: '$10' },
    { name: 'Product 2', description: 'This is product 2', price: '$20' },
    { name: 'Product 3', description: 'This is product 3', price: '$30' },
];
const productsContainer = document.getElementById('products-container');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span>${product.price}</span>
    `;
    productsContainer.appendChild(productDiv);
});

/* Newsletter Signup Section JS */
const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email-input');
const signupMessage = document.getElementById('signup-message');
newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = emailInput.value;
    if (validateEmail(email)) {
        signupMessage.textContent = 'Thank you for signing up!';
        emailInput.value = '';
    } else {
        signupMessage.textContent = 'Please enter a valid email address.';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}   
/* End of home.js */

//References:
// (w3shools, n.d) Validating Email Addresses in JavaScript
// Available at: https://www.w3schools.com/js/js_validation.asp (Accessed: 31 October 2025).