// ================================================================
// It will load the other file content using load method

$(document).ready(function () {
  $("button").click(function () {
    $("#content").load("content.txt");
  });
});
