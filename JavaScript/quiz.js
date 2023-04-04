import { questionBank } from "./questionBank.js";
"use strict";
$(document).ready(function(){
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    function submitQuiz() {
        let score = 0;
        const numQuestions = selectedQuestions.length;
        const unitStats = {}; // object to store the number of correct answers for each unit type

        selectedQuestions.forEach((question, index) => {
            const answer = quizForm.elements[`answer${index}`].value;
            if (answer === question.answer) {
                score++;
                if (unitStats[question.unit]) {
                    unitStats[question.unit]++;
                } else {
                    unitStats[question.unit] = 1;
                }
            } else {
                if (!unitStats[question.unit]) {
                    unitStats[question.unit] = 0;
                }
            }
        });

        const scorePercentage = Math.round(score / numQuestions * 100);

        quizForm.innerHTML = `
        <h2>Your score: ${score} out of ${numQuestions} (${scorePercentage}%)</h2>
        `;

        // now you can use the unitStats object to recommend the unit type(s) the user should focus on
        const unitsSortedByCorrectAnswers = Object.keys(unitStats).sort((a, b) => unitStats[b] - unitStats[a]);
        const maxCorrectAnswers = unitStats[unitsSortedByCorrectAnswers[0]];
        const recommendedUnits = unitsSortedByCorrectAnswers.filter(unit => unitStats[unit] === maxCorrectAnswers);
        if (recommendedUnits.length === 1) {
            quizForm.innerHTML += `
                <p>We recommend you focus on the ${recommendedUnits[0]} unit.</p>
            `;
        } else {
        quizForm.innerHTML += `
            <p>We recommend you focus on the following units:</p>
            <ul>
            ${recommendedUnits.map(unit => `<li>${unit}</li>`).join("")}
            </ul>
            `;
        }
    }      
});