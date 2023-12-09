// ================================================================
// It will requests data from the server

$(document).ready(function () {
  $("button").click(function () {
    $.post(
      "file.txt",
      {
        name: "Donald Duck",
        city: "Duckburg",
      },
      function (data, status) {
        alert("Data :" + data + "\nStatus:" + status);
      }
    );
  });
});
