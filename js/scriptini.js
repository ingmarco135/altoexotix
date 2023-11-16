document.addEventListener('DOMContentLoaded', function () {
    // Obtener el elemento de la categoría para agregar un evento de clic
    var categoriaAnimales = document.querySelector('.submenu li:first-child');

    // Agregar un evento de clic a la categoría de animales
    categoriaAnimales.addEventListener('click', function () {
        console.log('Clic en la categoría de Animales Exóticos');

        // Puedes agregar más lógica aquí, como cargar productos de esa categoría, etc.
    });
});
