document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorContainer = document.getElementById('errorContainer');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Retrieve login details from local storage
        const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        console.log('Stored user details:', storedUserDetails);

        // Get form inputs
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('Entered username:', username);
        console.log('Entered password:', password);

        // Check if stored user details exist
        if (storedUserDetails) {
            // Check if entered username and password match stored user details
            if (username === storedUserDetails.username && password === storedUserDetails.password) {
                console.log('Login successful');
                // Redirect based on user type
                if (storedUserDetails.userType === 'teacher') {
                    window.location.href = 'teacher_courses.html';
                } else {
                    window.location.href = 'courses.html';
                }
            } else {
                console.log('Invalid username or password');
                showError('Invalid username or password.');
            }
        } else {
            console.log('No user found');
            showError('No user found. Please register.');
        }
    });

    // Function to display error message
    function showError(message) {
        errorContainer.innerText = message;
        errorContainer.style.display = 'block';
    }
});
