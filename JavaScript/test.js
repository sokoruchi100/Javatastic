$(document).ready(function() {
    // Adjust header image height on window resize
    $(window).on('resize', function() {
      $('.bg-image').css('height', $(window).height());
    }).resize();
  
    // Smooth scrolling on anchor link click
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    });
  
    // Show and hide navbar on scroll
    var prevScrollpos = window.pageYOffset;
    $(window).on('scroll', function() {
      var currentScrollpos = window.pageYOffset;
      if (prevScrollpos > currentScrollpos) {
        $('nav').addClass('fixed-top');
        $('nav').fadeIn(500);
      } else {
        $('nav').removeClass('fixed-top');
        $('nav').fadeOut(500);
      }
      prevScrollpos = currentScrollpos;
    });
  
    // Add active class to navbar links on click
    $('.navbar-nav a').on('click', function() {
      $('.navbar-nav').find('.active').removeClass('active');
      $(this).addClass('active');
    });
  
    // Display tooltip on hover
    $('[data-toggle="tooltip"]').tooltip();
  });
  