//Declaración de mi zona de trabajo para activarla cuando la necesite
let zoneOfWork;
//Desactivar todos los elementos que no corresponden a la primera pantalla
element= document.getElementById("Passwords");
element.style.display = 'none';
element = document.getElementById("NewPassword");
element.style.display = 'none';
//Bloquea la pantalla de bienvenida e imprime el formulario 
function start(){
    //bloquea los botones que no son necesarios
    element= document.getElementById("download");
    element.style.display="none";
    element= document.getElementById("sendEmail");
    element.style.display="none";
    //bloque la pantalla he imprime Paswords
    element=document.getElementById("Welcome");
    element.style.display = 'none';
  zoneOfWork=document.getElementById('Passwords');
    zoneOfWork.style.display = "block";
}
  //Función para cifrar la contraseña y devolver el resultado
  function encode(){
    //Variables para guardar los valores ingresados en los inputs
    let steps = parseInt(document.getElementById("ofset").value);
    let password= document.getElementById("originalPasword").value;
      password= password.toUpperCase();
    let code;
    let passwordCipher = new String();
    passwordCipher.length = password.length;
  
    function encriptar(password, steps){
      //condicionales
      //Si alguno delos campos está vacío
      if (password == ""|| steps =="") {
        document.getElementById("errorMessage").innerHTML="Llena los dos campos";
      //Si el ofset no es un número
      }else if (isNaN(steps)){
        document.getElementById("errorMessage").innerHTML="Ingrese un número de pasos";
      //si el Ofset es un número negativo
      }else if (steps<0){
        document.getElementById("errorMessage").innerHTML="Ingresa un número positivo";
      }else{
      // Si pasa todas las condiciones, se itera letra por letra del mensaje 
          for (let i=0; i<password.length; i++){
          code=password.charCodeAt(i);
      //Si en el input de mensaje se ingresa cualquier cosa distinta a una letra, se imprime tal cual, sin ofset
        if(code < 'A'.charCodeAt(0) || code > 'Z'.charCodeAt(0))
        {
           passwordCipher= passwordCipher+password.charAt(i);
           console.log (passwordCipher);
         }else{
       // Si es una letra se usa la fórmula para obtener el cifrado y cada una de las letras se va sumando a la anterior para ir guardando los valores
           console.log (code);
           let cipher=parseInt((code-65+steps)%26+65);
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
  }
  //llamada a las funciones para que se ejecuten
  encriptar(password, steps);
  createParagraph(passwordCipher);
  }
  //Función que crea un parrafo para mostrar los errores, en caso de que el usuario no inserte los valores esperados en los inputs
  function createParagraph(passwordCipher){
    const paragraph= document.getElementById("results");
    paragraph.innerHTML=(passwordCipher);
  }
  //Función del botón decifrar
  function decode(){

     //Variables para guardar los valores ingresados en los inputs
     let steps = parseInt(document.getElementById("ofset").value);
     let password= document.getElementById("originalPasword").value;
       password= password.toUpperCase();
     let code;
     let passwordCipher = new String();
     passwordCipher.length = password.length;
   
     function encriptar(password, steps){
       //condicionales
       //Si alguno delos campos está vacío
       if (password == ""|| steps =="") {
         document.getElementById("errorMessage").innerHTML="Llena los dos campos";
       //Si el ofset no es un número
       }else if (isNaN(steps)){
         document.getElementById("errorMessage").innerHTML="Ingrese un número de pasos";
       //si el Ofset es un número negativo
       }else if (steps<0){
         document.getElementById("errorMessage").innerHTML="Ingresa un número positivo";
       }else{
       // Si pasa todas las condiciones, se itera letra por letra del mensaje 
           for (let i=0; i<password.length; i++){
           code=password.charCodeAt(i);
       //Si en el input de mensaje se ingresa cualquier cosa distinta a una letra, se imprime tal cual, sin ofset
         if(code < 'A'.charCodeAt(0) || code > 'Z'.charCodeAt(0))
         {
            passwordCipher= passwordCipher+password.charAt(i);
            console.log (passwordCipher);
          }else{
        // Si es una letra se usa la fórmula para obtener el cifrado y cada una de las letras se va sumando a la anterior para ir guardando los valores
            console.log (code);
            let cipher=parseInt((code-65-steps)%26+91);
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
   }
   //llamada a las funciones para que se ejecuten
   encriptar(password, steps);
   createParagraph(passwordCipher+ "<br>");
   }
   //Función que crea un parrafo para mostrar los errores, en caso de que el usuario no inserte los valores esperados en los inputs
   function createParagraph(passwordCipher){
     const paragraph= document.getElementById("results");
     paragraph.innerHTML=(passwordCipher);
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
    document.getElementById("ofset").value = "";
    limpiar();
  }
  //limpiar todos los campos
  function limpiar(){
    document.getElementById("originalPasword").value = "";
    document.getElementById("ofset").value = "";
    document.getElementById("errorMessage").innerHTML = "";
  }
  //activar los botones para guardar las contraseñas y desactivar los que no son necesarios
  function save(){
      element= document.getElementById("save");
      element.style.display="none";
      element= document.getElementById("restart");
      element.style.display="none";
      element= document.getElementById("newTry");
      element.style.display="none";
      zoneOfWork= document.getElementById("download");
      zoneOfWork.style.display="block";
      zoneOfWork= document.getElementById("sendEmail");
      zoneOfWork.style.display="block";
  }
  