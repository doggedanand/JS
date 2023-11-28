// ================================================================
// It will hide all a tag (that are contains target=_blank attribte) element on user's click

// $(document).ready(function () {
//   $("a[target='_blank']").click(function () {
//     $(this).hide();
//   });
// });

$(document).ready(function () {
  $("a[target='_blank']").click(function (event) {
    event.preventDefault();
    $(this).hide();
  });
});
