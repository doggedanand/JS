// ================================================================
// It will shwo the alert on form submit

$(document).ready(function () {
  $("form").submit(function () {
    alert("submitted!");
  });
});
