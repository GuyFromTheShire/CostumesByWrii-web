function myFunction() {
  var x = document.getElementById("meMenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
