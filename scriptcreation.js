// Forum data storage (in a real scenario, it would be in a database)
let forums = [];

// Event listener for the form submission
document.getElementById('forumForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    let title = document.getElementById('title').value.trim();
    let body = document.getElementById('body').value.trim();

    // Reset error messages
    document.getElementById('titleError').textContent = '';
    document.getElementById('bodyError').textContent = '';

    // Check if title exists
    if (title === '') {
        document.getElementById('titleError').textContent = 'Title is required';
        return;
    }

    if (forums.some(forum => forum.title === title)) {
        document.getElementById('titleError').textContent = 'This title already exists!';
        return;
    }

    // Check if body exists
    if (body === '') {
        document.getElementById('bodyError').textContent = 'Body is required';
        return;
    }

    // Add the new forum to the forums array
    forums.push({ title: title, body: body });

    // Display success message
    document.getElementById('successMessage').style.display = 'block';

    // Reset form fields
    document.getElementById('title').value = '';
    document.getElementById('body').value = '';
});
