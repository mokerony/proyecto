async function listarEmpleados() {
    try {
        const response = await fetch("http://127.0.0.1:8000/admin/empleado");
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        const container = document.getElementById("empleados-container");
        container.innerHTML = "";  

        data.empleados.forEach(empleado => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${empleado.id_empleado}</td>
                <td>${empleado.nombre}</td>
                <td>${empleado.apellido}</td>
                <td>${empleado.usuario}</td>
                <td>${empleado.sede}</td> 
            `;
            container.appendChild(row);
        });
    } catch (error) {
        console.error("Error al listar empleados:", error);
    }
}


listarEmpleados();
