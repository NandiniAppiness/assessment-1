function myFunction() {
  var un = document.forms["myForm"]["Uname"].value;
  var pw = document.forms["myForm"]["Pass"].value;
  if (un == "appiness@gmail.com" && pw == "1234") {
    window.location.href = "carts.html";
  } else {
    alert("Invalid Username and PassWord");
  }
}
