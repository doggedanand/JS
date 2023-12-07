// ================================================================
// It will load  the external file with status code 

$(document).ready(function () {
  $("button").click(function () {
    $("#load").load("file.txt", function (responseTxt, statusText, xhr) {
      if (statusText === "success") {
        alert("Content loaded!");
      }
      if (statusText === "error") {
        alert("Error:" + xhr.status + xhr.statusText);
      }
    });
  });
});
