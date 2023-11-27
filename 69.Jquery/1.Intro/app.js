// ================================================================
// It will hide the selected paragraph element on user's click

$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
});
