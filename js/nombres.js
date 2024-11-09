// Al cargar la página, obtén los datos del usuario desde localStorage
let datosUsuario = JSON.parse(localStorage.getItem("ingreso"));

// Verificar si existe el objeto y si tiene la propiedad "nombre"
if (datosUsuario && datosUsuario.nombre) {
    document.getElementById("resultado").innerHTML = "Bienvenido " + datosUsuario.nombre; // Mostrar el nombre del usuario
} else {
    document.getElementById("resultado").innerHTML = "Usuario no encontrado."; // Manejo de caso si no hay usuario
}
