"use strict";
import { questionBank } from "./questionBank.js";

$(document).ready(function() {
    
    gsap.from(".content", 1, {
        x:"100%",
        ease: "easeInOut",
        opacity: "0"
    })

    const timertl = gsap.timeline({paused:true});
    timertl.from(".timer-container", 0.5, {
        y:"-100%",
        ease: "easeInOut",
        opacity: "0"
    });


    let questions; //scope access
    let timerInterval;
    let timeRemaining = 45 * 60; // 45 minutes in seconds

    function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function updateTimer() {
        const timerElement = document.getElementById("timer");
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        //10 minutes
        if (timeRemaining <= 600) {
            $(".timer-container").css("background-color", "#aa2e007a");
        }

        if (timeRemaining <= 0) {
            $(".quiz-btn").trigger("click");
        }

        timeRemaining--;
    }

    $(".start-btn").click(function () { 
        questions = shuffle(questionBank);
        createElements(questions, $(".quiz-container"))
        $(".start-container").hide();
        $(".quiz-container").css("display", "flex");
        startTimer();
        timertl.play();
    });

    //Shuffles the questionBank array an returns the first 20 questions
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.slice(0, 20);
    }

    function scoreQuiz(array) {
        let score = 0;
        let incorrectQuestions = [0,0,0,0,0,0,0,0,0,0,0];
        const forms = $(".section").find('form');

        //iterate over forms
        forms.each((i, form) => {
            const inputs = $(form).find('input[type="radio"]');
            const selected = $(form).find('input[type="radio"]:checked');
            const obj = array[i];
            const unit = obj.unit;

            inputs.each((j, input) => {
                if ($(input).data('answer') === obj.answer) {
                    $(input).closest("label").addClass("correct");
                }
            });
            
            if (selected.length) {
                const answerIndex = selected.data('answer');
                if (answerIndex === obj.answer) {//If selected correct answer
                    score++;
                } else {//If selected wrong answer
                    incorrectQuestions[unit]++;
                    selected.closest("label").addClass("incorrect");
                }
            } else {//If no selected answer
                incorrectQuestions[unit]++;
            } 
        });

        //Finds biggest elem's index in array
        let maxIncorrect = 0;
        let unitNumber = 1;
        for (let i = 1; i <= 10; i++) {
            if (incorrectQuestions[i] > maxIncorrect) {
                maxIncorrect = incorrectQuestions[i];
                unitNumber = i;
            }
        }
      
        return { score, unitNumber };
    }

    //Populates container div with array elements
    function createElements(array, container) {
        let counter = 1;
        let score = 0;
        array.forEach((obj) => {
            const element = $(`<div class="section section-${counter} unit-${obj.unit}"></div>`);
            element.html(`
                <h2>Question ${counter}</h2>
                <p>${obj.question}</p>
                <pre>
                    <code class="language-java">${obj.code}</code>
                </pre>
                <form class="question-${counter}">
                ${obj.options.map((option, index) => `
                    <label>
                        <input type="radio" name="question-${counter}" value="${option}" data-answer="${index}">
                        ${option}
                    </label>
                `).join('')}
                </form>
                <p class="explanation">${obj.explanation}</p>
            `);
          container.append(element);
          counter++;
        });
        Prism.highlightAll();

        const button = $(`<button class="btn quiz-btn">Submit Quiz</button>`);
        container.append(button);
        
        //Set all elements in the array 

        //Scores the quiz
        button.click(() => {
            stopTimer();
            $(".explanation").show();
            button.hide();

            const { score, unitNumber } = scoreQuiz(questions);

            const element = $(`<div class="section final-score"></div>`);
            element.html(`
            <h1>Your Score: ${score}/20</h1>
            <p>Here is a recommended Unit you should study: Unit ${unitNumber}</p>
            <button class="btn restart-btn">Restart Quiz</button>
            `);
            container.append(element);

            $(".restart-btn").click(function () {
                $(".end-container").hide();
                $(".quiz-container").empty();
                questions = shuffle(questionBank);
                createElements(questions, $(".quiz-container"))
                timeRemaining = 45 * 60;
                startTimer();
            });
        });
    }

    
});