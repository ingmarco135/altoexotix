// Agrega aquí tus scripts para la funcionalidad del carrito

// Inicializar el carrito como un array vacío
let carrito = [];

// Función para agregar un producto al carrito
function addToCart(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto);
    alert(`"${nombre}" ha sido agregado al carrito.`);
    updateCartCounter();
}

// Función para actualizar el contador del carrito
function updateCartCounter() {
    const contador = document.getElementById('cart-counter');
    contador.textContent = carrito.length;
}
