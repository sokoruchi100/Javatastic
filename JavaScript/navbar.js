"use strict";
$(document).ready(function(){
	// create
	const matchMedia = gsap.matchMedia();
	
	// add a media query. When it matches, the associated function will run
	matchMedia.add("(max-width: 768px)", () => {
		// this setup code only runs when viewport is at least 768px wide
		const menuToggle = $(".menu-toggle");

	//Hamburger Menu Bar
	const menuBarTL = gsap.timeline({paused: true});

	menuBarTL.to('.bar-1', 0.5,{
		attr:{d: "M8,2 L2,8"},
		x:1,
		ease: Power2.easeInOut
	}, 'start')

	.to('.bar-2', 0.5,{
		autoAlpha: 0
	}, 'start')

	.to('.bar-3', 0.5,{
		attr:{d: "M8,8 L2,2"},
		x:1,
		ease: Power2.easeInOut
	}, 'start')

	.reverse();

	//Mobile Open Links
	const mobileTL = gsap.timeline({paused: true});

	mobileTL.to('.header-bg', {
		duration: 0.5,
		height: '100vh',
		ease: 'Expo.easeInOut'
	})

	.from('.main-menu li', {
		duration: 0.5,
		opacity: 0,
		x: '-100%',
		stagger: 0.1,
		ease: 'Expo.easeInOut'
	}, "-=0.5")

	.reverse();

	menuToggle.click( function() {
		menuBarTL.reversed(!menuBarTL.reversed());
		mobileTL.reversed(!mobileTL.reversed());
	});
		return () => {
		};
	});
});