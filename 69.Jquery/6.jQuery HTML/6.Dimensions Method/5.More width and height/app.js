// ================================================================
// It will return  the width and heigth of document and window on user's click

$(document).ready(function () {
  $("button").click(function () {
    var txt = "";
    txt += "Document width/height: " + $(document).width();
    txt += "X" + $(document).height() + "\n";
    txt += "Window width/height: " + $(window).width();
    txt += "X" + $(window).height();
    alert(txt);
  });
});
