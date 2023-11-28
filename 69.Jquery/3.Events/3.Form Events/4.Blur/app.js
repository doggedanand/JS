// ================================================================
// It will blur the input

$(document).ready(function () {
  $("#btn1").click(function () {
    $("input").blur();
    $("p").html("blur event triggered");
  });
});
