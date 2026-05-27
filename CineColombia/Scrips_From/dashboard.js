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

    // Cargar la vista de inicio por defecto
    cargarVista("inicio");

    // Lógica para botones de la barra lateral
    $(".nav-link").click(function (e) {
        e.preventDefault();

        // Actualizar botón activo
        $(".nav-link").removeClass("active");
        $(this).addClass("active");

        let vista = $(this).data("target");
        let titulo = $(this).find("span").text();

        // Actualizar título de la ventana
        $("#view-title").text(titulo);

        // Cargar el contenido en el contenedor dinámico
        cargarVista(vista);
    });

    // Actualizar la fecha al cargar la página
    actualizarFecha();
});

function cargarVista(vista) {
    if(!vista) return;
    
    // Intenta usar fetch como alternativa a .load() de jQuery ya que suele dar más detalles
    fetch(vista + ".html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de red: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            $("#dynamic-content").html(html);
        })
        .catch(error => {
            console.error("Hubo un problema al cargar la vista:", error);
            $("#dynamic-content").html("<div style='padding: 20px; color: red;'><h3>Error al cargar la vista " + vista + "</h3><p>Asegúrate de estar ejecutando la aplicación a través de un servidor (IIS Express / Live Server).</p></div>");
        });
}

function actualizarFecha() {

    let fecha = new Date();

    $("#txtLiveDate")
        .text(fecha.toLocaleDateString(
            "es-CO",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        ));
}