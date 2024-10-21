document.addEventListener('DOMContentLoaded', function () {
    const acceptedPasswords = [
        "Nat and Cora",
        "nat and cora",
        "Nat & Cora",
        "nat & cora",
        "NatCora",
        "natcora",
        "Nat Cora",
        "nat cora"
    ];

    const form = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const navLinks = document.querySelectorAll('.nav-link');
    const passwordSection = document.getElementById('protection');
    const contentSection = document.getElementById('protected-content');
    const showPasswordButton = document.getElementById('togglePassword');

    // Check localStorage for saved login
    if (localStorage.getItem('accessGranted') === 'true') {
        enableNavigation();
        showProtectedContent();
    }

    document.getElementById('submitButton').addEventListener('click', function (e) {
        checkPassword();
    });

    // Function to check the password
    function checkPassword() {
        const enteredPassword = passwordInput.value;

        if (acceptedPasswords.includes(enteredPassword)) {
            localStorage.setItem('accessGranted', 'true'); // Save login status
            enableNavigation(); // Enable the navigation bar
            showProtectedContent(); // Show the content
        } else {
            alert('Incorrect password, please try again.');
        }
    }

    function enableNavigation() {
        // Change the page title
        document.title = 'Freeman Family';

        // Enable all the nav links
        navLinks.forEach(function (link) {
            link.classList.remove('disabled');
            link.setAttribute('aria-disabled', 'false');
        });

        // Hide the password form
        passwordSection.style.display = 'none';
        contentSection.style.display = 'block';
    }

    function showProtectedContent() {
        const protectionDiv = document.getElementById('protection');
        if (protectionDiv) {
            protectionDiv.remove(); // Remove password protection elements
        }
    }

    // Toggle password visibility
    showPasswordButton.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordButton.textContent = 'Hide Password'; // Update button text
        } else {
            passwordInput.type = 'password';
            showPasswordButton.textContent = 'See'; // Update button text
        }
    });

    // Allow submission via the Enter key
    passwordInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });
});
