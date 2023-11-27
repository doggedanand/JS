// ================================================================
// It will hide all first li of ul element on user's click

$(document).ready(function () {
  $("ul li:first-child").click(function () {
    $(this).hide();
  });
});
