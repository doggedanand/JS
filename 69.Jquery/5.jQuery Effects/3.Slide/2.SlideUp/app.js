// ================================================================
// It will hide the selected element on user's click

$(document).ready(function () {
  $("h1").click(function () {
    $("address").slideUp();
  });
});
