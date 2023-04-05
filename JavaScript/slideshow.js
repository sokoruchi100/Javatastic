gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {
  
  let sections = gsap.utils.toArray(".slide");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slide-container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3600",
    }
  });
});
