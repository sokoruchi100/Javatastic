"use strict";
gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {
  
  let sections = gsap.utils.toArray(".slide");
  let sectionVideos = gsap.utils.toArray(".slide video");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slide-container",
      pin: true,
      fixed: true,
      scrub: 1,
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3600",
    }
  });

});
