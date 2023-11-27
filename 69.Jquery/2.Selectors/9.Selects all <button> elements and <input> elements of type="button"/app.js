// ================================================================
// It will hide all buttons element on user's click

$(document).ready(function () {
  $("button").click(function () {
    // (:) selects all button
    $(":button").hide();
  });
});
