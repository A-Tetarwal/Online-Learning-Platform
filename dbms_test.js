document.addEventListener('DOMContentLoaded', function() {
    const dbmsTestForm = document.getElementById('dbmsTestForm');
    
    dbmsTestForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Retrieve answers
        const answers = {
            q1: 'A',
            q2: 'A',
            q3: 'C',
            q4: 'A',
            q5: 'C'
        };
        
        // Calculate marks
        let marks = 0;
        for (const question in answers) {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === answers[question]) {
                marks++;
            }
        }
        
        // Display result
        alert(`Your score: ${marks}/5`);
        
        // Redirect if all answers are correct
        if (marks === 5) {
            window.location.href = 'teacher_courses.html';
        }
    });
});
