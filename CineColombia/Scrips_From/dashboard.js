// Esperar a que el DOM esté completamente cargado
$(document).ready(function () {
    // Capturar el clic en el botón de cerrar sesión
    $('#btnExit').click(function (e) {
        e.preventDefault(); // Evita cualquier comportamiento por defecto

        // Opcional: Limpiar los datos guardados en el navegador (SessionStorage o LocalStorage)
        sessionStorage.clear();
        localStorage.clear();

        // Redireccionar al archivo index.html (como estás en la misma carpeta paginas, no hace falta ruta)
        window.location.href = "index.html";
    });
});

