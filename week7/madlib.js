//Kate Wise 07/26/2026- Final Project MadLibs

/*
1. 15 Buttons = each ref html button, one is a reset
2. 6 Sections = each ref html div container
3. 3 Forms = each ref html form container
4. 2 Split Locations = each ref html buttons for locations split by universe
5. 3 Settings = ref for name and appearance changes based on buttons chosen
6. universeChosen = string
7. themeChosen = string
8. locationChosen = string
9. 5 Functions based on button selections
10. 15 Handlers = based on listener activation feeds into appropriate function
11. 15 Event Listeners = based on variable button clicked, call appropriate handler
12. 
13. 
14. 
15. 

Steps- 
1. What am I looking for or feeding into in html
2. Set themes/ functions /forms
3. Create listenter and handler function for each mood

*/

`use strict`;

//1. Select the elements from the HTML. Buttons, sections, forms.
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
const submitFormButton = document.querySelector(`.submit-button[data-ent='sub-entry']`);
const resetButton = document.querySelector(`.reset-button[data-start='clearall']`);

const dcOptions = document.querySelector(`#dc-options`);
const marvelOptions = document.querySelector(`#marvel-options`);

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

let myMadlibFulfilled;
let myMadlibTitle;

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
    reset:      {name: ``, storyBackground: ``, font: `Arial, sans-serif`}
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

