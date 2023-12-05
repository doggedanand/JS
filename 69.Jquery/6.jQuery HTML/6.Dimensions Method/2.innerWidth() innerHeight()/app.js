// ================================================================
// It will return  the width and heigth of selected element  (includes padding not  border and margin) on user's click

$(document).ready(function () {
  $("button").click(function () {
    var widthAndHeight = "";
    widthAndHeight += "image innerWidth : " + $("img").innerWidth() + "</br>";
    widthAndHeight += "image innerHeight : " + $("img").innerHeight() + "</br>";
    $("div").html(widthAndHeight);
  });
});
