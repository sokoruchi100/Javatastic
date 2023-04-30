"use strict";
import { setupAceEditor } from "./ide.js";

$(document).ready(function () {
    //Set Up Exercises Here
    setupAceEditor("e1", "Hello world!");

    //Set Up Quizzes Here
    // Define the correct answer
    const q1Answer = "3";
    
    // When the submit button is clicked
    $("#check1").click(function(event) {
        console.log("Hello");
        event.preventDefault();
        
        // Get the user's answer
        const userAnswer = $("input[name=q1]:checked").val();
        if (userAnswer == null) {
            userAnswer = 0;
        }

        // Compare the user's answer to the correct answer
        $(".q1 .explanation").show();
        $(".q1 button").hide();
        if (userAnswer === q1Answer) {
            $(".q1 .explanation").text("Correct! Check for semicolons, unclosed strings, and remember to use System.out to print.");
        } else {
            $(".q1 .explanation").text("Incorrect. Check for semicolons, unclosed strings, and remember to use System.out to print.");
        }
    });
});