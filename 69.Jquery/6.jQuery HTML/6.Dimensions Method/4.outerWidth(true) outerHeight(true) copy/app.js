// ================================================================
// It will return  the width and heigth of selected element  (includes padding,  border and margin) on user's click

$(document).ready(function () {
  $("button").click(function () {
    var widthAndHeight = "";
    widthAndHeight += "image outerWidth : " + $("img").outerWidth(true) + "</br>";
    widthAndHeight += "image outerHeight : " + $("img").outerHeight(true) + "</br>";
    $("div").html(widthAndHeight);
  });
});
