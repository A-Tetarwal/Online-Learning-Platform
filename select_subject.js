document.addEventListener('DOMContentLoaded', function() {
    const subjectForm = document.getElementById('subjectForm');
    subjectForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const selectedSubject = document.getElementById('subject').value;
        if (selectedSubject === 'software_engineering') {
            window.location.href = 'software_engineering_test.html';
        } else if (selectedSubject === 'dbms') {
            window.location.href = 'dbms_test.html';
        } else {
            // Handle invalid selection
            alert('Please select a subject.');
        }
    });
});