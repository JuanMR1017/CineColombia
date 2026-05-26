$(function () {
    $("#btnLogin").click(function () {
        
        let user = $("#txtUser").val();
        let pass = $("#txtPass").val();

        if (user == "admin" && pass == "1234") {

            //guardar sesión
            localStorage.setItem("logueado", "true");
            localStorage.setItem("usuario", user);

            // ir al dashboard
            window.location.href = "dashboard.html";
        }

        else {
            $("#error").text("Usuario o contraseña incorrectos");
        }
    });



});

// Capturar el clic en el botón de cerrar sesión
$('#btnExit').click(function (e) {
    e.preventDefault(); // Evita cualquier comportamiento por defecto

    // Opcional: Limpiar los datos guardados en el navegador (SessionStorage o LocalStorage)
    sessionStorage.clear();
    localStorage.clear();

    // Redireccionar al archivo index.html (ajusta los puntos '../' según tu estructura de carpetas)
    window.location.href = "../index.html";
});



