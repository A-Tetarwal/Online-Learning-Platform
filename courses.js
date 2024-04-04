document.addEventListener('DOMContentLoaded', function() {
    const courseList = document.getElementById('courseList');
    const searchInput = document.getElementById('searchInput');

    // Retrieve courses from local storage
    let courses = JSON.parse(localStorage.getItem('courses')) || [];

    // Display courses on the page
    function displayCourses() {
        courseList.innerHTML = '';
        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <button class="enrollBtn">Enroll</button>
                <button class="deleteBtn">Delete</button>
            `;
            courseList.appendChild(courseElement);
        });
    }

    displayCourses();

    // Handle dynamic enroll and delete buttons
    courseList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('enrollBtn')) {
            // Enroll logic
            alert('Enrolling in course...');
        } else if (target.classList.contains('deleteBtn')) {
            // Delete course logic
            const courseIndex = Array.from(courseList.children).indexOf(target.parentElement);
            courses.splice(courseIndex, 1);
            localStorage.setItem('courses', JSON.stringify(courses));
            displayCourses();
        }
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchTerm) || course.description.toLowerCase().includes(searchTerm));
        courseList.innerHTML = '';
        filteredCourses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <button class="enrollBtn">Enroll</button>
                <button class="deleteBtn">Delete</button>
            `;
            courseList.appendChild(courseElement);
        });
    });
});
