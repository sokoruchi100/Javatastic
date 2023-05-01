"use strict";
$(document).ready(function () {
    const mouse = $('.circle-follow');
    const mouseIcon = $(".mouse");

    function moveCircle(e) {
        TweenLite.to(mouse, 0.7, {
            x: e.clientX,
            y: e.clientY
        });  
    }

    function hoverFunc(e) {
        TweenLite.to(mouse, 0.3, {
            scale: 3,
            border: "1px solid black"
        });
    }

    function link(e) {
        hoverFunc(e);
        mouseIcon.removeClass("fa-floppy-disk fa-play fa-rotate-left fa-pen fa-question");
        mouseIcon.addClass("fa-location-arrow");
    }

    function code(e) {
        hoverFunc(e);
        mouseIcon.removeClass("fa-location-arrow fa-play fa-rotate-left fa-pen fa-question");
        mouseIcon.addClass("fa-floppy-disk");
    }

    function play(e) {
        hoverFunc(e);
        mouseIcon.removeClass("fa-location-arrow fa-rotate-left fa-floppy-disk fa-pen fa-question");
        mouseIcon.addClass("fa-play");
    }

    function reset(e) {
        hoverFunc(e);
        mouseIcon.removeClass("fa-location-arrow fa-play fa-floppy-disk fa-pen fa-question");
        mouseIcon.addClass("fa-rotate-left");
    }

    function check(e) {
        hoverFunc(e);
        mouseIcon.removeClass("fa-location-arrow fa-play fa-floppy-disk fa-rotate-left fa-question");
        mouseIcon.addClass("fa-pen");
    }

    function hint(e) {
        hoverFunc(e);
        mouseIcon.removeClass("fa-location-arrow fa-play fa-floppy-disk fa-rotate-left fa-pen");
        mouseIcon.addClass("fa-question");
    }

    function unhoverFunc(e) {
        TweenLite.to(mouse, 0.3, {
            scale: 0
        });  
    }

    const mediaQuery = window.matchMedia('(min-width: 768px)');

    if (mediaQuery.matches) {
        $(window).on('mousemove', moveCircle);
        $("a").hover(link, unhoverFunc);
        $(".run").hover(play, unhoverFunc);
        $(".submit").hover(play, unhoverFunc);
        $(".reset").hover(reset, unhoverFunc);
        $(".check").hover(check, unhoverFunc);
        $(".code").hover(code, unhoverFunc);
        $(".hint").hover(hint, unhoverFunc);
        $(".start-btn").hover(play, unhoverFunc);
        $(".quiz-btn").hover(check, unhoverFunc);
    }
    
})