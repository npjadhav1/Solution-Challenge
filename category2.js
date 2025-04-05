document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const makeOrderBtn = document.getElementById('make-order');
    const emptyCartBtn = document.getElementById('empty-cart');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');

    let items = [];

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <span>${item.name} (₱${item.price})</span>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartItems.appendChild(itemDiv);
            total += item.price;
        });

        cartTotal.textContent = `Total: ₱${total.toFixed(2)}`;
    }

    addToCartBtns.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);

            items.push({ name, price });
            updateCart();
            cart.style.display = 'block'; // Show the cart
        });
    });

    cartItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = parseInt(event.target.dataset.index);
            items.splice(index, 1);
            updateCart();
        }
    });

    makeOrderBtn.addEventListener('click', () => {
        alert('Order placed!');
        items = []; 
        updateCart();
    });

    emptyCartBtn.addEventListener('click', () => {
        items = [];
        updateCart();
    });
});