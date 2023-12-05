// ================================================================
// It will select the direct child of parent element
// and will not select the other desendent

$(document).ready(function () {
  $("ul").children().css("background-color", "red");
});

$(document).ready(function () {
  $("ul").children("li.second").css("color", "white ");
});
