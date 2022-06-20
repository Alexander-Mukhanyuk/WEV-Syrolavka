    function validateForm() {
        var un = document.loginform.login.value;
        var pw = document.loginform.password.value;
        var username = "login"; 
        var password = "password";
        if ((un == username) && (pw == password)) {
            window.location = "C:/Users/Alllex/OneDrive/Desktop/Практика по ПССИП/Syrolavka/registrashion.html";
            return true;
        }
        else {
            alert ("Вход в систему не удался, пожалуйста, проверьте свой логин и пароль");
            return false;
        }
      }