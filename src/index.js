window.onload= firstWindow();

function firstWindow () {
let element= document.getElementById("Passwords");
element.style.display = "none";
element= document.getElementById("NewPassword");
element.style.display = "none";
}

function start (){
    //bloque la pantalla he imprime Paswords
    let element=document.getElementById("Welcome");
    element.style.display = 'none';
    let zoneOfWork=document.getElementById('Passwords');
    zoneOfWork.style.display = "block";
}
document.getElementById("start").addEventListener("click",start);

function encriptar (){
    //Variables para guardar los valores ingresados en los inputs
    let offset = parseInt(document.getElementById("offset").value);
    let password= document.getElementById("originalPasword").value;
    password= password.toUpperCase();
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
        cipher.encode(offset, password);
       resultsEncode();
  }
}
document.getElementById("cipher").addEventListener("click", encriptar);

function resultsEncode (){
    lastWindow();
    createParagraph();
    function createParagraph(passwordCipher, offset){
     offset = parseInt(document.getElementById("offset").value);
      let password= document.getElementById("originalPasword").value;
      password= password.toUpperCase();
       passwordCipher=cipher.encode(offset, password);
      const paragraph= document.getElementById("results");
      paragraph.innerHTML=("Tu constraseña es "+ passwordCipher + " con un número de cifrado "+offset);
    }
   }

  /* function resultsDecode(){
    lastWindow();
    createParagraph();
    function createParagraph(passwordCipher, offset){
     offset = parseInt(document.getElementById("offset").value);
      let password= document.getElementById("originalPasword").value;
      password= password.toUpperCase();
       passwordCipher=cipher.decode(offset, password);
      const paragraph= document.getElementById("results");
      paragraph.innerHTML=("Tu constraseña es "+ passwordCipher + " con un número de cifrado "+offset);
    }
   }

  function desencriptar (){
    //Variables para guardar los valores ingresados en los inputs
    let offset = parseInt(document.getElementById("offset").value);
    let password= document.getElementById("originalPasword").value;
    password= password.toUpperCase();
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

//limpiar todos los campos
/*function limpiar (){
    document.getElementById("originalPasword").value = "";
    document.getElementById("offset").value = "";
    document.getElementById("sorter").value = "";
    document.getElementById("errorMessage").innerHTML = "";
  }
*/
function desencriptar (){
    //Variables para guardar los valores ingresados en los inputs
    let offset = parseInt(document.getElementById("offset").value);
    let password= document.getElementById("originalPasword").value;
    password= password.toUpperCase();
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
document.getElementById("cipher").addEventListener("click", desencriptar);

function resultsDecode (){
    lastWindow();
    createParagraph();
    function createParagraph(passwordCipher, offset){
     offset = parseInt(document.getElementById("offset").value);
      let password= document.getElementById("originalPasword").value;
      password= password.toUpperCase();
       passwordCipher=cipher.decode(offset, password);
      const paragraph= document.getElementById("results");
      paragraph.innerHTML=("Tu constraseña es "+ passwordCipher + " con un número de cifrado "+offset);
    }
   }

  //ir a la primera pantalla
function restart(){
    let zoneOfWork=document.getElementById("Welcome");
      zoneOfWork.style.display = "block";
      let element = document.getElementById("NewPassword");
      element.style.display = 'none';
  }  
  document.getElementById("restart").addEventListener("click", restart);

function newTry(){
    let zoneOfWork=document.getElementById("Passwords");
      zoneOfWork.style.display = "block";
     let  element = document.getElementById("NewPassword");
      element.style.display = 'none';
      document.getElementById("originalPasword").value = "";
    document.getElementById("offset").value = "";
  } 
  document.getElementById("newTry").addEventListener("click", newTry);

  function lastWindow(){
    let element = document.getElementById("Passwords");
    element.style.display = 'none';
    let zoneOfWork=document.getElementById("NewPassword");
    zoneOfWork.style.display = "block";
    }
    