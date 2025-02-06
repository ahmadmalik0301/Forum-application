// script.js

let users = []; // Array to store usernames for the mock local storage

// Toggle between Login and Sign Up
document.getElementById('toggleAuth').addEventListener('click', function() {
    let title = document.getElementById('auth-title');
    let form = document.getElementById('authForm');
    let button = form.querySelector('button');
    let toggleLink = document.getElementById('toggleLink');
    
    if (title.textContent === 'Login') {
        title.textContent = 'Sign Up';
        button.textContent = 'Sign Up';
        toggleLink.innerHTML = 'Already have an account? <a href="#" id="toggleAuth">Login</a>';
        document.getElementById('toggleAuth').addEventListener('click', toggleLoginSignUp);
    } else {
        title.textContent = 'Login';
        button.textContent = 'Login';
        toggleLink.innerHTML = 'Don\'t have an account? <a href="#" id="toggleAuth">Sign Up</a>';
        document.getElementById('toggleAuth').addEventListener('click', toggleLoginSignUp);
    }
});

// Handle form submission
document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let message = document.getElementById('message');
    let isSignUp = document.getElementById('auth-title').textContent === 'Sign Up';

    if (isSignUp) {
        // Sign up logic: check if the username already exists
        if (users.includes(username)) {
            message.style.color = 'red';
            message.textContent = 'Username already exists. Try another one.';
        } else {
            users.push(username); // Add new username to the list
            message.style.color = 'green';
            message.textContent = 'Sign up successful! Redirecting to the main page...';
            setTimeout(() => {
                window.location.href = 'main.html';
            }, 1500);
        }
    } else {
        // Login logic: check if the username exists and matches the password
        if (username === 'admin' && password === '1234') {
            message.style.color = 'green';
            message.textContent = 'Login successful! Redirecting to the main page...';
            setTimeout(() => {
                window.location.href = 'main.html';
            }, 1500);
        } else {
            message.style.color = 'red';
            message.textContent = 'Invalid credentials. Try again.';
        }
    }
});

// Toggle between Login and Sign Up
function toggleLoginSignUp() {
    let title = document.getElementById('auth-title');
    let form = document.getElementById('authForm');
    let button = form.querySelector('button');
    let toggleLink = document.getElementById('toggleLink');
    
    if (title.textContent === 'Thread Intellects') {
        title.textContent = 'Thread Intellects';
        button.textContent = 'Sign Up';
        toggleLink.innerHTML = 'Already have an account? <a href="#" id="toggleAuth">Login</a>';
        document.getElementById('toggleAuth').addEventListener('click', toggleLoginSignUp);
    } else {
        title.textContent = 'Thread Intellects';
        button.textContent = 'Login';
        toggleLink.innerHTML = 'Don\'t have an account? <a href="#" id="toggleAuth">Sign Up</a>';
        document.getElementById('toggleAuth').addEventListener('click', toggleLoginSignUp);
    }
}
