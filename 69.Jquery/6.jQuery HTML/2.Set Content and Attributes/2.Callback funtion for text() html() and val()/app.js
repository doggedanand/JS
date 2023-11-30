// ================================================================
// It will return the original ( old value ) and new value  on user's click

$(document).ready(function () {
  $("#btn1").click(function () {
    // will return the data without considering the html tag
    $("#heading1").text(function (index, origText) {
      return (
        "Old text :" +
        origText +
        " " +
        "New text : Hello <small>small text </small> jQuery! (index :" +
        index +
        ") "
      );
    });
  });
  $("#btn2").click(function () {
    // will return the data considering the html tag
    $("#heading2").html(function (index, origText) {
      return (
        "Old text :" +
        origText +
        " " +
        "New text: Hello <small>small text </small>  jQuery! (index :" +
        index +
        ")"
      );
    });
  });
});
