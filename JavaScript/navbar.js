"use strict";
$(document).ready(function(){
	const menuToggle = $("#menuToggle");
	const mobileNavLinks = [$("#mobile-lessons"), $("#mobile-exercises"), $("#mobile-quizzes")];
	const desktopNavLinks = [$("#desktop-lessons"), $("#desktop-exercises"), $("#desktop-quizzes")];

	//Hamburger Menu Bar
	const menuBar = gsap.timeline();

	menuBar.to('.bar-1', 0.5,{
		attr:{d: "M8,2 L2,8"},
		x:1,
		ease: Power2.easeInOut
	}, 'start')

	menuBar.to('.bar-2', 0.5,{
		autoAlpha: 0
	}, 'start')

	menuBar.to('.bar-3', 0.5,{
		attr:{d: "M8,8 L2,2"},
		x:1,
		ease: Power2.easeInOut
	}, 'start')

	menuBar.reverse();

	//Opening Menu for Mobile Phones
	const mobileTL = gsap.timeline({ paused: true});

	mobileTL.to('.fullpage-menu', {
		duration:0,
		display: "block",
		ease: 'Expo.easeInOut',
	});

	mobileTL.to('.menu-bg', {
		duration:0.5,
		height:"100%",
		ease: 'Expo.easeInOut'
	});

	mobileTL.from('.mobile-nav .main-menu li a', {
		duration:1,
		x:"-100%",
		opacity:0,
		stagger: 0.1,
		ease: 'Expo.easeInOut'
	} , "-=0.5");

	mobileTL.reverse();

	//Animations for each mobile submenu
	const mobileTLArray = [gsap.timeline({ paused: true}),gsap.timeline({ paused: true}),gsap.timeline({ paused: true})];

	for (let i = 0; i < 3; i++) {
		mobileTLArray[i].to('.mobile-nav .main-menu li a', {
			duration:1,
			x:"100%",
			opacity:0,
			stagger: 0.1,
			ease: 'Expo.easeInOut'
		});
	
		mobileTLArray[i].to('.mobile-nav .main-menu', {
			duration:0,
			display:"none",
			ease: 'Expo.easeInOut'
		});

		if (i == 0) {
			mobileTLArray[i].to('.mobile-nav .lessons-menu', {
				duration:0,
				display:"flex",
				ease: 'Expo.easeInOut'
			});

			mobileTLArray[i].from('.mobile-nav .lessons-menu li a', {
				duration:1,
				x:"-100%",
				opacity:0,
				stagger: 0.1,
				ease: 'Expo.easeInOut'
			}, "-=0.5");
		}

		if (i == 1) {
			mobileTLArray[i].to('.mobile-nav .exercises-menu', {
				duration:0,
				display:"flex",
				ease: 'Expo.easeInOut'
			});

			mobileTLArray[i].from('.mobile-nav .exercises-menu li a', {
				duration:1,
				x:"-100%",
				opacity:0,
				stagger: 0.1,
				ease: 'Expo.easeInOut'
			}, "-=0.5");
		}

		if (i == 2) {
			mobileTLArray[i].to('.mobile-nav .quizzes-menu', {
				duration:0,
				display:"flex",
				ease: 'Expo.easeInOut'
			});

			mobileTLArray[i].from('.mobile-nav .quizzes-menu li a', {
				duration:1,
				x:"-100%",
				opacity:0,
				stagger: 0.1,
				ease: 'Expo.easeInOut'
			}, "-=0.5");
		}

		mobileTLArray[i].reverse();
	}
	let mobileLessonsOpen = false;
	let mobileExercisesOpen = false;
	let mobileQuizzesOpen = false;

	mobileNavLinks[0].click(function() {
		mobileLessonsOpen = !mobileLessonsOpen;
		mobileTLArray[0].reversed(!mobileTLArray[0].reversed());
	})
	mobileNavLinks[1].click(function() {
		mobileExercisesOpen = !mobileExercisesOpen;
		mobileTLArray[1].reversed(!mobileTLArray[1].reversed());
	})
	mobileNavLinks[2].click(function() {
		mobileQuizzesOpen = !mobileQuizzesOpen;
		mobileTLArray[2].reversed(!mobileTLArray[2].reversed());
	})
	
	menuToggle.click(function(){
		if (mobileLessonsOpen) {
			mobileLessonsOpen = !mobileLessonsOpen
			mobileTLArray[0].reversed(!mobileTLArray[0].reversed());
		} else if (mobileExercisesOpen) {
			mobileExercisesOpen = !mobileExercisesOpen
			mobileTLArray[1].reversed(!mobileTLArray[1].reversed());
		} else if (mobileQuizzesOpen) {
			mobileQuizzesOpen = !mobileQuizzesOpen
			mobileTLArray[2].reversed(!mobileTLArray[2].reversed());
		} else {
			menuBar.reversed(!menuBar.reversed());
			mobileTL.reversed(!mobileTL.reversed());
		}
	});

	//Desktop Submenus
	const desktopTLArray = [gsap.timeline({ paused: true}),gsap.timeline({ paused: true}),gsap.timeline({ paused: true})];

	for (let i = 0; i < 3; i++) {
		desktopTLArray[i].to('.fullpage-menu', {
			duration:0,
			display: "block",
			ease: 'Expo.easeInOut',
		});

		desktopTLArray[i].to('.menu-bg', {
			duration:0.5,
			height:"200px",
			ease: 'Expo.easeInOut'
		});

		if (i == 0) {
			desktopTLArray[i].to('.desktop-nav .lessons-menu', {
				duration:0,
				display:"flex",
				ease: 'Expo.easeInOut'
			});

			desktopTLArray[i].from('.desktop-nav .lessons-menu li a', {
				duration:1,
				y:"-100%",
				opacity:0,
				stagger: 0.1,
				ease: 'Expo.easeInOut'
			}, "-=0.5");
		}

		if (i == 1) {
			desktopTLArray[i].to('.desktop-nav .exercises-menu', {
				duration:0,
				display:"flex",
				ease: 'Expo.easeInOut'
			});

			desktopTLArray[i].from('.desktop-nav .exercises-menu li a', {
				duration:1,
				y:"-100%",
				opacity:0,
				stagger: 0.1,
				ease: 'Expo.easeInOut'
			}, "-=0.5");
		}

		if (i == 2) {
			desktopTLArray[i].to('.desktop-nav .quizzes-menu', {
				duration:0,
				display:"flex",
				ease: 'Expo.easeInOut'
			});

			desktopTLArray[i].from('.desktop-nav .quizzes-menu li a', {
				duration:1,
				y:"-100%",
				opacity:0,
				stagger: 0.1,
				ease: 'Expo.easeInOut'
			}, "-=0.5");
		}

		desktopTLArray[i].reverse();
	}

	let desktopState = "";

	desktopNavLinks[0].click(function() {
		if (desktopState == "lessons") {
			desktopTLArray[0].reversed(!desktopTLArray[0].reversed());
		} else {
			animate0();
			desktopState = "lessons";
		}
	})

	desktopNavLinks[1].click(function() {
		if (desktopState == "exercises") {
			desktopTLArray[1].reversed(!desktopTLArray[1].reversed());
		} else {
			animate1();
			desktopState = "exercises";
		}
	})

	desktopNavLinks[2].click(function() {
		if (desktopState == "quizzes") {
			desktopTLArray[2].reversed(!desktopTLArray[2].reversed());
		} else {
			animate2();
			desktopState = "quizzes";
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
	}

	async function animate2() {

		await Promise.all([
		  desktopTLArray[0].timeScale(1).reverse(),
		  desktopTLArray[1].timeScale(1).reverse()
		]);
		
		desktopTLArray[2].timeScale(1).play();
	}
});