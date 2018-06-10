var menuButton = document.getElementsByClassName("uber-bars")[0];
var exitButton = document.getElementsByClassName("uber-times")[0];
var mapMarker = document.getElementsByClassName("fa-map-marker")[0];
var becomeADriver = document.getElementById("become-a-driver");
var helpSignin = document.getElementsByClassName("help-signin")[0];
var menu = document.getElementsByClassName("uber-menu")[0];
var navLeftNav = document.getElementsByClassName("nav-left-nav")[0];

menuButton.addEventListener("click", function() {
  menuButton.style.display = "none";
  mapMarker.style.display = "none";
  becomeADriver.style.display = "none";
  navLeftNav.style.display = "none";

  exitButton.style.display = "inline-block";
  menu.style.display = "block";

  exitButton.classList.add("offset-fix");
  helpSignin.classList.add("offset-fix");
});

exitButton.addEventListener("click", function() {
  menuButton.style.display = "inline-block";
  mapMarker.style.display = "inline-block";
  becomeADriver.style.display = "inline-block";
  navLeftNav.style.display = "inline-block";

  exitButton.style.display = "none";
  menu.style.display = "none";

  exitButton.classList.remove("offset-fix");
  helpSignin.classList.remove("offset-fix");
});
