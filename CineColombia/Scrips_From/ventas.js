// Ventas.js - Lógica específica para la pantalla de ventas
function initVentas() {
    // Simulación de una base de datos de clientes
    const clientesDB = {
        "1017001001": { nombre: "Juan Pérez", tipoDoc: "Cédula de Ciudadanía", fidelizado: true },
        "1152002002": { nombre: "María Gómez", tipoDoc: "Cédula de Ciudadanía", fidelizado: false },
        "987654321": { nombre: "Carlos Rodríguez", tipoDoc: "Cédula de Extranjería", fidelizado: true }
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

            // Mostrar el descuento en el HTML temporalmente
            if(cliente.fidelizado) {
                $('#lblDescuento').text("-$2.250");
                $('#lblTotal').text("$12.750"); 
            } else {
                $('#lblDescuento').text("$0");
                $('#lblTotal').text("$15.000");
            }

            // Efecto visual de encontrado
            $('#txtCedulaCliente').css('border-color', '#28a745');
        } else {
            // Cliente no encontrado
            $('#txtNombreCliente').val("Cliente no registrado");
            $('#txtTipoDocumento').val("-");

            // Setear descuento por defecto
            $('#lblDescuento').text("$0");
            $('#lblTotal').text("$15.000");

            // Efecto visual de error/no encontrado
            $('#txtCedulaCliente').css('border-color', '#dc3545');
        }
    }

    // Restablecer el borde cuando el usuario empiece a escribir de nuevo
    $('#txtCedulaCliente').on('input', function() {
        $(this).css('border-color', '#ced4da');
    });
}

// Inicializar si el script se carga estáticamente por error o tarde
if ($('#txtCedulaCliente').length > 0) {
    initVentas();
}