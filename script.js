// script.js
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both username and password.';
    } else {
        const validLogin = credentials.find(cred => cred.username === username && cred.password === password);
        if (validLogin) {
            console.log('Login successful!');
            window.location.href = 'https://google.com'; // Redirect to another page
        } else {
            errorMessage.textContent = 'Incorrect username or password.';
        }
    }
});