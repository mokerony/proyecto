document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;

    const nuevoMensaje = { nombre, mensaje };

    let mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
    mensajes.push(nuevoMensaje);

    localStorage.setItem('mensajes', JSON.stringify(mensajes));

    document.getElementById('employeeForm').reset();
    alert('Mensaje enviado al administrador.');
});
