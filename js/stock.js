document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('loggedInUser'); 
    console.log('Nombre de usuario recuperado:', username); 
    const welcomeMessage = document.getElementById('username'); 
    welcomeMessage.textContent = username ? `Bienvenido, ${username}` : 'Bienvenido, Invitado'; 
});

window.mostrarProductos = () => {
    const res = document.querySelector('#res');
    res.innerHTML = '';
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

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
