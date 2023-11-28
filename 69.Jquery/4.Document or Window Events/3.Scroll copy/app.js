// ================================================================
// It will alert while scrolling the window

$(window).on("beforeunload", function () {
  return "unload function triggerd!";
});

$(document).ready(function () {
  $(window).on("unload", function () {
    return "Are you sure you want to leave?";
  });
});
