// ================================================================
// It will change the position stop  the selected element on user's click and
// after finish it an alert will show

$(document).ready(function () {
  $("#startBtn").click(function () {
    // Start animation
    $("div").animate({ left: "250px" }, 5000, function () {
      alert("completed!");
    });
  });

  $("#stopBtn").click(function () {
    // Stop animation
    $("div").stop();
  });
});
