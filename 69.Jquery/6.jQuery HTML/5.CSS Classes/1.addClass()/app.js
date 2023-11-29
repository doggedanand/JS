// ================================================================
// It will add  the classes to selected html element on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("div").addClass("btn btn-danger"), $("p").addClass("btn btn-primary");
  });
});
