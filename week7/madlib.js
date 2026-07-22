//Kate Wise 07/26/2026- Final Project MadLibs

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

//1. Select the elements from the HTML.
const buttons = document.querySelector(`#buttons`);
const dcButton = buttons.querySelector(`.universe-button[data-uni='dc']`);
const marvelButton = buttons.querySelector(`.universe-button[data-uni='marvel']`);
const gothamButton = buttons.querySelector(`.dc-button[data-loc='gotham']`);
const metropolisButton = buttons.querySelector(`.dc-button[data-loc='metropolis']`);
const fawcettButton = buttons.querySelector(`.dc-button[data-loc='fawcett']`);
const nyButton = buttons.querySelector(`.marvel-button[data-loc='ny']`);
const asgardButton = buttons.querySelector(`.marvel-button[data-loc='asgard']`);
const kamartajButton = buttons.querySelector(`.marvel-button[data-loc='kamartaj']`);
const villainButton = buttons.querySelector(`.kind-button[data-theme='villain']`);
const disasterButton = buttons.querySelector(`.kind-button[data-theme='disaster']`);
const adventureButton = buttons.querySelector(`.kind-button[data-theme='adventure']`);
const resetButton = buttons.querySelector(`.reset-button[data-theme='clearall']`);


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

//2. Create my mood themes; names, colors that contrast and valid quotes.
const universeSettings = {
    dc:     {background: `#FF75E4`, textcolor: `#300028`},
    marvel: {background: `#4E3F60`, textcolor: `#9B9D66`},
    reset:  {background: `#FFFFFF`, textcolor: `#000000`}
};

const moods = {
    happy:      { name: `Happy`, background: `#FFFD37`, textcolor: `#A52A2A`, quote: `The Constitution only gives people the right to pursue happiness. You have to catch it yourself. -Benjamin Franklin`},
    excited:    { name: `Excited`, background: `#FF75E4`, textcolor: `#300028`, quote: `People criticised me for using too many exclamation marks and the word "awesome" too much, but that's just me. -Ella Woodward`},
    curious:    { name: `Curious`, background: `#3BA3A9`, textcolor: `#A9413B`, quote: `Scientists have become the bearers of the torch of discovery in our quest for knowledge. -Stephen Hawking`},        
    sad:        { name: `Sad`, background: `#4F666A`, textcolor: `#C86A46`, quote: `For all sad words of tongue and pen, the saddest are these "It might have been". -John Greenleaf Wittier`},
    angry:      { name: `Angry`, background: `#E82100`, textcolor: `#2100E8`, quote: `When angry count to ten before you speak. If very angry, count to one hundred. -Thomas Jefferson`},
    hungry:     { name: `Hungry`, background: `#4E3F60`, textcolor: `#9B9D66`, quote: `I think you've got to keep it simple, keep it fresh. Stay away from all that processed stuff, read the labels. -Emeril Lagasse`},
    tired:      { name: `Tired`, background: `#636150`, textcolor: `#F5F0EB`, quote: `Big jobs usually go to the men who prove their ability to outgrow small ones. -Theodore Roosevelt`},
    reset:      { name: `Choose Again`, background: `#FFFFFF`, textcolor: `#000000`, quote: `You need a mood to be inspired!`}
};

//3. Create the function that applies the mood's theme.
function marvelUniverseSelect(universe) {
    const univ = universeSettings[universe];
    gothamButton.style.display = `none`;
    metropolisButton.style.display = `none`;
    fawcettButton.style.display = `none`;
    nyButton.style.display = `block`;
    asgardButton.style.display = `block`;
    kamartajButton.style.display = `block`;
    document.body.style.backgroundColor = mood.background;
    document.body.style.color = mood.textcolor;
}

function dcUniverseSelect(universe) {
    const univ = universeSettings[universe];
    gothamButton.style.display = `block`;
    metropolisButton.style.display = `block`;
    fawcettButton.style.display = `block`;
    nyButton.style.display = `none`;
    asgardButton.style.display = `none`;
    kamartajButton.style.display = `none`;
    document.body.style.backgroundColor = univ.background;
    document.body.style.color = univ.textcolor;
}

function resetUniverseSelect(universe) {
    const univ = universeSettings[universe];
    gothamButton.style.display = `none`;
    metropolisButton.style.display = `none`;
    fawcettButton.style.display = `none`;
    nyButton.style.display = `none`;
    asgardButton.style.display = `none`;
    kamartajButton.style.display = `none`;
    document.body.style.backgroundColor = univ.background;
    document.body.style.color = univ.textcolor;
}


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

//4. Create an Event Handler (function) for each mood that calls the function to apply theme.
function handlerMarvelClick() {
    marvelUniverseSelect(`marvel`);
}

function handlerDCClick() {
    dcUniverseSelect(`dc`);
}

function handlerResetClick() {
    resetUniverseSelect(`reset`);
}

//6. Create Event Listeners for each mood that calls the handler upon a click.
dcButton.addEventListener('click', handlerDCClick);

marvelButton.addEventListener('click', handlerMarvelClick);

resetButton.addEventListener('click', handlerResetClick);




