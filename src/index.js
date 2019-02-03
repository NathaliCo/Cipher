
//Variables para declarar que div va a ser visual y cual no
let zoneOfWork;
let element= document.getElementById("Passwords");
element.style.display = "none";
element= document.getElementById("NewPassword");
element.style.display = "none";

//función del botón comenzar
function start (){
    //Desaparece la pantalla de bienvenida y llama a la pantalla del formulario
    element=document.getElementById("Welcome");
    element.style.display = 'none';
    zoneOfWork=document.getElementById('Passwords');
    zoneOfWork.style.display = "block";
}
document.getElementById("start").addEventListener("click", start);

/*
function handleKEyPress(e){
  var startButton=document.getElementById("Welcome");
  if (e.keyCode===13){
    start();
    return false;
  }
}*/
//verifica que el usuario ingrese la información necesaria, manda llamar al método encode cambia de pantalla e imprime un parrafo con la contraseña encriptada
function encriptar (){
    //Variables para guardar los valores ingresados en los inputs
    const offset = parseInt(document.getElementById("offset").value);
    const password= document.getElementById("originalPasword").value;
    //Le da un tamaño fijo a la variable passwordChiper, el tamaño depende de el número de carácteres de pasword
      let passwordCipher = new String();
      passwordCipher.length = password.length;
      //Si el offset o la contraseña estan vacios
      if (password == ""|| offset =="") {
        document.getElementById("errorMessage").innerHTML="Llena los dos campos";
      //Si el offset no es un número
      }else if (isNaN(offset)){
         document.getElementById("errorMessage").innerHTML="Ingrese un número de pasos";
      //si el Offset es un número negativo
      }else if (offset<0){
        document.getElementById("errorMessage").innerHTML="Ingresa un número positivo";
      //Si pasa los filtros, se manda llamar al método cipher, se activa el siguiente div y se imprime un párrafo
      }else{  
        cipher.encode(offset, password);
       resultsEncode();
  }
}
  document.getElementById("cipher").addEventListener("click", encriptar);
 
//Función para mostrar los resultados de la función encriptar, activa el boton de guardar contraseña para agragarla a la tabla
function resultsEncode (){
  zoneOfWork=document.getElementById("save");
  zoneOfWork.style.display="inline";
  //Llama a la función para activar el siguiente div 
    lastWindow();
  //llama a la función de crear párrafo y mostrarlo en la última pantalla
    createParagraphEncode();
   }

   // Función para activar la última pantalla
  function lastWindow(){
    element = document.getElementById("Passwords");
    element.style.display = 'none';
    zoneOfWork=document.getElementById("NewPassword");
    zoneOfWork.style.display = "block";
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

  //función para ir agragando las contraseñas encriptadas a la tabla
  function save(){
    //Guarda el return de createParagraphEncode en la constante text
    const text= createParagraphEncode();
    //Crea una fila en la tabla y agrega el texto dentro
    const savePasswords  = document.createElement('tr');
    const paragraph=document.createTextNode(text);
    savePasswords.appendChild(paragraph);
    document.getElementById("table").appendChild(savePasswords);
  }
  document.getElementById("save").addEventListener("click", save);

//limpiar todos los campos
function limpiar (){
    document.getElementById("originalPasword").value = "";
    document.getElementById("offset").value = "";
    document.getElementById("sorter").value = "";
    document.getElementById("errorMessage").innerHTML = "";
  }

function desencriptar (){
    //Variables para guardar los valores ingresados en los inputs
    const offset = parseInt(document.getElementById("offset").value);
    const password= document.getElementById("originalPasword").value;
      let passwordCipher = new String();
      passwordCipher.length = password.length; 
      if (password == ""|| offset =="") {
        document.getElementById("errorMessage").innerHTML="Llena los dos campos";
      //Si el offset no es un número
      }else if (isNaN(offset)){
         document.getElementById("errorMessage").innerHTML="Ingrese un número de pasos";
      //si el Offset es un número negativo
      }else if (offset<0){
        document.getElementById("errorMessage").innerHTML="Ingresa un número positivo";
      }else{  
        cipher.decode(offset, password);
       resultsDecode();
  }
}
document.getElementById("decipher").addEventListener("click", desencriptar);

function resultsDecode (){
    lastWindow();
    //Esconde el botón de guardar
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
    zoneOfWork=document.getElementById("Welcome");
    zoneOfWork.style.display = "block";
    element = document.getElementById("NewPassword");
    element.style.display = 'none';
    limpiar ();
  }  
  document.getElementById("welcomePage").addEventListener("click", restart);

  //Función para encriptar o desecriptar otra contraseña
function newTry(){
    zoneOfWork=document.getElementById("Passwords");
    zoneOfWork.style.display = "block";
    element = document.getElementById("NewPassword");
    element.style.display = 'none';
    document.getElementById("originalPasword").value = "";
    document.getElementById("offset").value = "";
    limpiar ();
  } 
  document.getElementById("newTry").addEventListener("click", newTry);
  
  //Función para limpiar la tabla y volver a la pantalla principal
 function cleanTable(){
   location.reload();
 }
 document.getElementById("cleanAll").addEventListener("click", cleanTable);

 //Función para borrar la última contraseña guardada
 function cleanLast(){
  const lastRow = document.getElementById ("table");
  lastRow.removeChild(lastRow.lastChild);
  }
 
 document.getElementById("cleanLast").addEventListener("click",cleanLast);