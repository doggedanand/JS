// ================================================================
// It will load  the external file with status code 

$(document).ready(function () {
  $("button").click(function () {
    $.get("file.txt", function (data, status) {
      alert("Data :" + data + "\nStatus:" + status);
    });
  });
});

