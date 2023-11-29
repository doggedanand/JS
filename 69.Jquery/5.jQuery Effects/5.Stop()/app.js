// ================================================================
// It will change the position stop  the selected element on user's click

$(document).ready(function () {
  $("#startBtn").click(function () {
    // Start animation
    $("div").animate({ left: "250px" }, 5000);
  });

  $("#stopBtn").click(function () {
    // Stop animation
    $("div").stop();
  });
});
