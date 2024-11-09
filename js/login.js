document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordField = document.getElementById('password');
    let users = [];

    const fetchUsers = async () => {
        try {
            console.log('Cargando los usuarios desde la tabla empleado...');
            const empleadoResponse = await fetch('http://127.0.0.1:8000/admin/empleado'); 
            const administradorResponse = await fetch('http://127.0.0.1:8000/admin/administrador'); 

            if (!empleadoResponse.ok || !administradorResponse.ok) {
                throw new Error(`Error en la respuesta del servidor: ${empleadoResponse.status} o ${administradorResponse.status}`);
            }

            const empleadosData = await empleadoResponse.json();
            const administradoresData = await administradorResponse.json();
            users = [...empleadosData.empleados, ...administradoresData.administradores]; 
            console.log('Usuarios cargados:', users);
        } catch (error) {
            console.error('Error al cargar los usuarios:', error);
        }
    };

    
    const limpiarDatos = () => {
        document.getElementById('username').value = "";  
        document.getElementById('password').value = "";  
    };

    fetchUsers();

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        const userFound = users.find(user => user.usuario === usernameInput && user.contraseña === passwordInput);

        if (userFound) {
            console.log("Usuario encontrado:", userFound);
            localStorage.setItem("ingreso", JSON.stringify({ nombre: userFound.usuario }));
            
            switch (userFound.rol) {
                case 'admin':
                    window.location.href = './html/admin.html';  
                    break;
                case 'empleado':
                    window.location.href = './html/principal-e.html';  
                    break;
                default:
                    alert('Rol no reconocido');
            }
        } else {
            alert('Usuario o contraseña incorrectos'); 
            console.log("No se encontró el usuario");
        }

        limpiarDatos(); 
    });

    showPasswordCheckbox.addEventListener('change', () => {
        passwordField.type = showPasswordCheckbox.checked ? 'text' : 'password';  
    });
});
