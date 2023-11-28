// ================================================================
// It will hide all (*) element on user's click

$(document).ready(function () {
  $("*").click(function () {
    $(this).hide();
  });
});
