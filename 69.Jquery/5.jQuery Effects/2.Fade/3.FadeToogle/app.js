// ================================================================
// It will hide and show the div's element on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
});
