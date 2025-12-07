document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get existing users or create empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('User already exists! Please login.');
        window.location.href = '../login/login.html';
    } else {
        // Add new user
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration Successful! Please login.');
        window.location.href = '../login/login.html';
    }
});