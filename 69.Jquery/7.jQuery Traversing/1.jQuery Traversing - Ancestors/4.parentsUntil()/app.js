// ================================================================
// It will select the all ancester between given argument

$(document).ready(function () {
  var data = $("span").parentsUntil("ul");
  console.log("data is :", data);
  data.css("background-color", "red");
});


