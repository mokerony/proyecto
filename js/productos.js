document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('loggedInUser'); 
    console.log('Nombre de usuario recuperado:', username); 
    const welcomeMessage = document.getElementById('username'); 
    welcomeMessage.textContent = username ? `Bienvenido, ${username}` : 'Bienvenido, Invitado';

    traerDatos();
});

window.enviarFormulario = (event) => {
    event.preventDefault(); 

    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;

    const nuevoProducto = {
        code: codigo,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    
    productos.push(nuevoProducto);
    
    localStorage.setItem('productos', JSON.stringify(productos));
    
    alert('Producto añadido con éxito');
    traerDatos(); 
    limpiarFormulario(); 
};


const traerDatos = () => {
    let res = document.querySelector('#res');
    res.innerHTML = '';

    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    productos.forEach(item => {
        res.innerHTML += `
            <tr>
                <td>${item.code}</td>
                <td>${item.nombre}</td>
                <td>${item.precio}</td>
                <td>${item.cantidad}</td>
            </tr>
        `;
    });
};

const limpiarFormulario = () => {
    document.getElementById('codigo').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('cantidad').value = '';
};
