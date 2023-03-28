gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
    tl = gsap.timeline();
    tl.to('.panel-2', {
        duration: 2,
        x: '-100%',
        ease: 'none'
    });

    tl.to('.panel-3', {
        duration: 4,
        x: '-200%',
        ease: 'none'
    }, "-=2");

    tl.to('.footer', {
        duration: 1,
        y: '-100%',
        ease: 'none'
    });
/*
    gsap.utils.toArray(".panel").forEach((panel) => {
        ScrollTrigger.create({
            animation: tl,
          trigger: panel,
          start: "top top", 
          pin: true, 
          pinSpacing: false 
        });
      });*/
})
