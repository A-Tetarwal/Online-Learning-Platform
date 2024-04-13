document.addEventListener('DOMContentLoaded', function() {
    const courseList = document.getElementById('courseList');

    // Retrieve courses from local storage (replace with actual fetching logic)
    let courses = JSON.parse(localStorage.getItem('teacherCourses')) || [];

    // Display courses on the home page
    function displayCourses() {
        courses.forEach(course => {
            const courseElement = document.createElement('li');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <button onclick="enrollCourse('${course.name}')">Enroll</button>
            `;
            courseList.appendChild(courseElement);
        });
    }

    // Call the function to display courses
    displayCourses();
});

// Function to enroll in a course (replace with your logic)
function enrollCourse(courseName) {
    alert(`Enrolling in ${courseName}`);
}
