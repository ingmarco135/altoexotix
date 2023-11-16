<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "bd_atoqexoticos";

// Crear conexión
$conn = new mysqli($host, $user, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
