//The form and its input fields
const form = document.getElementById('Contactform');
const nameInput = document.getElementById('firstName');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage'); // Correctly access the errorMessage div

// A submit event listener to the form
form.addEventListener('submit', function(event) {
    errorMessage.textContent = ''; 

    // Validate form inputs
    if (nameInput.value.trim() === '') {
        errorMessage.textContent = 'First Name is required!';
        event.preventDefault(); 
        return;
    }

    if (emailInput.value.trim() === '') {
        errorMessage.textContent = 'Email is required!';
        event.preventDefault();
        return;
    }

    if (!isValidEmail(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email address!';
        event.preventDefault();
        return;
    }

    if (messageInput.value.trim().length < 10) {
        errorMessage.textContent = 'Message must be at least 10 characters long!';
        event.preventDefault();
        return;
    }

    // If everything is valid, show success alert
    alert('Form submitted successfully!');
});

// Email validation helper function
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(email);
}
