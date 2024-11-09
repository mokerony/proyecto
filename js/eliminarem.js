// Función para listar empleados
async function listarEmpleados() {
    try {
        const response = await fetch("http://127.0.0.1:8000/admin/empleado");
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        const container = document.getElementById("empleados-container");
        container.innerHTML = "";  // Limpiar el contenedor antes de agregar nuevos datos

        data.empleados.forEach(empleado => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${empleado.id_empleado}</td>
                <td>${empleado.nombre}</td>
                <td>${empleado.apellido}</td>
                <td>${empleado.usuario}</td>
                <td>${empleado.sede}</td> <!-- Nueva columna para Sede -->
                <td>
                    <button class="btn btn-danger btn-sm" onclick="eliminarEmpleado('${empleado.id_empleado}')">Eliminar</button>
                </td>
            `;
            container.appendChild(row);
        });
    } catch (error) {
        console.error("Error al listar empleados:", error);
    }
}


async function agregarEmpleado(event) {
    event.preventDefault();
    const empleado = {
        id_empleado: document.getElementById("id_empleado").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        usuario: document.getElementById("usuario").value,
        contraseña: document.getElementById("contraseña").value,
        id_administrador: document.getElementById("id_administrador").value,
        sede: document.getElementById("sede").value 
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/admin/empleado", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(empleado)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

     
        document.getElementById("form-agregar-empleado").reset();

        
        listarEmpleados();
        alert("Empleado agregado correctamente.");
    } catch (error) {
        console.error("Error al agregar empleado:", error);
        alert("Hubo un error al agregar el empleado.");
    }
}

// Función para eliminar un empleado
async function eliminarEmpleado(id_empleado) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/admin/empleado/${id_empleado}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

      
        listarEmpleados();
        alert("Empleado eliminado correctamente.");
    } catch (error) {
        console.error("Error al eliminar empleado:", error);
        alert("Hubo un error al eliminar el empleado.");
    }
}


listarEmpleados();


document.getElementById("form-agregar-empleado").addEventListener("submit", agregarEmpleado);
