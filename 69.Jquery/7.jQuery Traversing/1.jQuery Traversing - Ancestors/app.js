// ================================================================
// It will hide the selected paragraph element on user's click

$(document).ready(function () {
  var data = $("span").parent();
  console.log("data is :", data);
  data.css("background-color","red");
});
