
//Variables para declarar que div va a ser visual y cual no
let zoneOfWork;
let element= document.getElementById("passwords");
element.style.display = "none";
element= document.getElementById("newPassword");
element.style.display = "none";
element=document.getElementById("description");
element.style.display = "none";
element=document.getElementById("contact");
element.style.display="none";

//función del botón comenzar
function start (){
    //Desaparece la pantalla de bienvenida y llama a la pantalla del formulario
    zoneOfWork=document.getElementById('passwords');
    zoneOfWork.style.display = "block";
    element=document.getElementById("welcome");
    element.style.display = "none";
    element=document.getElementById("description");
    element.style.display = "none";
    element=document.getElementById("contact");
    element.style.display="none";
    }
document.getElementById("start").addEventListener("click", start);

//verifica que el usuario ingrese la información necesaria, manda llamar al método encode cambia de pantalla e imprime un parrafo con la contraseña encriptada
function cipherButton (){
    //Variables para guardar los valores ingresados en los inputs
    let offset = parseInt(document.getElementById("offset").value);
    const password= document.getElementById("originalPasword").value;
    //Le da un tamaño fijo a la variable passwordChiper, el tamaño depende de el número de carácteres de pasword
      let passwordCipher = new String();
      passwordCipher.length = password.length;
      //Si el offset o la contraseña estan vacios
      if (password == "") {
        document.getElementById("errorMessage").innerHTML="Ingresa una contraseña";
      //Si el offset no es un número
     }else if (offset==""){
         document.getElementById("errorMessage").innerHTML="Ingrese un número de saltos";
      //si el Offset es un número negativo
      }else if (offset<0){
        document.getElementById("errorMessage").innerHTML="Ingrese un número positivo";
      //Si pasa los filtros, se manda llamar al método cipher, se activa el siguiente div y se imprime un párrafo*/
      }else{  
        //llama al método encode
        cipher.encode(offset, password);
      //llama a la función resultados
       resultsEncode();
  }
}
  document.getElementById("cipher").addEventListener("click", cipherButton);
//Función para verificar

//Función para mostrar los resultados de la función encriptar, activa el boton de guardar contraseña para agragarla a la tabla
function resultsEncode (){
  zoneOfWork=document.getElementById("save");
  zoneOfWork.style.display="inline";
   zoneOfWork=document.getElementById("table");
  zoneOfWork.style.display="table";
  //Llama a la función para activar el siguiente div 
    lastWindow();
  //llama a la función de crear párrafo y mostrarlo en la última pantalla
    createParagraphEncode();
   }

   //Función para crear el parrafo resultado de encriptar la contraseña
   function createParagraphEncode(passwordCipher, offset){
    //Variables para obtener los valores de los inputs
    const sorter=document.getElementById("sorter").value;
    offset = parseInt(document.getElementById("offset").value);
    const password= document.getElementById("originalPasword").value;
    passwordCipher=cipher.encode(offset, password);
    //Crea el párrafo y lo imprime ewn el parrafo de id="results"
    const paragraph= document.getElementById("results");
    const paragraphEn=("Tu constraseña " + sorter + " es "+ passwordCipher + " con un número de cifrado "+offset);
    paragraph.innerHTML=(paragraphEn);
    return paragraphEn;
  }

   // Función para activar la última pantalla
  function lastWindow(){
    element = document.getElementById("passwords");
    element.style.display = "none";
    zoneOfWork=document.getElementById("newPassword");
    zoneOfWork.style.display = "block";
    }

  //función para ir agregando las contraseñas encriptadas a la tabla
  function save(){
    //Guarda el return de createParagraphEncode en la constante text
    const text= createParagraphEncode();
    //Crea una fila en la tabla y agrega el texto dentro
    const savePasswords  = document.createElement('tr');
    const paragraph=document.createTextNode(text);
    savePasswords.appendChild(paragraph);
    document.getElementById("savedPasswords").appendChild(savePasswords);
  }
  document.getElementById("save").addEventListener("click", save);

    //Función para limpiar la tabla y volver a la pantalla principal
 function cleanTable(){
  location.reload();
}
document.getElementById("cleanTable").addEventListener("click", cleanTable);

