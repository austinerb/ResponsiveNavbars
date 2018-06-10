function redditJS() {
  var userBtn = document.getElementsByClassName("reddit-user-btn")[0];
  var userDropdown = document.getElementsByClassName("reddit-user-dropdown")[0];
  var menu = document.getElementsByClassName("reddit-menu")[0];
  var menuBtn = document.getElementsByClassName("reddit-menu-btn")[0];
  var menuExitBtn = document.getElementsByClassName("reddit-menu-exit-btn")[0];
  var favoritesHeader = document.getElementsByClassName("reddit-favorites-header")[0];
  var favoritesHeaderUp = document.getElementsByClassName("reddit-favorites-header-up")[0];
  var favoritesHeaderDown = document.getElementsByClassName("reddit-favorites-header-down")[0];
  var favorites = document.getElementsByClassName("reddit-favorites")[0];
  var subscriptionsHeader = document.getElementsByClassName("reddit-subscriptions-header")[0];
  var subscriptionsHeaderUp = document.getElementsByClassName("reddit-subscriptions-header-up")[0];
  var subscriptionsHeaderDown = document.getElementsByClassName("reddit-subscriptions-header-down")[0];
  var subscriptions = document.getElementsByClassName("reddit-subscriptions")[0];
  var userDropdownOpen = false;
  var favoritesOpen = true;
  var subscriptionsOpen = true;

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

  favoritesHeader.addEventListener("click", function(){
    if (favoritesOpen) {
      favoritesOpen = false;

      favoritesHeaderUp.style.display = "inline-block";
      favoritesHeaderDown.style.display = "none";
      favorites.style.display = "none";
    } else {
      favoritesOpen = true;

      favoritesHeaderUp.style.display = "none";
      favoritesHeaderDown.style.display = "inline-block";
      favorites.style.display = "block";
    }
  });

  subscriptionsHeader.addEventListener("click", function(){
    if (subscriptionsOpen) {
      subscriptionsOpen = false;

      subscriptionsHeaderUp.style.display = "inline-block";
      subscriptionsHeaderDown.style.display = "none";
      subscriptions.style.display = "none";
    } else {
      subscriptionsOpen = true;

      subscriptionsHeaderUp.style.display = "none";
      subscriptionsHeaderDown.style.display = "inline-block";
      subscriptions.style.display = "block";
    }
  });
};

redditJS();
