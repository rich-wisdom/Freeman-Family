// script.js

const correctPassword = 'NatCora'; // Set the correct password

// Check if the user has already accessed the protected content
if (localStorage.getItem('accessGranted')) {
  enableNavigation(); // Enable navigation if access is granted
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
  document.getElementById('protected-content').style.display = 'block';
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

// Disable navigation if access has not been granted on the main page
if (!localStorage.getItem('accessGranted') && document.getElementById('navLink')) {
  disableNavigation();
}

// Function to disable navigation links
function disableNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.add('disabled');
    link.setAttribute('aria-disabled', 'true');
  });
}
