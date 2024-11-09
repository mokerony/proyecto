

let infoForm={};// para la tabla.
let tabla = document.getElementById("tablacontacs"); // tabla
function agregarcontacto() {      
    const v_fullname= document.getElementById('txtnombre').value
    const v_phone = document.getElementById('txttelefono').value
    const v_email = document.getElementById('txtemail').value
                
            axios ({
                method: 'POST',
                url: 'http://127.0.0.1:8000/add_contact',
                data: {fullname:v_fullname,
                       phone:v_phone,
                       email:v_email                         
                    },
              }).then(function (response) {
                alert("Contacto agregado ")
                window.location.href = './index.html';
              }).catch(err => console.log('Error: ', err))
             
        }

function consultar_total() {
    /////////////////////// Cantidad /////////////////////////////////
    axios ({
        method: 'GET',
        url: 'http://127.0.0.1:8000/getcount',
        
      }).then(function (response) {
        //console.log(response.data[0].total)
        document.getElementById('num_contactos').innerHTML=response.data[0].total            
      }).catch(err => console.log('Error: ', err))
     ////////////////////////////////////////////////////////////////////////


     //////////////////////// CONSULTA TODOS ///////////////////////////////
     axios ({
        method: 'GET',
        url: 'http://127.0.0.1:8000/getAll',
        
      }).then(function (response) {
       
        //console.log(response)
            for (let i = 0; i < response.data.length; i++) {
                              
                let nuevaFila = tabla.insertRow(tabla.lenght);
    
                cell0 = nuevaFila.insertCell(0);
                cell0.innerHTML = response.data[i].id; /// primer elemento
    
                cell1 = nuevaFila.insertCell(1);
                cell1.innerHTML = response.data[i].fullname; /// segundo elemento
    
                cell2 = nuevaFila.insertCell(2);
                cell2.innerHTML = response.data[i].phone;  /// tercer elemento
    
                cell3 = nuevaFila.insertCell(2);
                cell3.innerHTML = response.data[i].email;  /// tercer elemento
    
                cell4  = nuevaFila.insertCell(4);
                cell4.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>
                    <a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;
                    
            } 
              
      }).catch(err => console.log('Error: ', err))


     /////////////////////////////////////////////////////////////////////
    
}
       
  
