document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Set current session
        localStorage.setItem('currentUser', users[0].name);
        alert('Login Successful!');
        window.location.href = '../index.html';
    } else {
        // Check if user exists but password is wrong, or user doesn't exist
        const emailExists = users.some(u => u.email === email);
        if (emailExists) {
            alert('Incorrect Password');
        } else {
            alert('User not found. Please Sign Up.');
            window.location.href = '../signup/signup.html';
        }
    }
});