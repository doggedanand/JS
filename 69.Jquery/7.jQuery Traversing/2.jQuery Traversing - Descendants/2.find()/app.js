// ================================================================
// It will filter based on class and apply the css
$(document).ready(function () {
  $("li").filter(".first , .fourth").css("color", "red");
});

// (*) Selects all desendent parent element
setTimeout(() => {
  $(document).ready(function () {
    $("ul")
      .filter("*")
      .css({ "background-color": "red", "font-weight": "bold" });
  });
}, 5000);
