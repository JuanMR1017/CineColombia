// Ventas.js - Lógica específica para la pantalla de ventas
$(document).ready(function() {

    // Simulación de una base de datos de clientes
    const clientesDB = {
        "1017001001": { nombre: "Juan Pérez", tipoDoc: "Cédula de Ciudadanía" },
        "1152002002": { nombre: "María Gómez", tipoDoc: "Cédula de Ciudadanía" },
        "987654321": { nombre: "Carlos Rodríguez", tipoDoc: "Cédula de Extranjería" }
    };

    // Evento para buscar cliente al hacer clic en el botón
    $('#btnBuscarCliente').click(function(e) {
        e.preventDefault();
        buscarCliente();
    });

    // Evento para buscar cliente al presionar Enter en el campo de cédula
    $('#txtCedulaCliente').keypress(function(e) {
        if(e.which == 13) { // 13 es el código de la tecla Enter
            e.preventDefault();
            buscarCliente();
        }
    });

    function buscarCliente() {
        let cedula = $('#txtCedulaCliente').val().trim();

        if(cedula === "") {
            alert("Por favor ingrese una cédula.");
            return;
        }

        // Buscar en la "base de datos" simulada
        let cliente = clientesDB[cedula];

        if(cliente) {
            // Cliente encontrado, llenar los campos
            $('#txtNombreCliente').val(cliente.nombre);
            $('#txtTipoDocumento').val(cliente.tipoDoc);

            // Efecto visual de encontrado
            $('#txtCedulaCliente').css('border-color', '#28a745');
        } else {
            // Cliente no encontrado
            $('#txtNombreCliente').val("Cliente no registrado");
            $('#txtTipoDocumento').val("-");

            // Efecto visual de error/no encontrado
            $('#txtCedulaCliente').css('border-color', '#dc3545');
        }
    }

    // Restablecer el borde cuando el usuario empiece a escribir de nuevo
    $('#txtCedulaCliente').on('input', function() {
        $(this).css('border-color', '#ced4da');
    });
});