// ================================================================
// It will hide all even tr element on user's click

$(document).ready(function () {
  $("tr").click(function () {
    // $("tr:even").hide();

    // to prevent the remove th in table
    $("tr:even:not(:has(th))").hide();
  });
});