//3. Create the functions that apply the themes and content.
function universeSelect(universe) {
    const univ = universeSettings[universe];
    if (universe === `dc`) {
        dcOptions.style.display = `block`;
        marvelOptions.style.display = `none`;
        } else if (universe === `marvel`) {
        marvelOptions.style.display = `block`;
        dcOptions.style.display = `none`;
        }
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
    madlibSection.style.fontFamily = them.font;
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

function submitSelect() {
    universeSection.style.display = `none`;
    themeSection.style.display = `none`;
    settingSection.style.display = `none`;
    entriesSection.style.display = `none`;
    madlibSection.style.display = `block`;
    resetSection.style.display = `block`;
    if (themeChosen === `Disaster`) {
        let disaster = {
            season: seasonInput.value,
            disaster: disasterInput.value,
            location: location1Input.value,
            hero: nameSuperhero1Input.value,
            vehicle: vehicle1Input.value,
            sidekick: sidekickInput.value,
            historicIndividual: historicPersonInput.value,
            leader: leaderInput.value,
            gift: giftInput.value
        };
        myMadlibTitle = `Deal with a ${themeChosen} in ${universeChosen}`;
        myMadlibFulfilled = `It was an early ${disaster.season} day when the alarm went off on the ${locationChosen} Monitors.  
            A ${disaster.disaster} was occurring in ${disaster.location}.  ${disaster.hero} jumped into action!  
            They raced to the hanger and jumped in their trusty ${disaster.vehicle}.  In no time at all they had 
            reached ${disaster.location}. With the assistance of their true blue friend ${disaster.sidekick} they 
            swiftly began to rescue the civilians and even managed to save a statue of ${disaster.historicIndividual} 
            that was the pride and joy of the locals. As the heroes did a final check to make sure everyone was ok the 
            ${disaster.leader}  presented ${disaster.hero}  with a thank you gift of ${disaster.gift}. The heroes 
            proudly returned to base knowing they had saved the day once again!`;
    } else if (themeChosen === `Villain`) {
        let villain = {
            civHero: cnameHeroInput.value,
            hobby: hobbyInput.value,
            restaurant: restaurantInput.value,
            civVillain: cnameVillainInput.value,
            adverbly: sighAdverbInput.value,
            villain: nameVillain1Input.value,
            room: roomInput.value,
            fightVerb: fightMoveInput.value
        };
        myMadlibTitle = `Fight with a ${themeChosen} in ${universeChosen}`;
        myMadlibFulfilled = `${villain.civHero} was taking a rare day off, but unfortunately were not enjoying it as much 
            as they should.  They could be at home ${villain.hobby} or at a nice restaurant like ${villain.restaurant}.  
            Instead they had been invited to a party in ${locationChosen} thrown by ${villain.civVillain}. Ordinarily this 
            would be a chance to investigate what ${villain.civVillain} might be up to but their most recent scheme had been 
            foiled and they were still constructing their next plot.  This party was a complete waste of time.  Just as they 
            were about to ${villain.adverbly} sigh, a glint outside the window caught their eye- it was ${villain.villain} and
            their henchmen about to rob the party goers!  Trying not to be noticed ${villain.civHero} quickly snuck into 
            ${villain.civVillain}'s ${villain.room} to change into their costume.  As they swiftly circled back to the party 
            they heard ${villain.villain}'s men break in and ask for everyone's valuables.  With no time to spare they 
            dramatically burst into the party and ${villain.fightVerb} ${villain.villain}.  While the fight was short it 
            broken ${villain.civHero}'s boredom.  Bonus Win- they got to go home as soon as the police showed up.`
    } else if (themeChosen === `Adventure`) {
        let adventure = {
            place: placeWatchInput.value,
            transitional: transitionalInput.value,
            hero1: nameSuperhero2Input.value,
            transportation: vehicle2Input.value,
            ecosystem: ecosystemInput.value,
            plant: plantInput.value,
            creature: creatureInput.value,
            hero2: nameSuperhero3Input.value,
            number1: number1Input.value,
            number2: number2Input.value,
            time: timeInput.value,
            junior: jrTeamInput.value
        };
        myMadlibTitle = `Go on an ${themeChosen} in ${universeChosen}`;
        myMadlibFulfilled = `It was a calm day in ${locationChosen} when suddenly a beep came from the computer, 
            ${adventure.place} monitors had gone off- a new ${adventure.transitional} had been found leading to an unknown 
            area.  Locals were cautious about entering, after all ${adventure.place} could be a dangerous place- obviously 
            this is a job for ${adventure.hero1}!  They quickly travelled via ${adventure.transportation} and were soon 
            standing in the ${adventure.transitional} leading to an unexplored ${adventure.ecosystem}.  Carefully they 
            entered and began to take readings of the nearest ${adventure.plant}.  Suddenly a ${adventure.creature} raced 
            toward them!  With barely a second to spare they dived out of the way!  They quickly used their communicator to 
            call in ${adventure.hero2} for backup.  Luckily it seemed the ${adventure.creature} was just hungry and more 
            interested in the ${adventure.plant}  than the heroes. Since they were already both there they decided to work 
            together; ${adventure.hero1} managed to map ${adventure.number1} miles and ${adventure.hero2} ${adventure.number2} 
            miles in just ${adventure.time} - covering a total of ${parseFloat(adventure.number1) + parseFloat(adventure.number2)} 
            miles of ${adventure.ecosystem} without angering the local wildlife.  Cataloging all the new plants and animals will 
            obviously take a lot longer… maybe this would be a good job for the ${adventure.junior}, a learning experience at the 
            least!  After all it is not everyday you see a ${adventure.creature}.`
    }
    document.querySelector(`#my-madlib-title`).textContent = myMadlibTitle;
    document.querySelector(`#my-madlib-text`).textContent = myMadlibFulfilled;          
}

function resetSelect(universe, theme, location){
    const univ = universeSettings[universe];
    const them = themeSettings[theme];
    const loc = locationSettings[location];
    dcOptions.style.display = `none`;
    marvelOptions.style.display = `none`;
    document.body.style.backgroundColor = univ.background;
    document.body.style.color = univ.textcolor;
    madlibSection.style.backgroundColor = them.storyBackground;
    madlibSection.style.fontFamily = them.font;
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
    madLibTitle = ``;
    adventureFulfilled = ``;
    villainFulfilled = ``;
    disasterFulfilled = ``;
}

//   quote.textContent = mood.quote;
//   moodSelected.textContent = mood.name;

//4. Create an Event Handler (function) for each mood that calls the function to apply theme.
function handlerMarvelClick() {
    universeSelect(`marvel`);
}

function handlerDCClick() {
    universeSelect(`dc`);
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

function handlerSubmitClick() {
    submitSelect();
}

function handlerResetClick() {
    resetSelect(`reset`,`reset`,`reset`);
}

//5. Create Event Listeners for each mood that calls the handler upon a click.
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

submitFormButton.addEventListener('click', handlerSubmitClick);

resetButton.addEventListener('click', handlerResetClick);




