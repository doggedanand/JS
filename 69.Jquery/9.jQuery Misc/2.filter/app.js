// ================================================================
// It will hide the first and second li element on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("li").filter(".one, .two").remove();
  });
});
