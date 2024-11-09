document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://api.jsonbin.io/v3/b/67007672ad19ca34f8b2db1b', true);
    xhttp.setRequestHeader('X-Master-Key', '$2b$10$wD0F8ZaX9QIt0tbW1/iIVeY7I8VjpkRrPaCXIxKZNePHaHe9QTo7C'); 
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            console.log(this.responseText);
            if (this.status == 200) {
                let datos = JSON.parse(this.responseText);
                let res = document.querySelector('#res');
                res.innerHTML = ''; 

                
                for (let item of datos.record) { 
                    res.innerHTML += `
                        <tr>
                            <td>${item.nombre}</td>
                            <td>${item.pedido}</td>
                            <td>${item.total}</td>
                        </tr>
                    `;
                }
            } else {
                console.error('Error en la solicitud:', this.statusText);
            }
        }
    };
}
