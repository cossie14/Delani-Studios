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
  $('.over').hover(function() {
    $(this).animate({
      opacity: '1'
    });
  },
  function() {
    $(this).animate( {
      opacity : '0'
    });
  });
  $("#submit").click(function(event){
    var name = $("#fname").val();
    if(name != ""){
      alert(name + "thanks for sending a message.")

    }else {
      alert("please fill in your details")
    }
      event.preventDefault();
    });
});
