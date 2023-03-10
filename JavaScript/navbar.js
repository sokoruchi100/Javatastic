"use strict"
$(document).ready(function() {
  $("#menuButton").click(function(){
    if ($("#menuButton").hasClass("collapsed")) {
      $(".navbar-toggler-icon").removeClass("navOpen");
      $("#menuButton").css("border", "2px outset black");
    } else {
      $(".navbar-toggler-icon").addClass("navOpen");
      $("#menuButton").css("border", "2px inset black");
    }
  })
});