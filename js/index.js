function changePhoneText() {
    document.getElementById("phoneButton").innerHTML = "Call Me<br>+380976275596";
}

function restorePhoneText() {
    document.getElementById("phoneButton").innerHTML = "Call Me";
}

function changeEmailText() {
    document.getElementById("emailButton").innerHTML = "Send Email<br>drmom4ik@gmail.com";
}

function restoreEmailText() {
    document.getElementById("emailButton").innerHTML = "Send Email";
}

document.getElementById("phoneButton").addEventListener("click", makeCall);
  document.getElementById("emailButton").addEventListener("click", sendEmail);
  
function makeCall() {
    window.location.href = "tel:+380976275596";
  }

  function sendEmail() {
    window.location.href = "mailto:drmom4ik@gmail.com";
  }
