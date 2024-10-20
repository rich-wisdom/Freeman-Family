// script.js

const correctPassword = 'NatCora'; // Set the correct password

// Check if the user has already accessed the protected content
if (localStorage.getItem('accessGranted')) {
  showProtectedContent();
  enableNavigation();
}

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

function checkPassword() {
  const passwordInput = document.getElementById('password').value;

  if (passwordInput === correctPassword) {
    showProtectedContent();
    localStorage.setItem('accessGranted', 'true');
    enableNavigation();
  } else {
    alert('Incorrect password, please try again.');
  }
}

function showProtectedContent() {
  document.getElementById('protected-content').style.display = 'block';
  const protectionDiv = document.getElementById('protection');
  if (protectionDiv) {
    protectionDiv.remove();
  }
  document.title = 'Freeman Family';
}

function enableNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('disabled');
    link.setAttribute('aria-disabled', 'false');
  });
}

// Initially disable navigation
disableNavigation();

function disableNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.add('disabled');
    link.setAttribute('aria-disabled', 'true');
  });
}
