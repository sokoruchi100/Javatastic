"use strict";
gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {

  const scroller = $('.slide-container');
  const content = $('.slide');
  
  gsap.from(".content", 1, {
    x:"100%",
    ease: "easeInOut",
    opacity: "0"
  })

  let sections = gsap.utils.toArray(".slide");
  $(".slide-container").css("width", 100*sections.length+"vw");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".slide-container",
      start: "left top",
      end: "right top",
      scrub: 1,
      pin: true
    }
  })

  tl.to(sections.slice(1), {
    x: "-100%"
  })

  /*
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slide-container",
      pin: true,
      fixed: true,
      scrub: 1,
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+="+1000*sections.length,
      scroller: proxy
    }
  });*/

});
