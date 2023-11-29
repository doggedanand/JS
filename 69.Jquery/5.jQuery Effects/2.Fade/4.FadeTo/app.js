// ================================================================
// It will hide till the oppacity to the div's element on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("#div1").fadeTo("", 0.15);
    $("#div2").fadeTo("slow", 0.5);
    $("#div3").fadeTo("slow", 0.8);
  });
});
