function cambiarNombreUsuario() {
    var nuevoNombre = prompt("Ingrese el nuevo nombre de usuario:");
    if (nuevoNombre !== null && nuevoNombre !== "") {
      document.getElementById("username").innerText = nuevoNombre;
    }
  }
  