$(document).ready(function() {
  $("#enterAge").submit(function(event) {
    event.preventDefault();
    var age = $("input#age-input").val();

    if (age >= 18) {
      $("#above18").show();
      $(".age-input").hide();
    } else {
      $("#below18").show();
      $(".age-input").hide();
    }

  });

});
