// ================================================================
// It will change the position and height width of  the selected element on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("div").animate({ left: "250px", height: "150px", width: "150px" });
  });
});
