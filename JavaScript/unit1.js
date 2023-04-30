"use strict";
import { setupAceEditor } from "./ide.js";

$(document).ready(function () {
    //Set Up Exercises Here
    setupAceEditor("e1", `System.out.print();`);
    setupAceEditor("e2", `System.out.print(5 / 2);`);
    setupAceEditor("e3", `int x = 2;
        double y = 2.0;
        System.out.print(x == y);`);
    setupAceEditor("e4", `System.out.print(9999999999);`);

    //Set Up Quizzes Here
    // Define the correct answer
    const quizArray = [
    {
        answer: "3",
        explanation: "Check for semicolons, unclosed strings, and remember to use System.out to print."
    },
    {
        answer: "1",
        explanation: "Strings are not primitive types, they are objects."
    },
    {
        answer: "2",
        explanation: "Parentheses are first, then multiplication or division, then addition or subtraction going from left to right. Modulo returns the remainder when the left value is divided by the right value."
    },
    {
        answer: "3",
        explanation: "x += x + 2 is the same as multiplying x by 2 and and then adding 2 to it."
    },
    {
        answer: "4",
        explanation: "The cast operator will turn 7 into a double first before you divide it by 2."
    },
    ]
    
    // When the submit button is clicked
    for (let i = 1; i <= quizArray.length; i++) {
        $(`#check${i}`).click(function(event) {
            event.preventDefault();
            
            // Get the user's answer
            const userAnswer = $(`input[name=q${i}]:checked`).val();
            if (userAnswer == null) {
                userAnswer = 0;
            }
    
            // Compare the user's answer to the correct answer
            $(`.q${i} .explanation`).show();
            $(`.q${i} button`).hide();
            //iterate over forms
            const inputs = $(`input[name=q${i}]`);

            inputs.each((j, input) => {
                if ($(input).val() === quizArray[i-1].answer) {
                    $(input).closest("label").addClass("correct");
                }
            });
            
            if (userAnswer === quizArray[i-1].answer) {//If selected correct answer
                $(`.q${i} .explanation`).text("Correct! "+quizArray[i-1].explanation);
            } else {//If selected wrong answer
                $(`.q${i} .explanation`).text("Incorrect. "+quizArray[i-1].explanation);
                if (userAnswer != 0) {
                    $(`input[name=q${i}]:checked`).closest("label").addClass("incorrect");
                }
            }
        });
    }
});