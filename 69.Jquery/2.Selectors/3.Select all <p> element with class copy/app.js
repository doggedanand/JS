// ================================================================
// It will hide first <p> element on user's click

$(document).ready(function () {
  $("p:first").click(function () {
    $(this).hide();
  });
});
