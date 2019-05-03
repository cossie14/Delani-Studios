$(document).ready(function() {
  $(".clickable").click(function() {
    $("#showing").slideToggle();
    $("#hidden").slideToggle();
  });

  $(".clickable-d").click(function() {
    $("#showing-d").slideToggle();
    $("#hidden-d").slideToggle();
  });

  $(".clickable-p").click(function() {
    $("#showing-p").slideToggle();
    $("#hidden-p").slideToggle();
  });
});
