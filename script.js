



document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelector('.products');
    let url = 'https://fakestoreapi.com/products';

    // Fetch products data
    fetch(url)
        .then(response => response.json())
        .then(json => {
            json.forEach(product => {
                products.innerHTML += `
                    <div class="product">
                        <img src="${product.image}" alt="${product.title}" class="product-img">
                        <h2 class="product-title">${product.title}</h2>
                        <h4 class="product-category">${product.category}</h4>
                        <p class="product-description">${product.description.substring(0, 100)}...</p>
                        <div class="product-price-container">
                            <h3 class="product-price">$${product.price.toFixed(2)}</h3>
                            <a href="#!" data-productId="${product.id}" class="add-to-cart">Add to Cart</a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});


// 2.
// document.addEventListener('DOMContentLoaded', async function fetchProducts() {
//     let url = 'https://fakestoreapi.com/products';
//     const productsContainer = document.querySelector('.products');

//     try {
//         const response = await fetch(url);
//         const products = await response.json();

//         // Clear container (if needed)
//         productsContainer.innerHTML = '';

//         // Iterate over fetched products and generate HTML
//         products.forEach(product => {
//             const productHTML = `
//                 <div class="product">
//                     <img src="${product.image}" alt="${product.title}" class="product-img">
//                     <h2 class="product-title">${product.title}</h2>
//                     <h4 class="product-category">${product.category}</h4>
//                     <p class="product-description">${product.description.substring(0, 100)}...</p>
//                     <div class="product-price-container">
//                         <h3 class="product-price">$${product.price.toFixed(2)}</h3>
//                         <a href="#!" data-productId="${product.id}" class="add-to-cart">Add to Cart</a>
//                     </div>
//                 </div>
//             `;
//             productsContainer.innerHTML += productHTML;
//         });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         productsContainer.innerHTML = `<p>Unable to load products at the moment.</p>`;
//     }
// });



// 3.
// // DOMContentLoaded ensures the script runs after the page loads
// document.addEventListener('DOMContentLoaded', async function () {
//     const productsContainer = document.querySelector('.products'); // Select the container
//     const url = 'https://fakestoreapi.com/products'; // API endpoint

//     try {
//         // Fetch data from the API
//         const response = await fetch(url);
//         const products = await response.json(); // Parse JSON

//         // Clear the container
//         productsContainer.innerHTML = '';

//         // Iterate through the response data and render products
//         products.forEach(product => {
//             const productHTML = `
//                 <div class="product">
//                     <img src="${product.image}" alt="${product.title}" class="product-img">
//                     <h2 class="product-title">${product.title}</h2>
//                     <h4 class="product-category">${product.category}</h4>
//                     <p class="product-description">${product.description.substring(0, 100)}...</p>
//                     <div class="product-price-container">
//                         <h3 class="product-price">$${product.price.toFixed(2)}</h3>
//                         <a href="#!" data-productId="${product.id}" class="add-to-cart">Add to Cart</a>
//                     </div>
//                 </div>
//             `;
//             // Append the product card to the container
//             productsContainer.innerHTML += productHTML;
//         });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         productsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
//     }
// });
