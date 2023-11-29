// ================================================================
// It will  and src attribute in img tag  on user's click

$(document).ready(function () {
  $("button").click(function () {
    $("a").attr("href", function (index, origValue) {
      return origValue + "/doggedanand";
    });
  });
});
