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

//1. Select the elements from the HTML. Buttons, sections, forms.
//const buttons = document.querySelector(`#buttons`);
const dcButton = querySelector(`.universe-button[data-uni='dc']`);
const marvelButton = querySelector(`.universe-button[data-uni='marvel']`);
const gothamButton = querySelector(`.dc-button[data-loc='gotham']`);
const metropolisButton = querySelector(`.dc-button[data-loc='metropolis']`);
const fawcettButton = querySelector(`.dc-button[data-loc='fawcett']`);
const nyButton = querySelector(`.marvel-button[data-loc='ny']`);
const asgardButton = querySelector(`.marvel-button[data-loc='asgard']`);
const kamartajButton = querySelector(`.marvel-button[data-loc='kamartaj']`);
const villainButton = querySelector(`.kind-button[data-theme='villain']`);
const disasterButton = querySelector(`.kind-button[data-theme='disaster']`);
const adventureButton = querySelector(`.kind-button[data-theme='adventure']`);
const submitAdvButton = querySelector(`.submit-button[data-ent='adventure']`);
const submitVilButton = querySelector(`.submit-button[data-ent='villain']`);
const submitDisButton = querySelector(`.submit-button[data-ent='disaster']`);
const resetButton = querySelector(`.reset-button[data-theme='clearall']`);

const universeSection = document.querySelector(`#universe`);
const themeSection = document.querySelector(`#kind-of-story`);
const settingSection = document.querySelector(`#setting`);
const entriesSection = document.querySelector(`#madlib-entries`);
const madlibSection = document.querySelector(`#generated-madlib`);
const resetSection = document.querySelector(`#begin-again`);

const villainForm = document.querySelector(`#villain-form`);
const disasterForm = document.querySelector(`#disaster-form`);
const adventureForm = document.querySelector(`#adventure-form`);

let universeChosen;
let themeChosen;
let locationChosen;



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
    dc:     {name: `DC`, background: `#FF75E4`, textcolor: `#300028`},
    marvel: {name: `Marvel`, background: `#4E3F60`, textcolor: `#9B9D66`},
    reset:  {name: ``, background: `#FFFFFF`, textcolor: `#000000`}
};

const themeSettings = {
    adventure:  {name: `Adventure`, storyBackground: `#FFFD37`, font: `Georgia`},
    villain:    {name: `Villain`, storyBackground: `#E82100`, font: `Monaco`},
    disaster:   {name: `Disaster`, storyBackground: `#4F666A`, font: `Helvetica`},
    reset:      {name: ``, storyBackground: ``, font: `Arial`}
}

const locationSettings = {
    gotham:         {name: `Gotham`, cityImg: `Georgia`},
    metropolis:     {name: `Metropolis`, cityImg: `Georgia`},
    fawcett:        {name: `Fawcett City`, cityImg: `Georgia`},
    ny:             {name: `New York`, cityImg: `Georgia`},
    asgard:         {name: `Asgard`, cityImg: `Georgia`},
    kamartaj:       {name: `Kamar-Taj`, cityImg: `Georgia`},
    reset:          {name: ``, cityImg: ``}
}

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
    document.body.style.backgroundColor = univ.background;
    document.body.style.color = univ.textcolor;
    universeSection.style.display = `none`;
    themeSection.style.display = `block`;
    settingSection.style.display = `none`;
    entriesSection.style.display = `none`;
    madlibSection.style.display = `none`;
    resetSection.style.display = `block`;
    universeChosen = univ.name;
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
    universeSection.style.display = `none`;
    themeSection.style.display = `block`;
    settingSection.style.display = `none`;
    entriesSection.style.display = `none`;
    madlibSection.style.display = `none`;
    resetSection.style.display = `block`;
    universeChosen = univ.name;
}

