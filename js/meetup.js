var meetupUser = document.getElementsByClassName("meetup-user")[0];
var meetupMenu = document.getElementsByClassName("meetup-menu")[0];
var meetupMenuOpen = false;

meetupUser.addEventListener("click", function() {
  if (!meetupMenuOpen) {
    meetupMenu.style.display = "block";
    meetupMenuOpen = true;
  } else {
    meetupMenu.style.display = "none";
    meetupMenuOpen = false;
  }
});
