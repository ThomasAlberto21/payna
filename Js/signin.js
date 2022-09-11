let showPassword = false;
function change() {
  if (showPassword) {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("eye").style.opacity = "0.6";
    showPassword = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("eye").style.opacity = "1";
    showPassword = true;
  }
}
