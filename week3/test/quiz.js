//Kate Wise 6/28/2026- Personal Question Quiz Game

/*
1. Variable: score - number
2. Variable Q1 Prompt: favHobbyPrompt - string
3. Variable Q1 Correct: favHobbyCorrect - string
4. Variable Q2 Prompt: howManySibsPrompt - string
5. Variable Q2 Prompt: howManySibsPromptTypeConvert - number
6. Variable Q2 Correct: howManySibsCorrect - number
7. Variable Q3 Prompt: favActivityPrompt - string
8. Variable Q3 Correct: favActivityCorrect - string
9. Variable Q4 Prompt: doYogaPrompt - boolean
10. Variable Q4 Correct: doYogaCorrect - boolean
11. Variable: percentCorrect - number
*/

"use strict";

console.log("=== My Quiz Game ===");

alert(`How well do you know Kate? Here are some questions about to find out how much you know!`);

//Requirement 1. Initialize score = 0
let score = 0;

console.log("===Starting Score===");
console.log(score, typeof score);

//Requirement 2-5. Questions, answers, and how I will validate. Same structure used for all questions.
//Question 1: 
const favHobbyPrompt = prompt(`What is Kate's favorite hobby?`,`Swimming`);
const favHobbyCorrect = `Crochet`;

if ((favHobbyPrompt === null) || (favHobbyPrompt.trim() === ``)) {
   alert('Your answer is not valid and you will receive a 0 for this question');
   } else if (favHobbyPrompt.trim().toLowerCase() === favHobbyCorrect.trim().toLowerCase()) {
   score+=1;
   } else {
   (``);
   }
//Give error for invalid answer, trim and lower case to match the answers, 
//use a comparison else if statement, increment score if correct, no action for false.

console.log("===Q1 Hobby Original Answers===");
console.log(favHobbyPrompt, typeof favHobbyPrompt);
console.log(favHobbyCorrect, typeof favHobbyCorrect);
console.log("===Q1 Hobby Trim, Cased Answers===");
console.log(favHobbyPrompt.trim().toLowerCase());
console.log(favHobbyCorrect.toLowerCase());
console.log("===Auto Score 0 Evaluation===");
console.log((favHobbyPrompt === null) || (favHobbyPrompt.trim() === ``));
console.log("===Compare Final===");
console.log(favHobbyPrompt.trim().toLowerCase() === favHobbyCorrect.trim().toLowerCase());

//Question 2: 
const howManySibsPrompt = prompt(`How many siblings does Kate have?`,99);
const howManySibsPromptTypeConvert = parseInt(howManySibsPrompt)
const howManySibsCorrect = 2;

if ((howManySibsPrompt === null) || (howManySibsPrompt.trim() === ``) || (isNaN(howManySibsPromptTypeConvert))) {
   alert('Your answer is not valid and you will receive a 0 for this question');
   } else if (howManySibsPromptTypeConvert === howManySibsCorrect) {
   ++score;
   } else {
   (``);
   }
//Give error for invalid answer, trim before parse int to get rid of spaces (trim strings only), 
//use a comparison else if statement, add to score if correct, no action for false.

console.log("===Q2 Siblings Original Answers===");
console.log(howManySibsPrompt, typeof howManySibsPrompt);
console.log(howManySibsPromptTypeConvert, typeof howManySibsPromptTypeConvert);
console.log(howManySibsCorrect, typeof howManySibsCorrect);
console.log("===Auto Score 0 Evaluation===");
console.log((howManySibsPrompt === null) || (howManySibsPrompt.trim() === ``) || (isNaN(howManySibsPromptTypeConvert)));
console.log("===Compare Final===");
console.log(howManySibsPrompt === howManySibsCorrect);

//Question 3: 
const favActivityPrompt = prompt(`What is Kate's favorite activity to do with friends?`,`Rock Climbing`);
const favActivityCorrect = `Movies`;

if ((favActivityPrompt === null) || (favActivityPrompt.trim() === ``)) {
   alert('Your answer is not valid and you will receive a 0 for this question');
   } else if (favActivityPrompt.trim().toLowerCase() === favActivityCorrect.trim().toLowerCase()) {
   score+=1;
   } else {
   (``);
   }
//Give error for invalid answer, trim and lower case to match the answers, 
//use a comparison else if statement, increment score if correct, no action for false.

console.log("===Q3 Activity Original Answers===");
console.log(favActivityPrompt, typeof favActivityPrompt);
console.log(favActivityCorrect, typeof favActivityCorrect);
console.log("===Q3 Activity Trim, Cased Answers===");
console.log(favActivityPrompt.trim().toLowerCase());
console.log(favActivityCorrect.toLowerCase());
console.log("===Auto Score 0 Evaluation===");
console.log((favActivityPrompt === null) || (favActivityPrompt.trim() === ``));
console.log("===Compare Final===");
console.log(favActivityPrompt.trim().toLowerCase() === favActivityCorrect.trim().toLowerCase());

//Question 4: 
const doYogaPrompt = confirm(`Does Kate like doing yoga?
    Click OK for YES 
    Click Cancel for NO`);
const doYogaCorrect = true;

(doYogaPrompt !== doYogaCorrect) ? `` : ++score ;
//Since boolean is default formatted no need to trim or lowercase, use comparison ?, 
//this time with not equal statement, if they do not match no action, if they do match increment.

console.log("===Q4 Yoga Original Answers===");
console.log(doYogaPrompt, typeof doYogaPrompt);
console.log(doYogaCorrect, typeof doYogaCorrect);
console.log("===Compare Final===");
console.log(doYogaPrompt != doYogaCorrect);

//Requirement 6. Calculate the percentage correct
const percentCorrect = (score/4)*100;
//I will divide the number correct by the total number of questions then multiply by 100, use () to make sure math
//occurs in the right order.

//Updated Score
console.log("===Ending Score===");
console.log(score, typeof score);

//Percentage calc
console.log("===Percentage Calculation Result===");
console.log(percentCorrect, typeof percentCorrect);

//Requirement 7. Final summary logic- Feedback to user on how well they know Kate.
if (score === 0) {
   alert(`You don't know Kate at all! 0%, No answers correct. Maybe are thinking of another Kate?`);
   } else if ((score < 3) && (percentCorrect <= 50)) {
   alert(`You are familiar with Kate but not best friends. You got ${percentCorrect}% of the questions right. Maybe spend some more time together, like at the movies!`);
   } else if ((score < 4) && (percentCorrect === 75)) {
   alert(`You and Kate are pretty close! You got ${percentCorrect}% of the questions right. Kate still has more mysteries for you to find out...`);
   } else if ((score === 4) && (percentCorrect === 100)) {
   alert(`You and Kate are BFFs! You got all the questions right! Such a good listener...`);
   } else {
   alert(`Ok, something weird is going on here. Check your score and % correct to figure this out!`);
   }
//This if statement starts if someone got 0 answers right and moves up to 2 or less, 3, 4, or none of the
//above with appropriate messages.
