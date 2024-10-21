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
    const passwordSection = document.getElementById('passwordSection');
    const contentSection = document.getElementById('contentSection');

    // Check localStorage for saved login
    if (localStorage.getItem('loggedIn') === 'true') {
        enableNavigation();
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        const enteredPassword = passwordInput.value;

        if (acceptedPasswords.includes(enteredPassword)) {
            localStorage.setItem('loggedIn', 'true'); // Save login status
            enableNavigation(); // Enable the navigation bar
        } else {
            alert('Incorrect password');
        }
    });

    function enableNavigation() {
        // Change the page title
        document.title = 'Freeman Family';

        // Enable all the nav links
        navLinks.forEach(function (link) {
            link.classList.remove('disabled');
        });

        // Hide the password form and show the content
        passwordSection.style.display = 'none';
        contentSection.style.display = 'block';
    }

    // Toggle password visibility
    document.getElementById('showPassword').addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    // Allow submission via the Enter key
    passwordInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            form.dispatchEvent(new Event('submit'));
        }
    });
});
