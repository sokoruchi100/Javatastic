"use strict"
$(document).ready(function(){
  //Vars to declare
  const navLinks = $("li a");
  const menu = $("div.menu");
  
  // Function to toggle the mobile navigation menu
  menu.click(function() {
    menu.classToggle(".menuOpen");
    navLinks.toggle();
  });
});