// ================================================================
// It will select the span parent element

$(document).ready(function () {
  var data = $("span").parent();
  console.log("data is :", data);
  data.css("background-color", "red");
});
