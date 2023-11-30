// ================================================================
// It will add the data before and after the element

$(document).ready(function () {
  const text1 = "<p>Text1 added dynamically.</p>";
  const text2 = $("<p>").text("Text2 added dynamically");
  const text3 = document.createElement("p");
  text3.innerHTML = "Text3 added dynamically";
  // will add the data after the selected element
  $("#para1").append(text1, text2, text3);
});

$(document).ready(function () {
  const text1 = "<p>Text1 added dynamically.</p>";
  const text2 = $("<p>").text("Text2 added dynamically");
  const text3 = document.createElement("p");
  text3.innerHTML = "Text3 added dynamically";
  // will add the data before the element
  $("#para2").prepend(text1, text2, text3);
});
