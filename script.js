// script.js

const correctPassword = 'NateCora'; // Set the correct password

// Function to check if the user has already logged in
function checkLoginStatus() {
  if (localStorage.getItem('accessGranted')) {
    enableNavigation(); // Enable navigation if access is granted
    showProtectedContent(); // Show protected content if on index.html
  } else {
    disableNavigation(); // Disable navigation if access is not granted
  }
}

// Run checkLoginStatus on page load
document.addEventListener('DOMContentLoaded', checkLoginStatus);

// Listen for changes in the color scheme
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    document.body.classList.add('dark-mode'); // Add class for dark mode
  } else {
    document.body.classList.remove('dark-mode'); // Remove class for light mode
  }
});

// Initial check for dark mode
if (darkModeMediaQuery.matches) {
  document.body.classList.add('dark-mode');
}

// Add event listeners to the main page only
if (document.getElementById('submitButton')) {
  document.getElementById('submitButton').addEventListener('click', checkPassword);
  document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      checkPassword();
    }
  });

  // Toggle password visibility
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
    showProtectedContent();
    localStorage.setItem('accessGranted', 'true'); // Remember access
    enableNavigation(); // Enable navigation links
  } else {
    alert('Incorrect password, please try again.');
  }
}

// Function to show protected content
function showProtectedContent() {
  const protectedContent = document.getElementById('protected-content');
  if (protectedContent) {
    protectedContent.style.display = 'block';
  }
  const protectionDiv = document.getElementById('protection');
  if (protectionDiv) {
    protectionDiv.remove(); // Remove password protection elements
  }
  document.title = 'Freeman Family';
}

// Function to enable navigation links
function enableNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('disabled');
    link.setAttribute('aria-disabled', 'false');
  });
}

// Function to disable navigation links
function disableNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.add('disabled');
    link.setAttribute('aria-disabled', 'true');
  });
}
