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
const dcButton = document.querySelector(`.universe-button[data-uni='dc']`);
const marvelButton = document.querySelector(`.universe-button[data-uni='marvel']`);
const gothamButton = document.querySelector(`.dc-button[data-loc='gotham']`);
const metropolisButton = document.querySelector(`.dc-button[data-loc='metropolis']`);
const fawcettButton = document.querySelector(`.dc-button[data-loc='fawcett']`);
const nyButton = document.querySelector(`.marvel-button[data-loc='ny']`);
const asgardButton = document.querySelector(`.marvel-button[data-loc='asgard']`);
const kamartajButton = document.querySelector(`.marvel-button[data-loc='kamartaj']`);
const villainButton = document.querySelector(`.kind-button[data-theme='villain']`);
const disasterButton = document.querySelector(`.kind-button[data-theme='disaster']`);
const adventureButton = document.querySelector(`.kind-button[data-theme='adventure']`);
const submitAdvButton = document.querySelector(`.submit-button[data-ent='adventure']`);
const submitVilButton = document.querySelector(`.submit-button[data-ent='villain']`);
const submitDisButton = document.querySelector(`.submit-button[data-ent='disaster']`);
const resetButton = document.querySelector(`.reset-button[data-theme='clearall']`);

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
    gotham:         {name: `Gotham`, cityImg: ``},
    metropolis:     {name: `Metropolis`, cityImg: ``},
    fawcett:        {name: `Fawcett City`, cityImg: ``},
    ny:             {name: `New York`, cityImg: ``},
    asgard:         {name: `Asgard`, cityImg: ``},
    kamartaj:       {name: `Kamar-Taj`, cityImg: ``},
    reset:          {name: ``, cityImg: ``}
}

//3. Create the function that applies the mood's theme.
function marvelUniverseSelect(universe) {
    const univ = universeSettings[universe];
    gothamButton.style.display = `none`;
    metropolisButton.style.display = `none`;
    fawcettButton.style.display = `none`;
    nyButton.style.display = `inline block`;
    asgardButton.style.display = `inline block`;
    kamartajButton.style.display = `inline block`;
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
    gothamButton.style.display = `inline block`;
    metropolisButton.style.display = `inline block`;
    fawcettButton.style.display = `inline block`;
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
    madlibSection.style.font = them.font;
    universeSection.style.display = `none`;
    themeSection.style.display = `none`;
    settingSection.style.display = `block`;
    entriesSection.style.display = `none`;
    madlibSection.style.display = `none`;
    resetSection.style.display = `block`;
    themeChosen = them.name;  
    if (theme === `villain`) {
        villainForm.style.display = `block`;
    } else if (theme === `adventure`) {
        adventureForm.style.display = `block`;
    } else if (theme === `disaster`) {
        disasterForm.style.display = `block`;
    }
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

function submitSelect(formSubmitted) {
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
    madlibSection.style.font = them.font;
    document.body.style.backgroundImage = loc.cityImg;
    universeSection.style.display = `block`;
    themeSection.style.display = `none`;
    settingSection.style.display = `none`;
    entriesSection.style.display = `none`;
    madlibSection.style.display = `none`;
    resetSection.style.display = `none`;
    villainForm.style.display = `none`;
    adventureForm.style.display = `none`;
    disasterForm.style.display = `none`;
    universeChosen = univ.name;
    themeChosen = them.name;
    locationChosen = loc.name;
}

//   quote.textContent = mood.quote;
 //   moodSelected.textContent = mood.name;

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
    submitSelect(`adventure`);
}

function handlerSubmitVilClick() {
    submitSelect(`villain`);
}

function handlerSubmitDisClick() {
    submitSelect(`disaster`);
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


