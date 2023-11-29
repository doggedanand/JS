// ================================================================
// It will focus input

$(document).ready(function () {
  $("#btn1").click(function () {
    $("input").focus();
    $("p").html("focus event triggered");
  });
});
