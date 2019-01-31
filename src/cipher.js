window.cipher = {

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

  decode: function(offset, password){
      let code;
      let passwordCipher = new String();
      passwordCipher.length = password.length;
          for (let i=0; i<password.length; i++){
          code=password.charCodeAt(i);
          console.log(code);
        if(code < 'A'.charCodeAt(0) || code > 'Z'.charCodeAt(0))
        {
           passwordCipher= passwordCipher+password.charAt(i);
           console.log(passwordCipher);
         }else{
           let cipher=parseInt((code-13-offset)%26+65);
           passwordCipher= passwordCipher + String.fromCharCode(cipher);
           console.log (passwordCipher);
    }
  }return passwordCipher;
  }

};


