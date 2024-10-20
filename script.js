// script.js

const correctPassword = 'NatCora'; // Set the correct password

// Check if the user has already accessed the protected content
if (localStorage.getItem('accessGranted')) {
  // If access is granted, enable navigation
  enableNavigation();
}

// Check for the password input and submission on the home page
if (document.getElementById('submitButton')) {
  document.getElementById('submitButton').addEventListener('click', checkPassword);
  document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      checkPassword(); // Call the checkPassword function when Enter is pressed
    }
  });
}

// Toggle password visibility (if the toggle button is present)
if (document.getElementById('togglePassword')) {
  document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'See' : 'Hide';
  });
}

// Function to check the password
function checkPassword() {
  const passwordInput = document.getElementById('password').value;

  if (passwordInput === correctPassword) {
    // Store access granted in localStorage
    localStorage.setItem('accessGranted', 'true');

    // Enable navigation links
    enableNavigation();
  } else {
    alert('Incorrect password, please try again.');
  }
}

// Function to enable navigation links
function enableNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('disabled');
    link.setAttribute('aria-disabled', 'false'); // Ensure the links are accessible
  });
}

// Initially disable navigation links
disableNavigation();

function disableNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.add('disabled');
    link.setAttribute('aria-disabled', 'true'); // Disable for accessibility
  });
}
