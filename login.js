document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Perform authentication
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate authentication (replace with actual authentication logic)
        // Here, we assume that the username determines the user type
        if (username.startsWith('teacher')) {
            window.location.href = 'teacher_courses.html';
        } else {
            window.location.href = 'courses.html';
        }
    });
});
