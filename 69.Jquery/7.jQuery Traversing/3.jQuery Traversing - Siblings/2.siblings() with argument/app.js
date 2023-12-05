// ================================================================
// It will select all paragraph element that would be sibling of selected element

$(document).ready(function () {
  $("span").siblings("p").css("background-color", "red");
});
