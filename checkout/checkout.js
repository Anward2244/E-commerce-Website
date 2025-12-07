const currentUser = localStorage.getItem('currentUser');

if (!currentUser) {
    window.location.href = 'login.html';
}

function confirmOrder() {
    const cartKey = 'cart_' + currentUser;
    
    // Clear the cart for this user
    localStorage.removeItem(cartKey);
    
    alert("Order Placed Successfully! Thank you for shopping.");
    
    // Return to homepage
    window.location.href = '../index.html';
}