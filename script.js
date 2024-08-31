let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    cartItems.innerHTML = '';

    let totalPrecio = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        cartItems.appendChild(li);
        totalPrecio += item.precio;
    });

    total.textContent = totalPrecio.toFixed(2);
}

document.getElementById('processPayment').addEventListener('click', () => {
    const paymentMethod = document.getElementById('paymentSelect').value;
    const total = document.getElementById('total').textContent;

    if (carrito.length === 0) {
        alert('El carrito está vacío. Por favor, agregue productos antes de realizar el pago.');
    } else {
        alert(`Pago de $${total} realizado con ${paymentMethod}. Gracias por su compra!`);
        carrito = [];
        actualizarCarrito();
    }
});

// Funcionalidad para mostrar y ocultar el menú de perfil
const userLogo = document.getElementById('userLogo');
const profileMenu = document.getElementById('profileMenu');

userLogo.addEventListener('click', () => {
    profileMenu.classList.toggle('hidden');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    if (!userLogo.contains(event.target) && !profileMenu.contains(event.target)) {
        profileMenu.classList.add('hidden');
    }
});
