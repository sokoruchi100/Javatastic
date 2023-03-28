"use strict";
$(document).ready(function(){
	const menuToggle = $(".menu-toggle");
	const subNavLinks = [$("#lessons"), $("#exercises")];

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

	//Mobile Submenus
	const mobileSubTL = [gsap.timeline(),gsap.timeline()];

	for (let i = 0; i < 2; i++) {		
		let submenuClass = i == 0 ? '.lessons-menu' : '.exercises-menu';
		let mainmenuLi = i == 0 ? '.lessons' : '.exercises';
		let mainmenuLink = i == 0 ? '#lessons' : '#exercises';

		mobileSubTL[i].to($(`.main-menu li:not(${mainmenuLi})`), {
			duration: 1,
			opacity: 0,
			x: '200%',
			stagger: 0.1,
			ease: 'Expo.easeInOut',
			onComplete: function() {
				$('.second-nav').toggle();
			},
			onReverseComplete: function() {
				$('.second-nav').toggle();
			}
		}, ) 

		.to(mainmenuLi, {
			duration: 0.5,
			x: '-12%',
			y: mainmenuLi=='.lessons' ? '-300%' : '-575%',
			scale: 0.75,
			ease: 'Expo.easeInOut',
			onComplete: function() {
				$(mainmenuLi).toggleClass('active');
				$(mainmenuLink).toggleClass('active');
			},
			onReverseComplete: function() {
				$(mainmenuLi).toggleClass('active');
				$(mainmenuLink).toggleClass('active');
			}
		}, "-=0.5" ) 

		.from(submenuClass+' li', {
			duration: 1,
			opacity: 0,
			x: '500%',
			stagger: 0.1,
			ease: 'Expo.easeInOut'
		}, "-=0.5")

		.reverse();
	}

	//Controls Hamburger open and close
	menuToggle.click( function() {
		if (!mobileSubTL[0].isActive() && !mobileSubTL[1].isActive()) {
			if (!mobileSubTL[0].reversed() || !mobileSubTL[1].reversed()) {
				mobileSubTL[0].reverse();
				mobileSubTL[1].reverse();
			} else {
				menuBarTL.reversed(!menuBarTL.reversed());
				mobileMainTL.reversed(!mobileMainTL.reversed());
			}
		}
	});

	//Controls Submenus open and close
	subNavLinks[0].click(function() {
		if (!mobileSubTL[1].isActive()) {
			toggleSubmenu(0);
			mobileSubTL[0].reversed(!mobileSubTL[0].reversed());
		}
	});

	subNavLinks[1].click(function() {
		if (!mobileSubTL[0].isActive()) {
			toggleSubmenu(1);
			mobileSubTL[1].reversed(!mobileSubTL[1].reversed());
		}
	});

	function toggleSubmenu(x) {
		if (x == 0) {
			$('.lessons-menu').css('display', 'flex');
			$('.exercises-menu').css('display', 'none');
		} else {
			$('.lessons-menu').css('display', 'none');
			$('.exercises-menu').css('display', 'flex');
		}
	}
	/*
	let desktopState = "";

	

	desktopNavLinks[1].click(function() {
		if (desktopState == "exercises") {
			desktopTLArray[1].reversed(!desktopTLArray[1].reversed());
		} else {
			animate1();
			desktopState = "exercises";
		}
	})

	async function animate0() {

		await Promise.all([
		  desktopTLArray[1].timeScale(1).reverse(),
		  desktopTLArray[2].timeScale(1).reverse()
		]);
		
		desktopTLArray[0].timeScale(1).play();
	}

	async function animate1() {

		await Promise.all([
		  desktopTLArray[0].timeScale(1).reverse(),
		  desktopTLArray[2].timeScale(1).reverse()
		]);
		
		desktopTLArray[1].timeScale(1).play();
	}*/
});