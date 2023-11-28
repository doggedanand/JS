// ================================================================
// It will hide the div's element on user's click


$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
    });
  });