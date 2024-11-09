document.getElementById("form-agregar-empleado").addEventListener("submit", agregarEmpleado);

async function agregarEmpleado(event) {
    event.preventDefault();
    const empleado = {
        usuario: document.getElementById("usuario").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        contraseña: document.getElementById("contraseña").value,
        id_administrador: document.getElementById("id_administrador").value,
        id_sede: document.getElementById("sede").value,
    };

    console.log("Datos del empleado a enviar:", empleado);

    try {
        const response = await fetch("http://127.0.0.1:8000/admin/empleado", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(empleado)
        });

        console.log("Respuesta del servidor:", response);

        if (response.ok) {
            limpiarCamposFormulario("form-agregar-empleado");
            alert("Empleado agregado correctamente.");
        } else {
            const errorText = await response.text();
            console.error("Error al agregar empleado:", errorText);
            alert("Error al agregar empleado: " + errorText);  
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("Error en la solicitud: " + error.message);
    }
}

function limpiarCamposFormulario(formId) {
    const form = document.getElementById(formId);
    form.reset();
}
