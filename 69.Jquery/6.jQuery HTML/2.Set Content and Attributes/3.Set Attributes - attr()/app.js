// ================================================================
// It will  and src attribute in img tag  on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("img").attr({
      src: "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png",
    });
  });
});
