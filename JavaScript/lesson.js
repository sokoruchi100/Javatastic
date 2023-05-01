"use strict";
gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {

    // Select all section headings
    const sections = gsap.utils.toArray(".section");

    // Loop through each section
    sections.forEach((section, index) => {
        // Create a new timeline for this section heading

        
        gsap.to(section, {
            x:"-100%",
            scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 1
            }
        });
        
        gsap.from(section, {
            x:"100%",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top top",
                scrub: 1
            }
        });
    });

    // Select the element
    const $copyText = $('.code');

    // Add click event listener to the element
    $copyText.on('click', function(event) {
        const codeText = $(this).find('pre code').text(); // get the text content of the grandchild
        navigator.clipboard.writeText(codeText)
            .then(function() {
                console.log("Code has been copied");
            })
            .catch(function(error) {
                console.error("Error copying code: ", error);
            });
    });

    const navToggle = $(".nav-toggle");
    //Arrow Icon
    const navIconTL = gsap.timeline({paused: true});

    navIconTL.to('.nav-arrow-1', 0.5,{
        attr:{d: "M8,2 L2,8"},
        ease: Power2.easeInOut
    }, 'start')

    .to('.nav-arrow-2', 0.5,{
        attr:{d: "M2,2 L8,8"},
        ease: Power2.easeInOut
    }, 'start')

    .reverse();

    //Moving nav menu
    const navTL = gsap.timeline({paused: true});

    navTL.from('.nav-slider', 0.5,{
        x:"87%",
        ease: 'Expo.easeInOut'
    })

    .reverse();

    navToggle.click( function() {
        navIconTL.reversed(!navIconTL.reversed());
        navTL.reversed(!navTL.reversed());
    });


})
