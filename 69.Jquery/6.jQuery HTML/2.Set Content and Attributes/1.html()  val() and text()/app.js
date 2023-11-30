// ================================================================
// It will set the element value on user's click

$(document).ready(function () {
  // set the text
  $("#btn1").click(function () {
    $("#para1").text("Anand Vishwakarma!");
  });
  // set the html
  $("#btn2").click(function () {
    $("#para2").html("<h2>22</h2>");
  });
  // set the value
  $("#btn3").click(function () {
    $("#input").val("Anand");
  });
});
