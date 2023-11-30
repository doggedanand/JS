// ================================================================
// It will add and remove the classes to selected html element on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("div").toggleClass("btn btn-danger"), $("p").toggleClass("btn btn-primary");
  });
});
