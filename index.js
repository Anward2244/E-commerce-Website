const products = [
    // --- MEN'S COLLECTION ---
    { 
        id: 1, 
        name: "Men's Checkered Shirt", 
        category: "Men", 
        price: 12999, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/6/a/-original-imahfqhcngcvu33h.jpeg?q=70" 
    },
    { 
        id: 5, 
        name: "Men's Polyster Dark Green Tshirt", 
        category: "Men", 
        price: 2499, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/z/r/xxl-tsrt-catalog-03-kajaru-original-imagprym5gyz3jxh.jpeg?q=70" 
    },
    { 
        id: 10, 
        name: "Men's Pathani Suit", 
        category: "Men", 
        price: 3500, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/b/7/3xl-white-pp-om-sai-empire-original-imahdnvuurztvu58.jpeg?q=70" 
    },
    { 
        id: 14, 
        name: "Men's Jodhpuri Suit", 
        category: "Men", 
        price: 8999, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/suit/s/6/6/38-suit-meti-blac-aljaami-original-imahhkzbgs3kptch.jpeg?q=70" 
    },
    { 
        id: 17, 
        name: "Classic Nehru Jacket", 
        category: "Men", 
        price: 1999, 
        img: "https://rukminim2.flixcart.com/image/612/612/l5cslu80/waistcoat/q/d/z/m-marun-01-maksud-enterprise-original-imaggfvzch8u8cz7.jpeg?q=70" 
    },
    { 
        id: 18, 
        name: "Silk Kurta Pajama", 
        category: "Men", 
        price: 2800, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/b/l/e/xl-mf-mkpj0107-maahi-fabs-original-imahg548jpquhqk7.jpeg?q=70" 
    },
    { 
        id: 19, 
        name: "Indo-Western Set", 
        category: "Men", 
        price: 6500, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sherwani/n/e/h/xl-1-mehndi-sherwani-aljaami-original-imahcy3h6zmmjtzz.jpeg?q=70" 
    },
    { 
        id: 20, 
        name: "Floral Print Kurta", 
        category: "Men", 
        price: 1500, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/1/y/o/xxl-ko-650lemon-jompers-original-imahfzk9fg7bvqnb.jpeg?q=70" 
    },
    { 
        id: 21, 
        name: "Wedding Bandhgala", 
        category: "Men", 
        price: 14500, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/blazer/r/9/g/34-superb-black-humjoli-original-imah3khwk9mpvfw3.jpeg?q=70" 
    },
    { 
        id: 22, 
        name: "Linen Short Kurta", 
        category: "Men", 
        price: 1200, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kurta/h/2/g/xxl-vl-kbt-ch-a-vida-loca-original-imah8zt9st9ru2mr.jpeg?q=70" 
    },

    // --- WOMEN'S COLLECTION ---
    { 
        id: 2, 
        name: "Banarasi Silk Saree", 
        category: "Women", 
        price: 8500, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/h/h/9/free-4240s6672r-satrani-unstitched-original-imahayuypnshxwce.jpeg?q=70" 
    },
    { 
        id: 4, 
        name: "Designer Lehenga Choli", 
        category: "Women", 
        price: 15500, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/r/s/7/free-half-sleeve-lc-sansa-shree-impex-original-imahfacmfwmvbxug.jpeg?q=70" 
    },
    { 
        id: 8, 
        name: "Women's Anarkali Suit", 
        category: "Women", 
        price: 4200, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/t/3/o/l-yellow-anarkali-3p-oumad-original-imah82n6fprwexkg.jpeg?q=70" 
    },
    { 
        id: 9, 
        name: "Women's Silk Kurti Set", 
        category: "Women", 
        price: 2999, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/j/a/7/-original-imahfphezrhzggyg.jpeg?q=70" 
    },
    { 
        id: 13, 
        name: "Handloom Cotton Saree", 
        category: "Women", 
        price: 4500, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/l/u/q/-original-imagu22acdazvnbm.jpeg?q=70" 
    },
    { 
        id: 23, 
        name: "Salwar Suit", 
        category: "Women", 
        price: 5500, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/y/k/m/5xl-joplrw-rajnandini-original-imah2na5yxf9wtqb.jpeg?q=70" 
    },
    { 
        id: 24, 
        name: "Kurta Set", 
        category: "Women", 
        price: 1800, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/z/y/b/m-shloka-shree-ramkrishna-fab-original-imahhayzfhqqjpdz.jpeg?q=70" 
    },
    { 
        id: 25, 
        name: "Sharara Suit Set", 
        category: "Women", 
        price: 3800, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/v/j/k/m-mustard-kurta-set-suyasam-creation-original-imah8t6azysgzvef.jpeg?q=70" 
    },
    { 
        id: 26, 
        name: "Kanjeevaram Saree", 
        category: "Women", 
        price: 12000, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/3/p/v/free-fk-ys-og1-tarangini-green-yashika-unstitched-original-imahfnxjvkhtthyh.jpeg?q=70" 
    },
    { 
        id: 27, 
        name: "Printed Cotton Kurti", 
        category: "Women", 
        price: 999, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/b/b/m-uk-raani-print-udati-kaliya-original-imahganznkwcthfh.jpeg?q=70" 
    },
    { 
        id: 28, 
        name: "Heavy Bridal Lehenga", 
        category: "Women", 
        price: 25000, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/b/y/o/free-sleeveless-heavy-lehenga-jovty-original-imaheb57hnjg63wj.jpeg?q=70" 
    },

    // --- KIDS' COLLECTION ---
    { 
        id: 6, 
        name: "Kids Ethnic Jacket Set", 
        category: "Kids", 
        price: 1800, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/7/7/o/13-14-years-2-no-j073406-charchit-original-imah4f5yheqq5jnp.jpeg?q=70" 
    },
    { 
        id: 12, 
        name: "Girls Festive Lehenga", 
        category: "Kids", 
        price: 3200, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-lehenga-choli/m/k/z/4-5-years-asik-2-purple-eternallexis-original-imahahs7yuqncmgr.jpeg?q=70" 
    },
    { 
        id: 16, 
        name: "Boys Dhoti Kurta", 
        category: "Kids", 
        price: 1500, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/e/h/e/4-5-years-558-royal-blue-24-ng-new-gen-original-imahhzfzt8b7jcr3.jpeg?q=70" 
    },
    { 
        id: 29, 
        name: "Girls Pattu Pavadai", 
        category: "Kids", 
        price: 2100, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-lehenga-choli/i/t/t/18-24-months-ishaan-nimbark-creation-original-imahfzqchfdkyst5.jpeg?q=70" 
    },
    { 
        id: 30, 
        name: "Boys Sherwani Set", 
        category: "Kids", 
        price: 2600, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/f/c/k/4-5-years-indo-western-punjabi-royal-blue-sastrey-original-imagjtz9kesxbhnx.jpeg?q=70" 
    },
    { 
        id: 31, 
        name: "Girls Sharara Set", 
        category: "Kids", 
        price: 1950, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-lehenga-choli/9/x/s/9-10-years-sk-yellow-salaserkueti-original-imahcu43eejwjctk.jpeg?q=70" 
    },
    { 
        id: 32, 
        name: "Kids Pathani Suit", 
        category: "Kids", 
        price: 1700, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/x/l/n/7-8-years-pathani-set-hrr-original-imahb922uyqeynzr.jpeg?q=70" 
    },
    { 
        id: 33, 
        name: "Girls Velvet Frock", 
        category: "Kids", 
        price: 1600, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/d/f/c/4-5-years-428-anmoldress-original-imahf5aeskwnzynf.jpeg?q=70" 
    },
    { 
        id: 34, 
        name: "Boys Brocade Jacket", 
        category: "Kids", 
        price: 1300, 
        img: "https://rukminim2.flixcart.com/image/612/612/k0zlsi80/jacket/c/z/m/7-8-years-jbnbj031gn-jbn-creation-original-imafknhhkfzbujnq.jpeg?q=70" 
    },
    { 
        id: 35, 
        name: "Girls Anarkali Gown", 
        category: "Kids", 
        price: 2400, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/gown/y/y/m/5years-10-11-years-full-sleeve-stitched-anarkali-kurta-barkat-10-original-imahdg8ptyf4mzux.jpeg?q=70" 
    },
    { 
        id: 36, 
        name: "Girl's Party Dress", 
        category: "Kids", 
        price: 850, 
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/c/6/v/7-8-years-n703-black-asrastores-original-imahyayggz9nxrv8.jpeg?q=70" 
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
            <div class="section-title" id = 'trending'>
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