const cartItems = [];
const cartList = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartSection = document.getElementById('cart');
const closeCartBtn = document.getElementById('close-cart');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    cartItems.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });
  cartCount.textContent = cartItems.length;
  cartTotal.textContent = total.toFixed(2);
}

// Toggle Cart Slide
document.getElementById('cart-btn').addEventListener('click', () => {
  cartSection.classList.add('open');
});

// Close Cart
closeCartBtn.addEventListener('click', () => {
  cartSection.classList.remove('open');
});
