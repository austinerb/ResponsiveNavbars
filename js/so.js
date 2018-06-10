var soNavWrapper = document.getElementsByClassName("so-nav-wrapper")[0];
var soSearchForm = document.getElementsByClassName("so-search-form")[0];
var soSearchInput = document.getElementsByClassName("so-search-input")[0];
var soSearchButton = document.getElementsByClassName("so-search-button")[0];
var soNavLeft = document.getElementsByClassName("so-nav-left")[0];
var soNavRight = document.getElementsByClassName("so-nav-right")[0];
var soNavLeftLinks = document.getElementsByClassName("so-nav-left-links")[0];
var soSearchNavButton = document.getElementsByClassName("so-search-nav-button")[0];
var soSearchFormOpen = false;

// set search form width
setTimeout(soSetSearchFormWidth, 300);
window.addEventListener("resize", function() {
  soSetSearchFormWidth();
  if (soNavWrapper.offsetWidth >= 792) {
    soCloseSearchForm();
  }
});

function soSetSearchFormWidth() {
  if (!soSearchFormOpen) {
    soSearchForm.style.width = soNavWrapper.offsetWidth - soNavLeft.offsetWidth - soNavRight.offsetWidth - 1 + "px";
  }
};

soSearchInput.addEventListener("focus", function(){
  soNavLeftLinks.style.display = "none";
  soSetSearchFormWidth()
  soSearchButton.style.display = "inline-block";
  soSearchForm.classList.add("so-search-form-focus");
});

soSearchInput.addEventListener("focusout", function(){
  soNavLeftLinks.style.display = "inline-block";
  soSetSearchFormWidth()
  soSearchButton.style.display = "none";
  soSearchForm.classList.remove("so-search-form-focus");
});

soSearchNavButton.addEventListener("click", function(){
  soSearchFormOpen = true;
  soSearchForm.style.width = "100%";
  // add search form styles
  soSearchForm.classList.add("so-search-form-focus-dropdown");
  // add search nav button styles
  soSearchNavButton.classList.add("so-search-nav-button-focus");
  // add focus to search input
  soSearchInput.focus();
});

function soCloseSearchForm() {
  soSearchFormOpen = false;
  // remove search form styles
  soSearchForm.classList.remove("so-search-form-focus-dropdown");
  // remove search nav button styles
  soSearchNavButton.classList.remove("so-search-nav-button-focus");
  // remove focus
  soSearchInput.blur();
  // fix sizing
  soSetSearchFormWidth();
}

// click out
document.addEventListener("click", function(e){
  var soShouldClose = (!soSearchForm.contains(e.target) && !soSearchNavButton.contains(e.target));

  if (soSearchFormOpen && soShouldClose) {
    soCloseSearchForm();
  }
});
