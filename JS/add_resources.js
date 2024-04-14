document.addEventListener('DOMContentLoaded', function() {
    const addResourcesForm = document.getElementById('addResourcesForm');
    const descriptionTextarea = document.getElementById('courseDescription');

    if (addResourcesForm) {
        addResourcesForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get form inputs
            const resourceName = document.getElementById('resourceName').value.trim();
            const resourceType = document.getElementById('resourceType').value;
            const description = descriptionTextarea.value.trim();
            const file = document.getElementById('fileInput').files[0];
            const courseName = decodeURIComponent(getUrlParameter('course'));

            if (resourceName && resourceType && description && file && courseName) {
                saveResource(resourceName, resourceType, description, file, courseName);
                alert('Resource added successfully!');
                window.location.href = 'teacher_courses.html'; // Redirect to teacher courses page
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Function to save resource to local storage for a specific course
function saveResource(resourceName, resourceType, description, file, courseName) {
    // Create a unique identifier for the resource (you can use any method you prefer)
    const resourceId = generateResourceId();

    // Construct the resource object
    const resource = {
        id: resourceId,
        name: resourceName,
        type: resourceType,
        description: description,
        file: file.name, // Just storing the file name for demonstration
        course: courseName // Associate the resource with the course
    };

    // Get existing resources from local storage or initialize an empty array
    let existingResources = JSON.parse(localStorage.getItem('resources')) || [];

    // Add the new resource to the existing array of resources
    existingResources.push(resource);

    // Save the updated array of resources back to local storage
    localStorage.setItem('resources', JSON.stringify(existingResources));

    // Log the resource details (optional)
    console.log('Resource added:', resource);
}


    // Function to generate a unique resource ID (replace with your preferred method)
    function generateResourceId() {
        return 'resource_' + Date.now();
    }

    // Function to get URL parameter
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Optional: Add event listener for description box to show character count or perform validation
    descriptionTextarea.addEventListener('input', function() {
        const characterCount = descriptionTextarea.value.length;
        console.log(`Character count: ${characterCount}`);
        // You can perform validation or show character count as desired
    });
});
