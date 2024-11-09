document.getElementById('actualizarEmpleadoForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const idEmpleado = document.getElementById('id_empleado').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const idAdministrador = document.getElementById('id_administrador').value;
    const sede = document.getElementById('sede').value; // Captura el valor de la sede

    try {
        const response = await fetch(`http://127.0.0.1:8000/admin/empleado/${idEmpleado}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_empleado: idEmpleado,
                nombre: nombre,
                apellido: apellido,
                usuario: usuario,
                contraseña: contraseña,
                id_administrador: idAdministrador,
                sede: sede // Agrega la sede al cuerpo de la solicitud
            })
        });

        const result = await response.json();
        document.getElementById('mensaje').textContent = result.informacion;

    } catch (error) {
        document.getElementById('mensaje').textContent = "Error al actualizar empleado: " + error.message;
    }
});
