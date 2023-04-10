"use strict";
gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {

  const scroller = $('.slide-container');
  const content = $('.slide');
  const proxy = ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      if (arguments.length) {
        content.scrollTop = value;
      }
      return content.scrollTop;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    }
  });
  
  let sections = gsap.utils.toArray(".slide");
  $(".slide-container").css("width", 100*sections.length+"vw");
  let sectionVideos = gsap.utils.toArray(".slide video");

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
