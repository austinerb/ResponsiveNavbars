var stravaMenuButton = document.getElementsByClassName("strava-bars-icon")[0];
var stravaExitButton = document.getElementsByClassName("strava-times-icon")[0];
var stravaMenu = document.getElementsByClassName("strava-menu-container")[0];
var stravaMain = document.getElementsByTagName("main")[0];

stravaMenuButton.addEventListener("click", function() {
  stravaMenuButton.style.display = "none";
  stravaMain.style.display = "none";

  stravaExitButton.style.display = "inline-block";
  stravaMenu.style.display = "block";
});

stravaExitButton.addEventListener("click", function() {
  stravaExitButton.style.display = "none";
  stravaMenu.style.display = "none";

  stravaMenuButton.style.display = "inline-block";
  stravaMain.style.display = "block";
});

window.addEventListener("resize", function() {
  if (stravaMenu.offsetWidth >= 992) {
    stravaMenu.style.display = "none";
    stravaExitButton.style.display = "none";
    stravaMain.style.display = "block";
    stravaMenuButton.style.display = "inline-block";
  }
});
