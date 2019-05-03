$(document).ready(function() {
  $(".clickable").click(function() {
    $("#showing").slideToggle();
    $("#hidden").slideToggle();
  });
});
