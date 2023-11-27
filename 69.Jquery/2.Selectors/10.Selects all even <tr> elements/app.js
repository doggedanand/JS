// ================================================================
// It will hide even all tr element on user's click

$(document).ready(function () {
  $("tr").click(function () {
    $("tr:even").hide();
  });
});
