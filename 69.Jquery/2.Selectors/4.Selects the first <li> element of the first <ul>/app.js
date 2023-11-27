// ================================================================
// It will hide first li of ul element on user's click

$(document).ready(function () {
  $("ul li:first").click(function () {
    $(this).hide();
  });
});
