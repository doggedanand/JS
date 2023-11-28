// ================================================================
// It will hide all href attribut contained element on user's click

$(document).ready(function () {
  $("[href]").click(function () {
    $(this).hide();
  });
});
