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

// Function to generate the forum list
function generateForumList() {
    const forumList = document.getElementById('forumList');
    forumList.innerHTML = '';

    forums.forEach(forum => {
        const forumCard = document.createElement('div');
        forumCard.classList.add('forum-card');

        const forumTitle = document.createElement('h3');
        forumTitle.textContent = forum.title;

        const forumHeadline = document.createElement('p');
        forumHeadline.textContent = forum.headline;

        const forumBody = document.createElement('div');
        forumBody.classList.add('forum-body');
        forumBody.textContent = forum.body;

        // Toggle visibility of the forum body when clicking on the card
        forumCard.addEventListener('click', function() {
            if (forumBody.style.display === "none" || forumBody.style.display === "") {
                forumBody.style.display = "block";
            } else {
                forumBody.style.display = "none";
            }
        });

        forumCard.appendChild(forumTitle);
        forumCard.appendChild(forumHeadline);
        forumCard.appendChild(forumBody);

        forumList.appendChild(forumCard);
    });
}

// Call function to generate forum list on page load
generateForumList();
