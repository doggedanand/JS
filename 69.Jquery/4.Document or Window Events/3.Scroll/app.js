// ================================================================
// It will alert while scrolling the window

$(document).ready(function () {
  $(window).scroll(function () {
    console.log("Window Scrolling...");
    alert("Window Scrolling...");
  });
});
