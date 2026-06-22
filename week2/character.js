//Kate Wise 6/21/2026- Adventure Character Creator

/*
1. Variable: adventureSetting - string
2. Variable: myName - string
3. Variable: charName - string
4. Variable: pet - from prompt
5. Variable: superpower - string from prompt
6. Variable: yearsTrainingText - string from prompt
7. Variable: yearsTraining - number
8. Variable: powerLevel - number calc
9. Variable: likesFighting - yes/no
*/

"use strict";

//Question 3 Choose setting and Question 4 set my name for intro
const adventureSetting = `floating sky city`;
const myName = `Kate`; 
//Create initial unchanging variables, my name and the location of the adventure.

//Question 4 Welcome message with setting and my name.
alert(`Welcome to the wonderful ${adventureSetting} named Volans.

    Governor ${myName} is ready to fund your explorations, but first we need to get your adventurer ready.
    
    I hope you are ready to chose your starting stats.`);

//Question 5 Prompt for character name
const charName = prompt(`What would you like to name your adventurer?`,`Nora the Nomad`);

//Question 6 Prompt for pet
const pet = prompt(`What type of pet or companion would you like to have join you on your adventure?`,`Pegasus`);

//Question 7 Prompt for superpower
const superpower = prompt(`What superpower does your adventurer have?`, `Precognition`);

//Question 8 Prompt years of training, second variable for number
const yearsTrainingText = prompt(`How many years training has your adventurer had?`,`6`);

const yearsTraining = Number(yearsTrainingText);

console.log(yearsTrainingText, typeof yearsTrainingText);
console.log(yearsTraining, typeof yearsTraining);
//Prompt response it automatically text, secondary variable changes it to number. Confirm with Console.log.

//Question 8 Power level calc
const powerLevel = yearsTraining * 10;

//Question 9 Confirm likes fighting
const likesFighting = confirm(`Does ${charName} like fighting monsters?
    Click OK for YES 
    Click Cancel for NO`);

console.log(likesFighting, typeof likesFighting);
//Add console log to view datatype.

//Question 10 Loading/Preparing message
alert(`Gathering magic for ${charName}...almost ready!`);

//Question 11 Final Character screen
alert(`===========================================
    Name: ${charName}
    Pet: ${pet}
    Superpower: ${superpower}
    Power Level: ${powerLevel}
    Monster fighter? ${likesFighting ? "Yes" : "No"}

Welcome great adventurer ${charName} to Volans, the ${adventureSetting}!

You are ready to begin exploring! Governor ${myName} looks foward to hearing about all you discover as you travel with your brave companion ${pet}.

Your awe inspiring power of ${superpower} will hopefully serve and protect you well as you wander.
    =========================================== `);
