document.addEventListener('DOMContentLoaded', function () {
    cargarMensajes();
});

function cargarMensajes() {
    const mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
    const mensajeContainer = document.getElementById('mensajeContainer');
    
    mensajeContainer.innerHTML = ''; // Limpiar contenido previo

    if (mensajes.length === 0) {
        mensajeContainer.innerHTML = '<tr><td colspan="2" class="text-danger">No hay mensajes.</td></tr>';
        return;
    }

    mensajes.forEach((mensaje) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${mensaje.nombre}</td>
            <td>${mensaje.mensaje}</td>
        `;
        mensajeContainer.appendChild(fila);
    });
}

// Función para limpiar los mensajes del localStorage y la tabla
document.getElementById('limpiarMensajes').addEventListener('click', function () {
    localStorage.removeItem('mensajes');
    cargarMensajes();
    alert('Mensajes eliminados.');
});
