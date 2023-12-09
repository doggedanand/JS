// ================================================================
// It will not conflict the code while using other framworks

$.noConflict();
jQuery(document).ready(function () {
  jQuery("button").click(function () {
    jQuery("div").html("jQuery working!");
  });
});

// $j = $.noConflict()
// we can now use $j in short where we're using jQuery
/*
$j=$.noConflict()
$j(document).ready(function (){
    $j("button").click(function (){
        $j("div").html("Hello World!")
    })
})

*/
