// ================================================================
// It will return  the width and heigth of selected element  (includes padding and  border not margin) on user's click

$(document).ready(function () {
  $("button").click(function () {
    var widthAndHeight = "";
    widthAndHeight += "image outerWidth : " + $("img").outerWidth() + "</br>";
    widthAndHeight += "image outerHeight : " + $("img").outerHeight() + "</br>";
    $("div").html(widthAndHeight);
  });
});
