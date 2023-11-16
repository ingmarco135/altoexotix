<?php
session_start(); // Iniciar sesión

// Incluir el archivo de conexión a la base de datos
include 'db_connection.php';

// Inicializar el mensaje
$message = isset($message) ? $message : "";
$message_class = isset($message_class) ? $message_class : "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener las credenciales del formulario
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Consultar la base de datos para encontrar al usuario
    $query = "SELECT * FROM t_usuario WHERE CorreoElectronico = '$email' AND Contrasena = '$password'";
    $result = $conn->query($query);

    if ($result->num_rows == 1) {
        // Usuario encontrado, iniciar sesión
        $_SESSION['loggedin'] = true;
        $_SESSION['email'] = $email;
        $message = "Sesión iniciada correctamente";
        $message_class = "success";
        $success = true;
    } else {
        $message = "Correo electrónico o contraseña incorrectos. Por favor, verifica tus credenciales.";
        $message_class = "error";
        $success = false;
    }
}


// Devolver la respuesta como JSON
echo json_encode(['success' => $success, 'message' => $message, 'class' => $message_class]);

