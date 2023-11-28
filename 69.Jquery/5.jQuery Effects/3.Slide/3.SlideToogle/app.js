// ================================================================
// It will show/hide the selected element on user's click

$(document).ready(function () {
  $("h1").click(function () {
    $("address").slideToggle("slow");
    $("div").slideToggle("fast");
    $("small").slideToggle(5000);
  });
});
