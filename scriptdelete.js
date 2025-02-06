// Sample forum data (you can fetch this from a server in real-world applications)
const forums = [
    {
        title: "How to start learning JavaScript?",
        headline: "Starting with the basics of JavaScript.",
        body: "JavaScript is one of the most popular programming languages. To get started, you should first learn the syntax, variables, data types, functions, and basic logic."
    },
    {
        title: "Best practices for web design",
        headline: "What are the most important factors in web design?",
        body: "Good web design should focus on usability, accessibility, and aesthetic appeal. The design should be responsive and provide a smooth user experience."
    },
    {
        title: "Understanding async programming",
        headline: "What is asynchronous programming and why is it important?",
        body: "Asynchronous programming allows a program to perform multiple tasks concurrently without waiting for each task to complete before moving to the next."
    },
    // Add more forum data here as needed...
];

// Function to generate the forum list with delete button
function generateForumList() {
    const forumList = document.getElementById('forumList');
    forumList.innerHTML = '';

    forums.forEach((forum, index) => {
        const forumCard = document.createElement('div');
        forumCard.classList.add('forum-card');

        const forumTitle = document.createElement('h3');
        forumTitle.textContent = forum.title;

        const forumHeadline = document.createElement('p');
        forumHeadline.textContent = forum.headline;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = "Delete Forum";

        // Function to delete the forum
        deleteButton.addEventListener('click', function() {
            deleteForum(index);
        });

        forumCard.appendChild(forumTitle);
        forumCard.appendChild(forumHeadline);
        forumCard.appendChild(deleteButton);

        forumList.appendChild(forumCard);
    });
}

// Function to delete the forum from the list
function deleteForum(index) {
    if (confirm('Are you sure you want to delete this forum?')) {
        forums.splice(index, 1); // Remove the forum from the forums array
        generateForumList(); // Regenerate the forum list to reflect the changes
    }
}

// Call function to generate forum list on page load
generateForumList();
