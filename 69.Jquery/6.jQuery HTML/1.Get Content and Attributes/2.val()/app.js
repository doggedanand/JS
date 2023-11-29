// ================================================================
// It will get tha element value on user's click

$(document).ready(function () {
  $("#btn1").click(function () {
    alert("data :" + $("#input").val());
  });
});
