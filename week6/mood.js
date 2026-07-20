//Kate Wise 07/19/2026- Mood Changer Project

/*
1. moodSelected = string, html mood title
2. quote = string, html mood quote
3. buttons = ref html div container for all buttons
4. happyButton = ref html button labeled happy
5. excitedButton = ref html button labeled excited
6. curiousButton = ref html button labeled curious
7. sadButton = ref html button labeled sad
8. angryButton = ref html button labeled angry
9. hungryButton = ref html button labeled hungry
10. tiredButton = ref html button labeled tired
11. resetButton = ref html button labeled reset

12. moods = table of mood settings

13. changeMood = function to reuse to apply mood settings based on choice

14. Event Handlers (8) = one for each mood, based on listener activation feeds into changeMood function

15. Event Listeners (8) = one for each mood, based on variable button clicked, call handler

Steps- 
1. What am I looking for or feeding into in html
2. Set mood themes
3. Create listenter and handler function for each mood

*/

`use strict`;

//1. Select the elements from the HTML, need the mood, quote and the button div, each button
const moodSelected = document.querySelector(`#you-feel`);
const quote = document.querySelector(`#mood-quote`);
const buttons = document.querySelector(`#buttons`);
const happyButton = buttons.querySelector(`.mood-button[data-mood='happy']`);
const excitedButton = buttons.querySelector(`.mood-button[data-mood='excited']`);
const curiousButton = buttons.querySelector(`.mood-button[data-mood='curious']`);
const sadButton = buttons.querySelector(`.mood-button[data-mood='sad']`);
const angryButton = buttons.querySelector(`.mood-button[data-mood='angry']`);
const hungryButton = buttons.querySelector(`.mood-button[data-mood='hungry']`);
const tiredButton = buttons.querySelector(`.mood-button[data-mood='tired']`);
const resetButton = buttons.querySelector(`.mood-button[data-mood='reset']`); 

console.log(`===Global Variables===`);
console.log(`===Mood Title HTML===`);
console.log(moodSelected);
console.log(`===Mood Quote HTML===`);
console.log(quote);
console.log(`===Buttons HTML===`);
console.log(buttons);
console.log(`===Happy Button HTML===`);
console.log(happyButton);
console.log(`===Excited Button HTML===`);
console.log(excitedButton);
console.log(`===Curious Button HTML===`);
console.log(curiousButton);
console.log(`===Sad Button HTML===`);
console.log(sadButton);
console.log(`===Angry Button HTML===`);
console.log(angryButton);
console.log(`===Hungry Button HTML===`);
console.log(hungryButton);
console.log(`===Tired Button HTML===`);
console.log(tiredButton);
console.log(`===Reset Button HTML===`);
console.log(resetButton);

//2. Create my mood themes; colors that contrast and valid quotes.
const moods = {
    happy:      { name: `Happy`, background: `#FFFD37`, textcolor: `#A52A2A`, quote: `The Constitution only gives people the right to pursue happiness. You have to catch it yourself. -Benjamin Franklin`},
    excited:    { name: `Excited`, background: `#FF75E4`, textcolor: `#300028`, quote: `People criticised me for using too many exclamation marks and the word "awesome" too much, but that's just me. -Ella Woodward`},
    curious:    { name: `Curious`, background: `#3BA3A9`, textcolor: `#A9603B`, quote: `Scientists have become the bearers of the torch of discovery in our quest for knowledge. -Stephen Hawking`},        
    sad:        { name: `Sad`, background: `#4F666A`, textcolor: `#AA604F`, quote: `For all sad words of tongue and pen, the saddest are these "It might have been". -John Greenleaf Wittier`},
    angry:      { name: `Angry`, background: `#E82100`, textcolor: `#2100E8`, quote: `When angry count to ten before you speak. If very angry, count to one hundred. -Thomas Jefferson`},
    hungry:     { name: `Hungry`, background: `#4E3F60`, textcolor: `#3F604E`, quote: `I think you've got to keep it simple, keep it fresh. Stay away from all that processed stuff, read the labels. -Emeril Lagasse`},
    tired:      { name: `Tired`, background: `#636150`, textcolor: `#F5F0EB`, quote: `Big jobs usually go to the men who prove their ability to outgrow small ones. -Theodore Roosevelt`},
    reset:      { name: `Choose Again`, background: `#FFFFFF`, textcolor: `#000000`, quote: `You need a mood to be inspired!`}
};

//3. Create the function that applies the theme
function changeMood(moodName) {
    const mood = moods[moodName];
    document.body.style.backgroundColor = mood.background;
    document.body.style.color = mood.textcolor;
    quote.textContent = mood.quote;
    moodSelected.textContent = mood.name;

    console.log(`===Change Mood Function===`);
    console.log(`===Parameter Fed In===`);
    console.log(moodName);
    console.log(`===Mood from Moods Table===`);
    console.log(mood);
    console.log(`===Mood Background Color===`);
    console.log(mood.background);
    console.log(`===Mood Text Color===`);
    console.log(mood.textcolor);
    console.log(`===Mood Quote===`);
    console.log(mood.quote);
    console.log(`===Mood Title===`);
    console.log(mood.name);
}

//4. Create an Event Handler (function) for each mood.
function handlerHappyClick() {
    changeMood(`happy`);
}

function handlerExcitedClick() {
    changeMood(`excited`);
}

function handlerCuriousClick() {
    changeMood(`curious`);
}

function handlerSadClick() {
    changeMood(`sad`);
}

function handlerAngryClick() {
    changeMood(`angry`);
}

function handlerHungryClick() {
    changeMood(`hungry`);
}

function handlerTiredClick() {
    changeMood(`tired`);
}

function handlerResetClick() {
    changeMood(`reset`);
}

//6. Create Event Listeners for each mood.
happyButton.addEventListener('click', handlerHappyClick);

excitedButton.addEventListener('click', handlerExcitedClick);

curiousButton.addEventListener('click', handlerCuriousClick);

sadButton.addEventListener('click', handlerSadClick);

angryButton.addEventListener('click', handlerAngryClick);

hungryButton.addEventListener('click', handlerHungryClick);

tiredButton.addEventListener('click', handlerTiredClick);

resetButton.addEventListener('click', handlerResetClick);

