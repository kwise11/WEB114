//Kate Wise 07/12/2026- Calculate Average Weekly Gas

/*
1. Global Variable: userName - string
2. Global Variable: totalGas - number
3. Global Variable: countGasEntries - number
4. Global Variable: avgGasPaid - number, dollar amount so limit to 2 decimals
5. Global Variable: entryMessage - string
5. Local Variable: thisWeek - string 
6. Local Variable: thisWeekNumb - number


There are multiple times in the instructions where it says if someone enters a incorrect entry to give 
them a particular message and 'stop'.  I am interpreting that as stopping the whole process and not just
prompting them to re-enter.  As there are some instructions specifically say to prompt them to re-enter 
I am following those instructions and interpreting 'stop' differently. While instruction 2 specifically 
asked for 2 Global Variables I found I needed more to support the later instructions- such as to have a 
variable to hold the person's name, to hold the average and to support the entry message (instructions 1, 
3 and 5).
*/

"use strict";

//Requirement 1. Global Variables
let userName;
let totalGas = 0;
let countGasEntries = 0;
let avgGasPaid;
let entryMessage;

//Use let on both of these as their values change/may change

console.log(`===Global Variables===`);
console.log(`===userName===`);
console.log(userName, typeof userName);
console.log(`===totalGas===`);
console.log(totalGas, typeof totalGas);
console.log(`===countGasEntries===`);
console.log(countGasEntries, typeof countGasEntries);
console.log(`===avgGasPaid===`);
console.log(avgGasPaid, typeof avgGasPaid);

//Requirement 3. Create Function 
function calcGasAvg() {
   let thisWeek = prompt(`Enter your first week's gas total. Enter -1 when done.`,``);
   console.log(`===calcGasAvg Function Variables===`);
   console.log(`===thisWeek===`);
   console.log(thisWeek, typeof thisWeek);
   while (thisWeek !== null && thisWeek !== `-1`) {
      if (isNaN(parseFloat(thisWeek))) {
         thisWeek = prompt(`Please enter a valid number. Enter -1 when done.`,``);
         console.log(`===NaN reprompt thisWeek entry===`);
         console.log(thisWeek,typeof thisWeek);
      } else {
         let thisWeekNumb = parseFloat(thisWeek);
         console.log(`===parseFloat thisWeek===`);
         console.log(thisWeekNumb, typeof thisWeekNumb);
         totalGas = (totalGas + thisWeekNumb);
         console.log(`===totalGas===`);
         console.log(totalGas);
         countGasEntries += 1;
         console.log(`===countGasEntries===`);
         console.log(countGasEntries);
         thisWeek = prompt(`Enter your next week's gas total. Enter -1 when done.`,``);
         console.log(`===New thisWeek entry===`);
         console.log(thisWeek, typeof thisWeek);
      }
   }
   if (thisWeek === null) {
      avgGasPaid = null;
   } else if (countGasEntries === 0) {
      avgGasPaid = parseFloat((0).toFixed(2))
   } else {
      avgGasPaid = parseFloat((totalGas/countGasEntries).toFixed(2))
   }
   console.log(`===parseFloat Avg Gas Use to Return by function===`);
   console.log(avgGasPaid, typeof avgGasPaid);
   return avgGasPaid;
}
//Per instructions create a function that will handle no entry, cancel and iterate thru multiple entries.
//Return from the function the average created by iteration.

// Requirement 2. Main Program
userName = prompt(`Enter your name: `, ``); 

console.log(`===Prompted Name Entry===`);
console.log(userName, typeof userName);

if (userName === null) {
   alert(`You cancelled the name prompt.`);
   console.log(`You cancelled the name prompt.`);   
} else if (userName.trim() === ``) {
   alert(`You must type a name.`);
   console.log(`You must type a name.`);
} else {
   userName = userName.trim();
   console.log(`===Trimmed Name Entry===`);
   console.log(userName, typeof userName);   
}
//Per instructions stop if no name is entered either by blank or null. Previous and following logic
//applies that.

if (userName === null || userName.trim() === ``) {
   alert(`You did not enter a name so we could not proceed.`);
   console.log(`You did not enter a name so we could not proceed.`);
} else { 
   calcGasAvg();
   console.log(`===calcGasAvg function return value===`);
   console.log(calcGasAvg, typeof calcGasAvg);
}
//Error message for why we stopped based on name, with a valid name run the function.

if ((userName !== null && userName.trim() !== ``) && avgGasPaid === null) {
   alert(`You cancelled entering gas totals.`);
   console.log(`===Final Summary===`);
   console.log(`You cancelled entering gas totals.`);
} else if (userName !== null && userName.trim() !== ``) {
   if (countGasEntries === 0) {
      alert(`No gas totals were entered.`);
      console.log(`===Final Summary===`);
      console.log(`No gas totals were entered.`);
   } else if (countGasEntries === 1) {
      alert(`${userName} had a total gas bill of $${totalGas.toFixed(2)}.`);
      console.log(`===Final Summary===`);
      console.log(`${userName} had a weekly average gas bill of $${totalGas.toFixed(2)}.`);
   } else if (countGasEntries > 1) {
      alert(`${userName} had an average gas bill of $${avgGasPaid}.`);
      console.log(`===Final Summary===`);
      console.log(`${userName} had an average gas bill of $${avgGasPaid}.`);
   }
}
//Final result population based on function interations.

if (userName !== null && userName.trim() !== ``) {
   if (countGasEntries === 0) {
      entryMessage = (`No gas totals were entered.`);
      alert(entryMessage);
      console.log(`===Create entryMessage Variable content===`);
      console.log(entryMessage);
   } else if (countGasEntries === 1) {
      entryMessage = (`There was only 1 entry.`);
      alert(entryMessage);
      console.log(`===Create entryMessage Variable content===`);
      console.log(entryMessage);
   } else if (countGasEntries > 1) {
      entryMessage = (`There were ${countGasEntries} entries.`);
      alert(entryMessage);
      console.log(`===Create entryMessage Variable content===`);
      console.log(entryMessage);
   }
}

//Used an if statement to set entryMessage value as instructed.
//Maintaining response only for a valid name, generate the required messages based on updated values
//from the function that was run.  Account for null, no entries, a single entry and multiple entries.
