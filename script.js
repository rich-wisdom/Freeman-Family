// script.js

const correctPassword = 'NateCora'; // Set the correct password

// Check if the user has already accessed the protected content
if (localStorage.getItem('accessGranted')) {
  // If access is granted, show protected content
  showProtectedContent();
}

document.getElementById('submitButton').addEventListener('click', checkPassword);
document.getElementById('password').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkPassword(); // Call the checkPassword function when Enter is pressed
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
    // Grant access to protected content
    showProtectedContent();
    
    // Store access granted in localStorage
    localStorage.setItem('accessGranted', 'true');
  } else {
    alert('Incorrect password, please try again.');
  }
}

function showProtectedContent() {
  // Display the protected content
  document.getElementById('protected-content').style.display = 'block';

  // Remove the password protection section
  const protectionDiv = document.getElementById('protection');
  if (protectionDiv) {
    protectionDiv.remove(); // Correctly removes the protection section
  }

  // Change the page title to "Freeman Family"
  document.title = 'Freeman Family';
}
