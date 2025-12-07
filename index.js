// 1. Product Data State
// Custom dataset using images sourced for catalog look
const products = [
    // --- MEN'S COLLECTION ---
    { 
        id: 1, 
        name: "Men's Royal Sherwani", 
        category: "Men", 
        price: 12999, 
        img: "https://images.unsplash.com/photo-1597969892064-a7b2c554c332?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 5, 
        name: "Men's Festive Kurta", 
        category: "Men", 
        price: 2499, 
        img: "https://images.unsplash.com/photo-1629853906660-3162788c0326?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 10, 
        name: "Men's Pathani Suit", 
        category: "Men", 
        price: 3500, 
        img: "https://images.unsplash.com/photo-1632120038815-585860367204?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 14, 
        name: "Men's Jodhpuri Suit", 
        category: "Men", 
        price: 8999, 
        img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 17, 
        name: "Classic Nehru Jacket", 
        category: "Men", 
        price: 1999, 
        img: "https://images.unsplash.com/photo-1616212133276-8803154564c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 18, 
        name: "Silk Kurta Pajama", 
        category: "Men", 
        price: 2800, 
        img: "https://images.unsplash.com/photo-1607541604593-6b7448d3db01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 19, 
        name: "Indo-Western Set", 
        category: "Men", 
        price: 6500, 
        img: "https://images.unsplash.com/photo-1596392996963-c1f03f56d953?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 20, 
        name: "Floral Print Kurta", 
        category: "Men", 
        price: 1500, 
        img: "https://images.unsplash.com/photo-1629853906565-385a083690d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 21, 
        name: "Wedding Bandhgala", 
        category: "Men", 
        price: 14500, 
        img: "https://images.unsplash.com/photo-1603258593922-073c6838a5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 22, 
        name: "Linen Short Kurta", 
        category: "Men", 
        price: 1200, 
        img: "https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },

    // --- WOMEN'S COLLECTION ---
    { 
        id: 2, 
        name: "Banarasi Silk Saree", 
        category: "Women", 
        price: 8500, 
        img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 4, 
        name: "Designer Lehenga Choli", 
        category: "Women", 
        price: 15500, 
        img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 8, 
        name: "Women's Anarkali Suit", 
        category: "Women", 
        price: 4200, 
        img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 9, 
        name: "Women's Silk Kurti Set", 
        category: "Women", 
        price: 2999, 
        img: "https://images.unsplash.com/photo-1583391733975-d18d04423871?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 13, 
        name: "Handloom Cotton Saree", 
        category: "Women", 
        price: 4500, 
        img: "https://images.unsplash.com/photo-1609357606129-28f69b17d9b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 23, 
        name: "Chikankari Georgette Saree", 
        category: "Women", 
        price: 5500, 
        img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 24, 
        name: "Phulkari Dupatta Set", 
        category: "Women", 
        price: 1800, 
        img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 25, 
        name: "Sharara Suit Set", 
        category: "Women", 
        price: 3800, 
        img: "https://images.unsplash.com/photo-1616896264883-9b2e2d93e130?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 26, 
        name: "Kanjeevaram Saree", 
        category: "Women", 
        price: 12000, 
        img: "https://images.unsplash.com/photo-1586520140232-a3962d3a37c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 27, 
        name: "Printed Cotton Kurti", 
        category: "Women", 
        price: 999, 
        img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 28, 
        name: "Heavy Bridal Lehenga", 
        category: "Women", 
        price: 25000, 
        img: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },

    // --- KIDS' COLLECTION ---
    { 
        id: 6, 
        name: "Kids Ethnic Jacket Set", 
        category: "Kids", 
        price: 1800, 
        img: "https://images.unsplash.com/photo-1603258593922-073c6838a5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 12, 
        name: "Girls Festive Lehenga", 
        category: "Kids", 
        price: 3200, 
        img: "https://images.unsplash.com/photo-1621245785055-6b583f73397d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 16, 
        name: "Boys Dhoti Kurta", 
        category: "Kids", 
        price: 1500, 
        img: "https://images.unsplash.com/photo-1616611382422-54d924151740?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 29, 
        name: "Girls Pattu Pavadai", 
        category: "Kids", 
        price: 2100, 
        img: "https://images.unsplash.com/photo-1627993096057-0105d1c25338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 30, 
        name: "Boys Sherwani Set", 
        category: "Kids", 
        price: 2600, 
        img: "https://images.unsplash.com/photo-1599708153386-5509d73d63b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 31, 
        name: "Girls Sharara Set", 
        category: "Kids", 
        price: 1950, 
        img: "https://images.unsplash.com/photo-1598463935292-6f2030f28826?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 32, 
        name: "Kids Pathani Suit", 
        category: "Kids", 
        price: 1700, 
        img: "https://images.unsplash.com/photo-1618217336029-79a6d7195c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 33, 
        name: "Girls Velvet Frock", 
        category: "Kids", 
        price: 1600, 
        img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 34, 
        name: "Boys Brocade Jacket", 
        category: "Kids", 
        price: 1300, 
        img: "https://images.unsplash.com/photo-1611791557930-b463216892cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 35, 
        name: "Girls Anarkali Gown", 
        category: "Kids", 
        price: 2400, 
        img: "https://images.unsplash.com/photo-1526466336329-84451722e0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 36, 
        name: "Infant Ethnic Onesie", 
        category: "Kids", 
        price: 850, 
        img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    }
];

// 2. Initialize Page
const currentUser = localStorage.getItem('currentUser');
const authBtn = document.getElementById('auth-btn');
const greeting = document.getElementById('user-greeting');
const cartCountEl = document.getElementById('cart-count');

function init() {
    renderProducts();
    updateHeader();
}

// 3. Render Products
function renderProducts() {
    const mainContainer = document.getElementById('product-grid');
    
    // Clear the main grid container class to stack sections vertically instead of a single grid
    mainContainer.className = '';
    
    let htmlContent = '';

    // --- TRENDING NOW SECTION (Random Mix) ---
    // Shuffle and pick 4 items
    const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
    const trendingItems = shuffledProducts.slice(0, 4);

    if (trendingItems.length > 0) {
        htmlContent += `
            <div class="section-title">
                <h2>Trending Now</h2>
                <div class="underline"></div>
            </div>
            <div class="grid-container" style="
                display: grid; 
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
                gap: 30px; 
                padding: 0 20px; 
                max-width: 1200px; 
                margin: 0 auto;">
        `;
        
        htmlContent += trendingItems.map(product => `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}" class="product-img">
                <div class="card-details">
                    <h3>${product.name.length > 20 ? product.name.substring(0, 20) + '...' : product.name}</h3>
                    <p class="category">${product.category}</p>
                    <div class="price">₹${product.price}</div>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `).join('');
        
        htmlContent += `</div>`;
    }

    // --- CATEGORY SECTIONS ---
    const categories = ['Men', 'Women', 'Kids'];

    categories.forEach(category => {
        // Filter products for the current category
        const categoryItems = products.filter(p => p.category === category);
        
        if (categoryItems.length > 0) {
            // Append Section Header
            htmlContent += `
                <div class="section-title" style="margin-top: 50px;">
                    <h2>${category}'s Collection</h2>
                    <div class="underline"></div>
                </div>
            `;
            
            // Append Grid for this specific category
            htmlContent += `
                <div class="grid-container" style="
                    display: grid; 
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
                    gap: 30px; 
                    padding: 0 20px; 
                    max-width: 1200px; 
                    margin: 0 auto;">
            `;
            
            // Append Cards
            htmlContent += categoryItems.map(product => `
                <div class="product-card">
                    <img src="${product.img}" alt="${product.name}" class="product-img">
                    <div class="card-details">
                        <h3>${product.name.length > 20 ? product.name.substring(0, 20) + '...' : product.name}</h3>
                        <p class="category">${product.category}</p>
                        <div class="price">₹${product.price}</div>
                        <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            `).join('');
            
            htmlContent += `</div>`; // Close grid container
        }
    });

    // Update the main container
    mainContainer.innerHTML = htmlContent;
}

// 4. Header Logic (Login/Logout Check)
function updateHeader() {
    if (currentUser) {
        greeting.innerText = `Hi, ${currentUser}`;
        authBtn.innerText = "Logout";
        updateCartCount();
    } else {
        greeting.innerText = "";
        authBtn.innerText = "Login";
        cartCountEl.innerText = "0";
    }
}

function handleAuth() {
    if (currentUser) {
        // Logout logic
        localStorage.removeItem('currentUser');
        window.location.reload();
    } else {
        // Login logic
        window.location.href = './login/login.html';
    }
}

// 5. Cart Logic
function addToCart(productId) {
    if (!currentUser) {
        alert("Please Login to add items to your cart.");
        window.location.href = './login/login.html';
        return;
    }

    // Get user specific cart
    let userCartKey = 'cart_' + currentUser;
    let cart = JSON.parse(localStorage.getItem(userCartKey)) || [];

    // Find product details from the fetched products array
    let product = products.find(p => p.id === productId);
    
    if (product) {
        // Add to cart array
        cart.push(product);
        
        // Save back to storage
        localStorage.setItem(userCartKey, JSON.stringify(cart));
        
        updateCartCount();
    }
}

function updateCartCount() {
    if (!currentUser) return;
    let cart = JSON.parse(localStorage.getItem('cart_' + currentUser)) || [];
    cartCountEl.innerText = cart.length;
}

function goToCart() {
    if (!currentUser) {
        alert("Please login first.");
        window.location.href = './login/login.html';
    } else {
        window.location.href = './cart/cart.html';
    }
}

// Run initialization
init();