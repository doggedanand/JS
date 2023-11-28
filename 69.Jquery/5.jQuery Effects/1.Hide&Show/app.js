// ================================================================
// It will hide and show the selected paragraph element on user's click

$(document).ready(function () {
  $("#one").click(function () {
    $("#one").hide(1000);
  });
  $("#two").click(function () {
    $("#one").show(1000);
  });
});
