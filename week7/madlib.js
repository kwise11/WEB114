//Kate Wise 07/26/2026- Final Project MadLibs

/*
1. 12 Buttons = each ref html button, one is a reset
2. 6 Sections = each ref html div container
3. 3 Forms = each ref html form container
4. 2 Split Locations = each ref html buttons for locations split by universe
5. 2 Image References = each ref locations where image data will be fed
6. 1 Madlib Body Reference = ref location for the bulk of MadLib Text
6. 6 Holders for Selections Made throughout process
7. 3 Const Settings = ref for name and appearance changes based on buttons chosen
8. 5 Functions based on button selections
9. 15 Handlers = based on listener activation feeds into appropriate function
10. 15 Event Listeners = based on variable button clicked, call appropriate handler


Steps- 
1. What am I looking for or feeding into in html
   Variables to hold choices or settings collected
2. Set themes/ functions /forms
3. Create listenter and handler function for each button/form
*/

`use strict`;

//1. Select the elements from the HTML. Buttons, sections, forms, variables.
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

const resetButton = document.querySelector(`.reset-button[data-start='clearall']`);

const dcOptions = document.querySelector(`#dc-options`);
const marvelOptions = document.querySelector(`#marvel-options`);

const universeSection = document.querySelector(`#universe`);
const themeSection = document.querySelector(`#kind-of-story`);
const settingSection = document.querySelector(`#setting`);
const entriesSection = document.querySelector(`#madlib-entries`);
const madlibSection = document.querySelector(`#generated-madlib`);
const resetSection = document.querySelector(`#begin-again`);

const backgroundChosen = document.querySelector(`#set-background-img`);
const footerChosen = document.querySelector(`#wallpaper-source`);

const villainForm = document.querySelector(`#villain-form`);
const disasterForm = document.querySelector(`#disaster-form`);
const adventureForm = document.querySelector(`#adventure-form`);

const madlibStory = document.querySelector(`#generated-madlib`);

let universeChosen;
let themeChosen;
let locationChosen;
let deviceSize;

let myMadlibFulfilled;
let myMadlibTitle;

//2. Create my madlib references to make changes based on the buttons people push..
const universeSettings = {
    dc:     {name: `DC`, background: `#9CAF88`},
    marvel: {name: `Marvel`, background: `#4E3F60`},
    reset:  {name: ``, background: `#FFFFFF`}
};

const themeSettings = {
    adventure:  {name: `Adventure`, font: `Kurale, sans-serif, "Times New Roman"`, fontSize: `18px`},
    villain:    {name: `Villain`, font: `Pangolin, sans-serif, "Times New Roman"`, fontSize: `18px`},
    disaster:   {name: `Disaster`, font: `Gelasio, sans-serif, "Times New Roman"`, fontSize: `16px`},
    reset:      {name: ``, font: `Arial, sans-serif, "Times New Roman"`, fontSize:`16px`}
}

