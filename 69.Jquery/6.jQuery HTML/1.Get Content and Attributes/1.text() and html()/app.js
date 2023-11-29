// ================================================================
// It will get tha element data and content on user's click

$(document).ready(function () {
  $("#btn1").click(function () {
    alert("data :" + $("h4").text());
  });
  $("#btn2").click(function () {
    alert("html :" + $("h4").html());
  });
});
