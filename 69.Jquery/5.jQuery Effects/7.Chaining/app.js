// ================================================================
// It will change the position stop  the selected element on user's click and
// after finish it an alert will show

$(document).ready(function () {
  $("button").click(function () {
    $("div").css("color", "red").slideUp(2000).slideDown(2000);
  });
});
