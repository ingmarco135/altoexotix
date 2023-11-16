function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
  }
  
  // Cerrar el menú si se hace clic fuera de él
  window.onclick = function (event) {
    if (!event.target.matches('.profile-button')) {
      var dropdownMenu = document.getElementById("dropdownMenu");
      if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
      }
    }
  }
  