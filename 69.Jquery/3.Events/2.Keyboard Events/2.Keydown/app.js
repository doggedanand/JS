// ================================================================
// It will change the color on btn clicks

$(document).ready(function () {
  $("input").keydown(function () {
    $("input").css("background-color", "yellow");
  });
  // $("input").keyup(function () {
  //   $("input").css("background-color", "pink");
  // });
});
