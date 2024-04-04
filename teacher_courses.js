document.addEventListener('DOMContentLoaded', function() {
    const addCourseBtn = document.getElementById('addCourseBtn');
    const addCourseModal = document.getElementById('addCourseModal');
    const addCourseForm = document.getElementById('addCourseForm');
    const courseList = document.getElementById('courseList');

    // Load courses from local storage when the page loads
    loadCourses();

    addCourseBtn.addEventListener('click', function() {
        addCourseModal.style.display = 'block';
    });

    // Close the modal when clicking on the close button
    document.querySelector('.close').addEventListener('click', function() {
        addCourseModal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == addCourseModal) {
            addCourseModal.style.display = 'none';
        }
    };

    addCourseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const courseName = document.getElementById('courseName').value.trim();
        const courseDescription = document.getElementById('courseDescription').value.trim();
        if (courseName && courseDescription) {
            addCourse(courseName, courseDescription);
            addCourseModal.style.display = 'none';
            addCourseForm.reset(); // Reset the form after adding the course
        }
    });

    function loadCourses() {
        const courses = JSON.parse(localStorage.getItem('teacherCourses')) || [];
        courses.forEach(course => addCourseElement(course));
    }

    function addCourse(courseName, courseDescription) {
        const course = { name: courseName, description: courseDescription };
        let courses = JSON.parse(localStorage.getItem('teacherCourses')) || [];
        
        // Check if the course already exists
        if (!courses.some(c => c.name === courseName)) {
            courses.push(course);
            localStorage.setItem('teacherCourses', JSON.stringify(courses));
            addCourseElement(course);
        }
    }

    function addCourseElement(course) {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <button class="openBtn">Open</button>
            <button class="deleteBtn">Delete</button>
            <span class="enrolled">Enrolled students: 0</span>
        `;
        courseList.appendChild(courseElement);
    }

    // Handle dynamic course buttons
    courseList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('openBtn')) {
            // Open course logic
            alert('Opening course...');
            const courseName = target.parentElement.querySelector('h3').textContent;
            window.location.href = `add_resources.html?course=${encodeURIComponent(courseName)}`;
            
        } else if (target.classList.contains('deleteBtn')) {
            // Delete course logic
            const courseElement = target.parentElement;
            const courseName = courseElement.querySelector('h3').textContent;
            deleteCourse(courseName, courseElement);
        }
    });

    function deleteCourse(courseName, courseElement) {
        let courses = JSON.parse(localStorage.getItem('teacherCourses')) || [];
        courses = courses.filter(course => course.name !== courseName);
        localStorage.setItem('teacherCourses', JSON.stringify(courses));
        courseElement.remove();
    }
});
