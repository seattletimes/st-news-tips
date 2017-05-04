// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");
var $ = require("./lib/qsa");

var note = $.one(".note");

if (window.location.protocol !== "https:") { 
  note.classList.remove("inactive");
}

//navigation

var link = $.one(".main-nav .activate");
var nav = $.one(".main-nav");

link.addEventListener("click", () => nav.classList.toggle("open"));

link.addEventListener("mouseenter", () => nav.classList.add("open"));
nav.addEventListener("mouseleave", () => nav.classList.remove("open"));