const locationSettings = {
    gotham:         {name: `Gotham`, textcolor: `#FFFDD0`, storyBackground: `#A81C51`,cityDesc: `Gotham Background Image`, cityImgLg: `images/gotham.jpg`, cityImgMd: `images/gothammd.jpg`, cityImgSm: `images/gothamsm.jpg`, imgSource: `Image sourced from https://www.wallpaperflare.com/`},
    metropolis:     {name: `Metropolis`, textcolor: `#1E140B`, storyBackground: `#FF5F1F`,cityDesc: `Metropolis Background Image`,cityImgLg: `images/metropolis.jpg`, cityImgMd: `images/metropolismd.jpg`, cityImgSm: `images/metropolissm.jpg`, imgSource: `Image sourced from https://wallpapercave.com/`},
    fawcett:        {name: `Fawcett City`, textcolor: `#F5F5DC`, storyBackground: `#E0115F`,cityDesc: `Fawcett City Background Image`,cityImgLg: `images/Fawcett.jpg`, cityImgMd: `images/Fawcettmd.jpg`, cityImgSm: `images/Fawcettsm.jpg`, imgSource: `Image sourced from https://dcheroesrpg.fandom.com/`},
    ny:             {name: `New York`, textcolor: `#FFEA00`, storyBackground: `#013220`,cityDesc: `New York Background Image`,cityImgLg: `images/NY.jpg`, cityImgMd: `images/nymd.jpg`, cityImgSm: `images/nysm.jpg`, imgSource: `Image sourced from https://www.reddit.com/r/wallpaper/`},
    asgard:         {name: `Asgard`, textcolor: `#00FF66`, storyBackground: `#0E162F`,cityDesc: `Asgard Background Image`,cityImgLg: `images/asgard.jpg`, cityImgMd: `images/asgardmd.jpg`, cityImgSm: `images/asgardsm.jpg`, imgSource: `Image sourced from https://marvelcinematicuniverse.fandom.com/`},
    kamartaj:       {name: `Kamar-Taj`, textcolor: `#00E5FF`, storyBackground: `#1A002C`,cityDesc: `Kamar-Taj Background Image`,cityImgLg: `images/kamartaj.jpg`, cityImgMd: `images/kamartajmd.jpg`, cityImgSm: `images/kamartajsm.jpg`, imgSource: `Image sourced from https://marvelcinematicuniverse.fandom.com/`},
    reset:          {name: ``, textcolor: `#000000`, storyBackground: ``,cityDesc: `empty placeholder`,cityImgLg: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`, cityImgMd: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`, cityImgSm: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`, imgSource: ``}
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
    universeSection.style.display = `none`;
    themeSection.style.display = `block`;
    settingSection.style.display = `none`;
    entriesSection.style.display = `none`;
    madlibSection.style.display = `none`;
    resetSection.style.display = `block`;
    universeChosen = univ.name;

console.log(`===Universe Select Function===`);
console.log(`===Univ Ref===`);
console.log(univ);
console.log(`===Location Select Button Display Marvel then DC===`);
console.log(marvelOptions.style.display);
console.log(dcOptions.style.display);
console.log(`===Background Color Selected===`);
console.log(univ.background);
console.log(`===Universe Name===`);
console.log(univ.name);
}

function themeSelect(theme) {
    const them = themeSettings[theme];
    madlibSection.style.fontFamily = them.font;
    madlibStory.style.fontSize = them.fontSize;
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

console.log(`===Theme Select Function===`);
console.log(`===Theme Ref===`);
console.log(them);
console.log(`===Theme Font/Font Size===`);
console.log(them.font);
console.log(them.fontSize);
console.log(`===Form Displays Adventure/Disaster/Villain===`);
console.log(adventureForm.style.display);
console.log(disasterForm.style.display);
console.log(villainForm.style.display);
}

function locationSelect(location) {
    const loc = locationSettings[location];
    document.body.style.color = loc.textcolor;
    footerChosen.textContent = loc.imgSource;
    backgroundChosen.alt = loc.cityDesc;
    madlibSection.style.backgroundColor = loc.storyBackground; 
    document.body.style.background;
    if (window.matchMedia("(max-width:600px)").matches) {
        deviceSize = `small`;
    } else if (window.matchMedia("(min-width:600px)").matches && window.matchMedia("(max-width:1024px)").matches) {
        deviceSize = `medium`;
    } else {
        deviceSize = `large`;
    }
    universeSection.style.display = `none`;
    themeSection.style.display = `none`;
    settingSection.style.display = `none`;
    entriesSection.style.display = `block`;
    madlibSection.style.display = `none`;
    resetSection.style.display = `block`;
    locationChosen = loc.name
    if (deviceSize ===`small`) {
        backgroundChosen.src = loc.cityImgSm;
    } else if (deviceSize === `medium`) {
        backgroundChosen.src = loc.cityImgMd;
    } else if (deviceSize === `large`) {
        backgroundChosen.src = loc.cityImgLg;
    }

console.log(`===Location Select Function===`);
console.log(`===Loc Ref===`);
console.log(loc);
console.log(`===Image Source, Desc===`);
console.log(loc.imgSource);
console.log(loc.cityDesc);
console.log(`===Device Size, small md lg evals===`);
console.log(deviceSize);
console.log(window.matchMedia("(max-width:600px)").matches);
console.log(window.matchMedia("(min-width:600px)").matches && window.matchMedia("(max-width:1024px)").matches);
console.log(window.matchMedia("(min-width:1025px)").matches);
console.log(`===Image Selected===`);
console.log(backgroundChosen.src);
console.log(`===Location Name===`);
console.log(locationChosen);
console.log(`===Text Color and Background Color===`);
console.log(loc.textcolor);
console.log(loc.storyBackground);
}

function submitSelect(formCompleted) {
    universeSection.style.display = `none`;
    themeSection.style.display = `none`;
    settingSection.style.display = `none`;
    entriesSection.style.display = `none`;
    madlibSection.style.display = `block`;
    resetSection.style.display = `block`;
    if (formCompleted === `disaster`) {
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
    } else if (formCompleted === `villain`) {
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
    } else if (formCompleted === `adventure`) {
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

console.log(`===Submit Form===`);
console.log(`===Which Form===`);
console.log(formCompleted);
console.log(`===MadLib Title===`);
console.log(madLibTitle);
console.log(`===MadLib Text===`);
console.log(myMadlibFulfilled);
}

function resetSelect(universe, theme, location){
    const univ = universeSettings[universe];
    const them = themeSettings[theme];
    const loc = locationSettings[location];
    dcOptions.style.display = `none`;
    marvelOptions.style.display = `none`;
    document.body.style.backgroundColor = univ.background;
    document.body.style.color = loc.textcolor;
    madlibSection.style.backgroundColor = loc.storyBackground;
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
    madLibFulfilled = ``;
    adventureFulfilled = ``;
    villainFulfilled = ``;
    disasterFulfilled = ``;
    footerChosen.textContent = loc.imgSource;
    backgroundChosen.src = loc.cityImgLg;
    backgroundChosen.alt = loc.cityDesc; 
    deviceSize = ``;

console.log(`===Start Over===`);
console.log(`===Device Size===`);
console.log(deviceSize);
console.log(`===City Desc/Source===`);
console.log(loc.cityDesc);
console.log(loc.imgSource);
console.log(`===City Image===`);
console.log(loc.cityImgLg);
console.log(`===Clear MadLib===`);
console.log(madLibTitle);
console.log(madLibFulfilled);
console.log(`===Clear Forms===`);
console.log(adventureFulfilled);
console.log(disasterFulfilled);
console.log(villainFulfilled);
console.log(`===Clear Location/Theme/Universe===`);
console.log(locationChosen);
console.log(themeChosen);
console.log(universeChosen);
}

//4. Create an Event Handler (function) for each mood that calls the function to apply theme.
// Include 3 stop events for form submissions to stop the pages from refreshing after the 
// submit button, which goes back to the start right as madlib is made.
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

function handlerSubmitAdv(event) {
    event.preventDefault();
    submitSelect(`adventure`);
}

function handlerSubmitVil(event) {
    event.preventDefault();
    submitSelect(`villain`);
}

function handlerSubmitDis(event) {
    event.preventDefault();
    submitSelect(`disaster`);
}

function handlerResetClick() {
    resetSelect(`reset`,`reset`,`reset`);
}

//5. Create Event Listeners for each mood that calls the handler upon a click.
// Use Click for buttons and Submit for forms.
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

adventureForm.addEventListener('submit', handlerSubmitAdv);

villainForm.addEventListener('submit', handlerSubmitVil);

disasterForm.addEventListener('submit', handlerSubmitDis);

resetButton.addEventListener('click', handlerResetClick);