//Función para borrar la última contraseña guardada
function cleanLast(){
 const lastRow = document.getElementById ("table");
 lastRow.removeChild(lastRow.lastChild);
 }

document.getElementById("cleanLast").addEventListener("click",cleanLast);

//limpiar todos los campos
function clean (){
    document.getElementById("originalPasword").value = "";
    document.getElementById("offset").value = "";
    document.getElementById("sorter").value = "";
    document.getElementById("errorMessage").innerHTML = "";
  }

function decipherButton (){
    //Variables para guardar los valores ingresados en los inputs
    const offset = parseInt(document.getElementById("offset").value);
    const password= document.getElementById("originalPasword").value;
      let passwordCipher = new String();
      passwordCipher.length = password.length; 
      if (password == "") {
        document.getElementById("errorMessage").innerHTML="Ingresa una contraseña";
      //Si el offset no es un número
     }else if (offset==""){
         document.getElementById("errorMessage").innerHTML="Ingrese un número de saltos";
      }else if (offset<0){
        document.getElementById("errorMessage").innerHTML="Ingrese un número positivo";
      }else{  
        cipher.decode(offset, password);
       resultsDecode();
  }
}
document.getElementById("decipher").addEventListener("click", decipherButton);

function resultsDecode (){
    lastWindow();
    //Esconde el botón de guardar
    element=document.getElementById("table");
    element.style.display= "none";
    element= document.getElementById("save");
    element.style.display="none";
    createParagraphDecode ();
   }

   function createParagraphDecode(passwordCipher, offset){
    const sorter=document.getElementById("sorter").value;
    offset = parseInt(document.getElementById("offset").value);
    const password= document.getElementById("originalPasword").value;
    passwordCipher=cipher.decode(offset, password);
    const paragraph= document.getElementById("results");
    const paragraphDe=("Tu constraseña " + sorter + " es "+ passwordCipher);
    paragraph.innerHTML=(paragraphDe);
    return paragraphDe;
  }

  //Función para ir a la primera pantalla
function restart(){
    zoneOfWork=document.getElementById("welcome");
    zoneOfWork.style.display = "block";
    element = document.getElementById("newPassword");
    element.style.display = "none";
    element=document.getElementById("description");
    element.style.display = "none";
    element=document.getElementById("contact");
    element.style.display="none";
    clean ();
  }  
  document.getElementById("welcomePage").addEventListener("click", restart);

  //Función para encriptar o desecriptar otra contraseña
function newTry(){
    zoneOfWork=document.getElementById("passwords");
    zoneOfWork.style.display = "block";
    element = document.getElementById("newPassword");
    element.style.display = "none";
    document.getElementById("originalPasword").value = "";
    document.getElementById("offset").value = "";
    clean ();
  } 
  document.getElementById("newTry").addEventListener("click", newTry);
  
function description(){
  zoneOfWork=document.getElementById("description");
  zoneOfWork.style.display = "block";
  element= document.getElementById("passwords");
  element.style.display = "none";
  element= document.getElementById("newPassword");
  element.style.display = "none";
  element=document.getElementById("welcome");
  element.style.display= "none";
  element=document.getElementById("contact");
  element.style.display= "none";
}
document.getElementById("about").addEventListener("click", description);

function contact(){
  zoneOfWork=document.getElementById("contact");
  zoneOfWork.style.display = "block";
  element= document.getElementById("passwords");
  element.style.display = "none";
  element= document.getElementById("newPassword");
  element.style.display = "none";
  element=document.getElementById("welcome");
  element.style.display= "none";
  element=document.getElementById("description");
  element.style.display= "none";
}
document.getElementById("email").addEventListener("click", contact);