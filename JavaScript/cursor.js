"use strict";
$(document).ready(function () {
    const $follow = $('.circle-follow');

    function moveCircle(e) {
        TweenLite.to($follow, 0.7, {
            x: e.clientX,
            y: e.clientY
        });  
    }

    function hoverFunc(e) {
        TweenLite.to($follow, 0.3, {
            scale: 3,
            border: "1px solid #aa2e00"
        });  
    }

    function ideHoverFunc(e) {
        TweenLite.to($follow, 0.3, {
            scale: 0
        });  
    }

    function unhoverFunc(e) {
        TweenLite.to($follow, 0.3, {
            scale: 1,
            border: "1px solid #fff",
            backgroundColor: "rgb(0,0,0,0.5)"
        });  
    }

    const mediaQuery = window.matchMedia('(min-width: 768px)');

    if (mediaQuery.matches) {
        $(window).on('mousemove', moveCircle);
        $("a").hover(hoverFunc, unhoverFunc);
        $("button").hover(hoverFunc, unhoverFunc);
        $("#editor").hover(ideHoverFunc, unhoverFunc);
    }
    
})