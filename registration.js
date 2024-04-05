document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const errorContainer = document.getElementById('errorContainer');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const userTypeSelect = document.getElementById('user_type');
        const selectedRole = userTypeSelect.value;

        // Check if passwords match
        if (password !== confirmPassword) {
            showError('Passwords do not match.');
            return;
        }

        // Save registration details to local storage
        const userDetails = {
            username: username,
            email: email,
            password: password,
            userType: selectedRole
        };

        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        // Redirect based on selected role
        if (selectedRole === 'student') {
            window.location.href = 'courses.html';
        } else if (selectedRole === 'teacher') {
            window.location.href = 'select_subject.html';
        } else {
            // Handle invalid selection
            showError('Invalid user type!');
        }
    });

    // Function to display error message
    function showError(message) {
        errorContainer.innerText = message;
        errorContainer.style.display = 'block';
    }
});
