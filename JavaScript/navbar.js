"use strict";
$(document).ready(function(){
	const menuToggle = $(".menu-toggle");

	//Hamburger Menu Bar
	const menuBarTL = gsap.timeline();

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
	const mobileMainTL = gsap.timeline();

	mobileMainTL.to('.header-bg', {
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

	//Controls Hamburger open and close
	menuToggle.click( function() {
		menuBarTL.reversed(!menuBarTL.reversed());
		mobileMainTL.reversed(!mobileMainTL.reversed());
	});
});