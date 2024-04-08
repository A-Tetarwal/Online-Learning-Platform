document.addEventListener('DOMContentLoaded', function() {
    const resourceList = document.getElementById('resourceList');

    // Retrieve course resources from local storage
    const resources = JSON.parse(localStorage.getItem('resources')) || [];

    // Filter resources based on the course name from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const courseName = urlParams.get('course');
    const courseResources = resources.filter(resource => resource.course === courseName);

    // Display course resources
    courseResources.forEach(resource => {
        const resourceItem = document.createElement('li');
        resourceItem.innerHTML = `
            <h3>${resource.name}</h3>
            <p>Type: ${resource.type}</p>
            <p>Description: ${resource.description}</p>
            <p>File: ${resource.file}</p>
        `;
        resourceList.appendChild(resourceItem);
    });
});
