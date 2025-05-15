// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const inputFoto = document.getElementById("fotoPerfil");
  const imagenPreview = document.getElementById("fotoPreview");
  const overlay = document.querySelector(".overlay");

  if (inputFoto) {
    inputFoto.addEventListener("change", (event) => {
      const archivo = event.target.files[0];

      if (!archivo) {
        alert("No se seleccionó ningún archivo.");
        return;
      }

      if (!archivo.type.startsWith("image/")) {
        alert("El archivo seleccionado no es una imagen.");
        return;
      }

      const urlTemporal = URL.createObjectURL(archivo);
      imagenPreview.src = urlTemporal;

      // Opcional: cambiar el texto del overlay después de subir
      if (overlay) {
        overlay.textContent = "Cambiar";
      }
    });
  }

  // BONUS: comportamiento del botón de búsqueda
  const searchBtn = document.querySelector('.search-button');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      searchBtn.classList.toggle('active');
    });
  }
});
