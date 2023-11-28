// ================================================================
// It will hide all <p> element on user's click

$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
});
