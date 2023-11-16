function displayImage(input) {
    const file = input.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const avatar = document.querySelector('.avatar img');
        avatar.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  function guardarCambios() {
    const form = document.getElementById('profileForm');
    const formData = new FormData(form);
  
    // Aquí puedes enviar la información a través de AJAX o realizar otras acciones según tus necesidades.
    // Por ahora, simplemente mostraremos la información en la consola.
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  
    alert('Cambios guardados exitosamente.');
  }
  