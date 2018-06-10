function redditJS() {
  var userBtn = document.getElementsByClassName("reddit-user-btn")[0];
  var userDropdown = document.getElementsByClassName("reddit-user-dropdown")[0];
  var menu = document.getElementsByClassName("reddit-menu")[0];
  var menuBtn = document.getElementsByClassName("reddit-menu-btn")[0];
  var menuExitBtn = document.getElementsByClassName("reddit-menu-exit-btn")[0];
  var userDropdownOpen = false;

  userBtn.addEventListener("click", function(){
    if (!userDropdownOpen) {
      userDropdown.style.display = "block";
      userDropdownOpen = true;
    } else {
      userDropdown.style.display = "none";
      userDropdownOpen = false;
    }
  });

  menuBtn.addEventListener("click", function(){
    menuBtn.style.display = "none";

    menuExitBtn.style.display = "inline-block";
    menu.style.display = "block";
  });

  menuExitBtn.addEventListener("click", function(){
    menuExitBtn.style.display = "none";
    menu.style.display = "none";

    menuBtn.style.display = "inline-block";
  });
};

redditJS();
