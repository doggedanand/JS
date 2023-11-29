// ================================================================
// It will remove the classes to selected html element on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("div").removeClass("btn btn-danger"), $("p").removeClass("btn btn-primary");
  });
});
