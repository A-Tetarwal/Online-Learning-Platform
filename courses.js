document.addEventListener('DOMContentLoaded', function() {
    const courseList = document.getElementById('courseList');
    const searchInput = document.getElementById('searchInput');

    // Retrieve courses from local storage
    let teacherCourses = JSON.parse(localStorage.getItem('teacherCourses')) || [];

    // Display teacher's courses on the page
    function displayTeacherCourses() {
        courseList.innerHTML = '';
        teacherCourses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <button class="enrollBtn">Enroll</button>
            `;
            courseList.appendChild(courseElement);
        });
    }

    displayTeacherCourses();

    // Handle dynamic enroll buttons
    courseList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('enrollBtn')) {
            // Enroll logic
            alert('Enrolling in course...');
        }
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCourses = teacherCourses.filter(course => course.name.toLowerCase().includes(searchTerm) || course.description.toLowerCase().includes(searchTerm));
        courseList.innerHTML = '';
        filteredCourses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <button class="enrollBtn">Enroll</button>
            `;
            courseList.appendChild(courseElement);
        });
    });
});
