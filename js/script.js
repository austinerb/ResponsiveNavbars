var listItems = document.getElementsByClassName("navbar-item");
var uber = document.getElementsByClassName("uber")[0];
var strava = document.getElementsByClassName("strava")[0];
var so = document.getElementsByClassName("so")[0];
var meetup = document.getElementsByClassName("meetup")[0];
var reddit = document.getElementsByClassName("reddit")[0];

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
    for (var x = 0; x < listItems.length; x++) {
      listItems[x].classList.remove("navbar-selected");
    }
    this.classList.add("navbar-selected");

    uber.classList.remove("show");
    strava.classList.remove("show");
    so.classList.remove("show");
    meetup.classList.remove("show");
    reddit.classList.remove("show");

    if (this.innerText == "Uber") {
      uber.classList.add("show");
    } else if (this.innerText == "Strava") {
      strava.classList.add("show");
    } else if (this.innerText == "Stack Overflow") {
      so.classList.add("show");
    } else if (this.innerText == "Meetup") {
      meetup.classList.add("show");
    } else if (this.innerText == "Reddit") {
      reddit.classList.add("show");
    }
  });
}
