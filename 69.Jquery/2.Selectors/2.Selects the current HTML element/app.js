// ================================================================
// It will hide all (*) element on user's click

$(document).ready(function () {
  $("*").click(function () {
    // this refers to the current selected element
    $(this).hide();
  });
});
