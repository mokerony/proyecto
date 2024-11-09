const recuperaDatos = () => {
    const usuarioInput = document.getElementById('username').value; 
    
    if (!usuarioInput) {
        alert("Por favor, ingresa tu usuario.");
        return; 
    }

    const soloLetras = /^[A-Za-z0-9\s]+$/; 
    
    if (!soloLetras.test(usuarioInput)) {
        alert("El usuario solo debe contener letras y números sin acentos.");
        return; 
    }

   
    let datosUsuario = {
        usuario: usuarioInput
    };
    
    localStorage.setItem("ingreso", JSON.stringify(datosUsuario));
    window.location.href = "../html/principal-e.html"; 
};

document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); 
    recuperaDatos();
});
