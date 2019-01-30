//Declaración de mi zona de trabajo para activarla cuando la necesite
let zoneOfWork;
//Desactivar todos los elementos que no corresponden a la primera pantalla
element= document.getElementById("Passwords");
element.style.display = "none";
element = document.getElementById("NewPassword");
element.style.display = "none";
//Bloquea la pantalla de bienvenida e imprime el formulario 
function start(){
    //bloque la pantalla he imprime Paswords
    element=document.getElementById("Welcome");
    element.style.display = 'none';
    zoneOfWork=document.getElementById('Passwords');
    zoneOfWork.style.display = "block";
}
function encriptar(){
   //Variables para guardar los valores ingresados en los inputs
   let offset = parseInt(document.getElementById("offset").value);
   let password= document.getElementById("originalPasword").value;
   password= password.toUpperCase();
   cipher.encode(offset, password);
 
}
window.cipher = {};

  //Función para cifrar la contraseña y devolver el resultado
  cipher.encode= function(offset, password){
      let sorter = document.getElementById("sorter").value;
      let code;
      let passwordCipher = new String();
      passwordCipher.length = password.length;
      //condicionales
      //Si alguno delos campos está vacío
      if (password == ""|| offset =="") {
        document.getElementById("errorMessage").innerHTML="Llena los dos campos";
      //Si el offset no es un número
      }else if (isNaN(offset)){
        document.getElementById("errorMessage").innerHTML="Ingrese un número de pasos";
      //si el Offset es un número negativo
      }else if (offset<0){
        document.getElementById("errorMessage").innerHTML="Ingresa un número positivo";
      }else{
      // Si pasa todas las condiciones, se itera letra por letra del mensaje 
          for (let i=0; i<password.length; i++){
          code=password.charCodeAt(i);
      //Si en el input de mensaje se ingresa cualquier cosa distinta a una letra, se imprime tal cual, sin offset
        if(code < 'A'.charCodeAt(0) || code > 'Z'.charCodeAt(0))
        {
           passwordCipher= passwordCipher+password.charAt(i);
           console.log (passwordCipher);
         }else{
       // Si es una letra se usa la fórmula para obtener el cifrado y cada una de las letras se va sumando a la anterior para ir guardando los valores
           console.log (code);
           let cipher=parseInt((code-65+offset)%26+65);
           console.log (cipher);
           passwordCipher= passwordCipher + String.fromCharCode(cipher);
           console.log (passwordCipher);
    }
    //Bloquear pantalla actual y activar la final donde se muestra el mensaje encriptado
  }element = document.getElementById("Passwords");
  element.style.display = 'none';
  zoneOfWork=document.getElementById("NewPassword");
  zoneOfWork.style.display = "block";
  
  }
  //Función que crea un parrafo para mostrar los errores, en caso de que el usuario no inserte los valores esperados en los inputs
  
  //llamada a las funciones para que se ejecuten
  createParagraph(sorter,passwordCipher,offset);
  return passwordCipher;
  }

  function desencriptar(){
    //Variables para guardar los valores ingresados en los inputs
    let offset = parseInt(document.getElementById("offset").value);
    let password= document.getElementById("originalPasword").value;
    password= password.toUpperCase();
    cipher.decode(offset, password);
  
 }
  //Función del botón decifrar
  cipher.decode=function(offset, password){
    let sorter = document.getElementById("sorter").value;
    let code;
    let passwordCipher = new String();
    passwordCipher.length = password.length;
    //condicionales
    //Si alguno delos campos está vacío
    if (password == ""|| offset =="") {
      document.getElementById("errorMessage").innerHTML="Llena los dos campos";
    //Si el offset no es un número
    }else if (isNaN(offset)){
      document.getElementById("errorMessage").innerHTML="Ingrese un número de pasos";
    //si el Offset es un número negativo
    }else if (offset<0){
      document.getElementById("errorMessage").innerHTML="Ingresa un número positivo";
    }else{
    // Si pasa todas las condiciones, se itera letra por letra del mensaje 
        for (let i=0; i<password.length; i++){
        code=password.charCodeAt(i);
    //Si en el input de mensaje se ingresa cualquier cosa distinta a una letra, se imprime tal cual, sin offset
      if(code < 'A'.charCodeAt(0) || code > 'Z'.charCodeAt(0))
      {
         passwordCipher= passwordCipher+password.charAt(i);
         console.log (passwordCipher);
       }else{
     // Si es una letra se usa la fórmula para obtener el cifrado y cada una de las letras se va sumando a la anterior para ir guardando los valores
         console.log (code);
         let cipher=parseInt((code-13-offset)%26+65);
         console.log (cipher);
         passwordCipher= passwordCipher + String.fromCharCode(cipher);
         console.log (passwordCipher);
  }
  //Bloquear pantalla actual y activar la final donde se muestra el mensaje encriptado
}element = document.getElementById("Passwords");
element.style.display = 'none';
zoneOfWork=document.getElementById("NewPassword");
zoneOfWork.style.display = "block";

}
//Función que crea un parrafo para mostrar los errores, en caso de que el usuario no inserte los valores esperados en los inputs

//llamada a las funciones para que se ejecuten
createParagraph(sorter,passwordCipher,offset);
return passwordCipher;
}

  function createParagraph(sorter,passwordCipher,offset){
    const paragraph= document.getElementById("results");
    paragraph.innerHTML=("Tu constraseña " + sorter + " es "+ passwordCipher + " con un número de cifrado "+offset);
  }
  
   //ir a la primera pantalla
   function restart(){
    zoneOfWork=document.getElementById("Welcome");
      zoneOfWork.style.display = "block";
      element = document.getElementById("NewPassword");
      element.style.display = 'none';
      limpiar();
  }
  //ir a la sengunda pantalla, la de los formularios
  function newTry(){
    zoneOfWork=document.getElementById("Passwords");
      zoneOfWork.style.display = "block";
      element = document.getElementById("NewPassword");
      element.style.display = 'none';
      document.getElementById("originalPasword").value = "";
    document.getElementById("offset").value = "";
    limpiar();
  }
  //limpiar todos los campos
  function limpiar(){
    document.getElementById("originalPasword").value = "";
    document.getElementById("offset").value = "";
    document.getElementById("sorter").value = "";
    document.getElementById("errorMessage").innerHTML = "";
  }

  function save(){
    var row = document.createElement("tr");
    row.innerHTML(paragraph);
     
  }
  