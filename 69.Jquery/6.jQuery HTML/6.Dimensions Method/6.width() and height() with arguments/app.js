// ================================================================
// It will resize  the width and heigth of div on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("div").width(500).height(500);
  });
});
