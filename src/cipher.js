window.cipher = {
  start: function(){
    //bloque la pantalla he imprime Paswords
    let element=document.getElementById("Welcome");
    element.style.display = 'none';
    let zoneOfWork=document.getElementById('Passwords');
    zoneOfWork.style.display = "block";
},

  encriptar:function (){
    //Variables para guardar los valores ingresados en los inputs
    let offset = parseInt(document.getElementById("offset").value);
    let password= document.getElementById("originalPasword").value;
    password= password.toUpperCase();
      let passwordCipher = new String();
      passwordCipher.length = password.length;
      if (password == ""|| offset =="") {
        //document.getElementById("errorMessage").innerHTML="Llena los dos campos";
      //Si el offset no es un número
      }else if (isNaN(offset)){
        //document.getElementById("errorMessage").innerHTML="Ingrese un número de pasos";
      //si el Offset es un número negativo
      }else if (offset<0){
        //document.getElementById("errorMessage").innerHTML="Ingresa un número positivo";
      }else{  
        cipher.encode(offset, password);
        cipher.results();
  }
},
 results: function(){
  cipher.lastWindow();
  createParagraph();
  function createParagraph(passwordCipher, offset){
   offset = parseInt(document.getElementById("offset").value);
    let password= document.getElementById("originalPasword").value;
    password= password.toUpperCase();
     passwordCipher=cipher.encode(offset, password);
    const paragraph= document.getElementById("results");
    paragraph.innerHTML=("Tu constraseña es "+ passwordCipher + " con un número de cifrado "+offset);
  }
 },

  encode: function(offset, password){
      let code;
      let passwordCipher = new String();
      passwordCipher.length = password.length;
          for (let i=0; i<password.length; i++){
          code=password.charCodeAt(i);
        if(code < 'A'.charCodeAt(0) || code > 'Z'.charCodeAt(0))
        {
           passwordCipher= passwordCipher+password.charAt(i);
         }else{
           let cipher=parseInt((code-65+offset)%26+65);
           passwordCipher= passwordCipher + String.fromCharCode(cipher);
    }
  }return passwordCipher;
  },


  lastWindow: function(){
    let element = document.getElementById("Passwords");
  element.style.display = 'none';
  let zoneOfWork=document.getElementById("NewPassword");
  zoneOfWork.style.display = "block";
  },
  


  desencriptar:function (){
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
        cipher.results();
      }
      },

  decode: function(offset, password){
      let code;
      let passwordCipher = new String();
      passwordCipher.length = password.length;
          for (let i=0; i<password.length; i++){
          code=password.charCodeAt(i);
        if(code < 'A'.charCodeAt(0) || code > 'Z'.charCodeAt(0))
        {
           passwordCipher= passwordCipher+password.charAt(i);
         }else{
           let cipher=parseInt((code-13-offset)%26+65);
           passwordCipher= passwordCipher + String.fromCharCode(cipher);
    }
  }return passwordCipher;
  },

//limpiar todos los campos
limpiar: function (){
  document.getElementById("originalPasword").value = "";
  document.getElementById("offset").value = "";
  document.getElementById("sorter").value = "";
  document.getElementById("errorMessage").innerHTML = "";
},

//ir a la primera pantalla
restart: function (){
  let zoneOfWork=document.getElementById("Welcome");
    zoneOfWork.style.display = "block";
    let element = document.getElementById("NewPassword");
    element.style.display = 'none';
},

newTry:function (){
  let zoneOfWork=document.getElementById("Passwords");
    zoneOfWork.style.display = "block";
   let  element = document.getElementById("NewPassword");
    element.style.display = 'none';
    document.getElementById("originalPasword").value = "";
  document.getElementById("offset").value = "";
} 
};