function themeSelect(theme) {
    const them = themeSettings[theme];
    madlibSection.style.backgroundColor = them.storyBackground;
    madlibSection.body.style.font = them.font;
    universeSection.style.display = `none`;
    themeSection.style.display = `none`;
    settingSection.style.display = `block`;
    entriesSection.style.display = `none`;
    madlibSection.style.display = `none`;
    resetSection.style.display = `block`;
    themeChosen = them.name;  
}

function locationSelect(location) {
    const loc = locationSettings[location];
    document.body.style.backgroundImage = loc.cityImg;
    universeSection.style.display = `none`;
    themeSection.style.display = `none`;
    settingSection.style.display = `none`;
    entriesSection.style.display = `block`;
    madlibSection.style.display = `none`;
    resetSection.style.display = `block`;
    locationChosen = loc.name;
}

function submitSelect() {
    universeSection.style.display = `none`;
    themeSection.style.display = `none`;
    settingSection.style.display = `none`;
    entriesSection.style.display = `none`;
    madlibSection.style.display = `block`;
    resetSection.style.display = `block`;
}

function resetSelect(universe, theme, location){
    const univ = universeSettings[universe];
    const them = themeSettings[theme];
    const loc = locationSettings[location];
    gothamButton.style.display = `none`;
    metropolisButton.style.display = `none`;
    fawcettButton.style.display = `none`;
    nyButton.style.display = `none`;
    asgardButton.style.display = `none`;
    kamartajButton.style.display = `none`;
    document.body.style.backgroundColor = univ.background;
    document.body.style.color = univ.textcolor;
    madlibSection.style.backgroundColor = them.storyBackground;
    madlibSection.body.style.font = them.font;
    document.body.style.backgroundImage = loc.cityImg;
    universeSection.style.display = `block`;
    themeSection.style.display = `none`;
    settingSection.style.display = `none`;
    entriesSection.style.display = `none`;
    madlibSection.style.display = `none`;
    resetSection.style.display = `none`;
    universeChosen = univ.name;
    themeChosen = them.name;
    locationChosen = loc.name;
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

function handlerGothamClick() {
    locationSelect(`gotham`);
}

function handlerMetropolisClick() {
    locationSelect(`metropolis`);
}

function handlerFawcettClick() {
    locationSelect(`fawcett`);
}

function handlerNYClick() {
    locationSelect(`ny`);
}

function handlerAsgardClick() {
    locationSelect(`asgard`);
}

function handlerKamarTajClick() {
    locationSelect(`kamartaj`);
}

function handlerVillainClick() {
    themeSelect(`villain`);
}

function handlerDisasterClick() {
    themeSelect(`disaster`);
}

function handlerAdventureClick() {
    themeSelect(`adventure`);
}

function handlerSubmitAdvClick() {
    submitSelect();
}

function handlerSubmitVilClick() {
    submitSelect();
}

function handlerSubmitDisClick() {
    submitSelect();
}

function handlerResetClick() {
    resetUniverseSelect(`reset`,`reset`,`reset`);
}

//6. Create Event Listeners for each mood that calls the handler upon a click.
dcButton.addEventListener('click', handlerDCClick);

marvelButton.addEventListener('click', handlerMarvelClick);

gothamButton.addEventListener('click', handlerGothamClick);

metropolisButton.addEventListener('click', handlerMetropolisClick);

fawcettButton.addEventListener('click', handlerFawcettClick);

nyButton.addEventListener('click', handlerNYClick);

asgardButton.addEventListener('click', handlerAsgardClick);

kamartajButton.addEventListener('click', handlerKamarTajClick);

adventureButton.addEventListener('click', handlerAdventureClick);

villainButton.addEventListener('click', handlerVillainClick);

disasterButton.addEventListener('click', handlerDisasterClick);

submitAdvButton.addEventListener('click', handlerSubmitAdvClick);

submitVilButton.addEventListener('click', handlerSubmitVilClick);

submitDisButton.addEventListener('click', handlerSubmitDisClick);

resetButton.addEventListener('click', handlerResetClick);

