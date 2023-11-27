// ================================================================
// It will hide all odd tr element on user's click

$(document).ready(function () {
  $("tr").click(function () {
    $("tr:odd").hide();
  });
});
