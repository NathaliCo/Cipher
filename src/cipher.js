window.cipher = {
  //Método para encriptar
    encode: function(offset, password){
       //Declaración de variables 
        let code;
        let cipher;
        let passwordCipher = new String();
        passwordCipher.length = password.length;
        //Ciclo para recorrer cada una de las letras de la contraseña
          for (let i=0; i<password.length; i++){
        //Ubica el valor de la letra en Unicode
            code=password.charCodeAt(i);
        //Revisa si es una letra y si es mayúscula
          if(code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0))
          {
            //Realiza la conversión a la letra codificada según el offset
            cipher=parseInt((code-65+offset)%26+65);
            //convierte el codigo al alfabeto y va formando la palabra
            passwordCipher= passwordCipher + String.fromCharCode(cipher);
            //Revisa si es una letra y si es minúscula
           }else if (code>= "a".charCodeAt(0) && code <= "z".charCodeAt(0))
           {
             //Realiza la conversión a la letra codificada según el offset
             cipher=parseInt((code-97+offset)%26+97);
             //convierte el codigo al alfabeto y va formando la palabra
             passwordCipher= passwordCipher + String.fromCharCode(cipher);
             //Si no es una letra imprime el signo o número tal cual lo escribió el usuario
      }else if (code==32){
        passwordCipher=passwordCipher+"";
      }else{
        passwordCipher= passwordCipher+password.charAt(i);
      }
    }return passwordCipher;
    },
  
    decode: function(offset, password){
      //Declaración de variables 
      let cipher;  
      let code;
      let passwordCipher = new String();
        passwordCipher.length = password.length;
         //Ciclo para recorrer cada una de las letras de la contraseña
            for (let i=0; i<password.length; i++){
              //Ubica el valor de la letra en Unicode
            code=password.charCodeAt(i);
            //Revisa si es una letra y si es mayúscula
            if(code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0))
            {
              //Realiza la conversión a la letra codificada según el offset
               cipher=parseInt((code+65-offset)%26+65);
               //convierte el codigo al alfabeto y va formando la palabra
              passwordCipher= passwordCipher + String.fromCharCode(cipher);
              //Revisa si es una letra y si es minúscula
             }else if (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0))
             {
                //Realiza la conversión a la letra codificada según el offset
               cipher=parseInt((code-45-offset)%26+97);
               //convierte el codigo al alfabeto y va formando la palabra
               passwordCipher= passwordCipher + String.fromCharCode(cipher);
      }else if (code==32){
        passwordCipher = passwordCipher + "";
      }else{
         //Si no es una letra imprime el signo o número tal cual lo escribió el usuario
         passwordCipher= passwordCipher+password.charAt(i);
      }
    }return passwordCipher;
    }
  };
  