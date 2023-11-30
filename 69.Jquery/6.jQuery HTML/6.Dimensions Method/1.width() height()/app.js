// ================================================================
// It will return  the width and heigth of selected element  (excludes padding, border and margin) on user's click

$(document).ready(function () {
  $("button").click(function () {
    var widthAndHeight = "";
    widthAndHeight += "image width : " + $("img").width() + "</br>";
    widthAndHeight += "image height : " + $("img").height() + "</br>";
    $("div").html(widthAndHeight);
  });
});
