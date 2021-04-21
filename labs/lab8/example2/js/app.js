//1 - Password protected


function sConsole() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");

      var h = document.getElementById("h");

    if ((pass == "Password") && (user == "Username")){
      h.innerHTML="success";
    } else {
      h.innerHTML="Wrong information";
    }
    
  }
