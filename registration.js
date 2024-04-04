document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get selected role
        const userTypeSelect = document.getElementById('user_type');
        const selectedRole = userTypeSelect.value;

        // Redirect based on selected role
        if (selectedRole === 'student') {
            window.location.href = 'courses.html';
        } else if (selectedRole === 'teacher') {
            window.location.href = 'select_subject.html';
        } else {
            // Handle invalid selection
            alert('Invalid user type!');
        }
    });
});
