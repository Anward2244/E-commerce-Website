const currentUser = localStorage.getItem('currentUser');

if (!currentUser) {
    alert("Please login first.");
    window.location.href = '../login/login.html';
}

function loadCart() {
    const cartKey = 'cart_' + currentUser;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const container = document.getElementById('cart-items');
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center'>Your cart is empty.</p>";
        document.getElementById('buy-btn').style.display = 'none';
    } else {
        document.getElementById('buy-btn').style.display = 'inline-block';
        container.innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class="cart-item">
                    <div class='seperate'>
                        <div>
                        <img src=${item.img}>
                        </div>
                        <div>
                            <h4>${item.name}</h4>
                            <small>${item.category}</small>
                        </div>                    
                    </div>
                    <div id='price-tag'>
                        <strong>₹${item.price}</strong>
                        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    document.getElementById('total-price').innerText = total;
}

function removeFromCart(index) {
    const cartKey = 'cart_' + currentUser;
    let cart = JSON.parse(localStorage.getItem(cartKey));
    
    // Remove item at index
    cart.splice(index, 1);
    
    // Save and reload
    localStorage.setItem(cartKey, JSON.stringify(cart));
    loadCart();
}

function goToCheckout() {
    window.location.href = '../checkout/checkout.html';
}

loadCart();