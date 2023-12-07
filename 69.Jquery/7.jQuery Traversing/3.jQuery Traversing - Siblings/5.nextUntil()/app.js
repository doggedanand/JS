// ================================================================
// It will select  next sibling element between tow given argument 

$(document).ready(function () {
  $("p").nextUntil("p").css("background-color", "red");
});




// ==============================================================
// these are the like same methods but it's work reverse [ prev(), prevAll() and prevUntil()] 