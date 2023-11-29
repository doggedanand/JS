// ================================================================
// It will alert after resize the window

$(document).ready(function () {
  $(window).resize(function () {
    console.log("Window Resized!");
    alert("Window Resized!");
  });
});
