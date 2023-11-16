// Función para mostrar el menú de navegación en dispositivos móviles
function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

// Funciones para cambiar entre el formulario de inicio de sesión y el de registro
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function handleSubmit() {
// Realiza cualquier lógica de validación que puedas necesitar aquí
 // Muestra el mensaje de éxito
 showSuccessMessage(); // Devuelve false para evitar que el formulario se envíe realmente
 return false;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const messageContainer = document.getElementById('alert-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('verifi_login.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Si la autenticación es exitosa, redirige al usuario a la página de inicio
                window.location.href = 'Inicio.html';
            } else {
                // Si hay un error, muestra el mensaje de error en el contenedor de mensajes
                messageContainer.innerHTML = `<div class="alert ${data.class}">${data.message}</div>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
function showSuccessMessage(messageText) {
    // Elimina todos los elementos hijos del contenedor de alertas
    var alertContainer = document.getElementById("alert-container");
    alertContainer.innerHTML = "";

    // Crea un nuevo elemento div para el mensaje de éxito
    var alertMessage = document.createElement("div");
    alertMessage.className = "alert success";
    alertMessage.innerHTML = messageText || "Formulario enviado exitosamente";

    // Añade el nuevo elemento al contenedor de alertas
    alertContainer.appendChild(alertMessage);
}

//Codigo para recuperar contraseña

// Añade esta función al final de tu scripts.js
// Dentro de tu función handleResetPassword en scripts.js
function handleResetPassword() {
    const resetEmail = document.querySelector('input[name="resetEmail"]').value;

    // Agrega lógica para enviar el correo de restablecimiento aquí (puedes usar fetch o AJAX)
    fetch('php/reset_password.php', {
        method: 'POST',
        body: new URLSearchParams({ 'resetEmail': resetEmail, 'resetPasswordBtn': true }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
        } else {
            alert(`Error: ${data.message}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // Oculta el formulario después de enviar el correo
    document.getElementById('resetPassword').style.display = 'none';

    // Evita que el formulario se envíe realmente
    return false;
}
