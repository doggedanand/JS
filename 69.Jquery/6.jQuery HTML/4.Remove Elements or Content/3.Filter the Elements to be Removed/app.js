// ================================================================
// It will hide the selected childs element on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("p").remove(".para4 , #para2");
  });
});
