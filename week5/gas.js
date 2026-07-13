//Kate Wise 07/12/2026- Calculate Average Weekly Gas

/*
1. Global Variable: userName - string
2. Global Variable: totalGas - number
3. Global Variable: countGasEntries - number
4. Global Variable: avgGasPaid - number, dollar amount so limit to 2 decimals
5. Local Variable: thisWeek - string 
6. Local Variable: thisWeekNumb - number


There are multiple times in the instructions where it says if someone enters a incorrect entry to give 
them a particular message and 'stop'.  I am interpreting that as stopping the whole process and not just
prompting them to re-enter.  As there are some instructions specifically say to prompt them to re-enter 
I am following those instructions and interpreting 'stop' differently.  
*/

"use strict";

//Requirement 1. Global Variables
let userName;
let totalGas = 0;
let countGasEntries = 0;
let avgGasPaid;

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
      if (isNaN(parseInt(thisWeek))) {
         thisWeek = prompt(`Please enter a valid number. Enter -1 when done.`,``);
         console.log(`===NaN reprompt thisWeek entry===`);
         console.log(thisWeek,typeof thisWeek);
      } else {
         let thisWeekNumb = parseInt(thisWeek);
         console.log(`===parseInt thisWeek===`);
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
      avgGasPaid = (0).toFixed(2)
   } else {
      avgGasPaid = (totalGas/countGasEntries).toFixed(2)
   }
   console.log(`===Avg Gas Use as updated by function===`);
   console.log(avgGasPaid, typeof avgGasPaid);
   return avgGasPaid;
}

// Requirement 2. Main Program
userName = prompt(`Enter your name: `, ``); 

console.log(`===Prompted Name Entry===`);
console.log(userName, typeof userName);

if (userName === null) {
   alert(`You cancelled the name prompt.`);
   console.log(`You cancelled the name prompt.`);   
} else if (userName === undefined || userName.trim() === ``) {
   alert(`You must type a name.`);
   console.log(`You must type a name.`);
} else {
   userName = userName.trim();
   console.log(`===Trimmed Name Entry===`);
   console.log(userName, typeof userName);   
}
// Instructions say to stop if no name is entered either by blank or null. Following logic applies that.
console.log(`===Final Summary===`);

if (userName === null || userName === undefined || userName.trim() === ``) {
   alert(`You did not enter a name so we could not proceed.`);
   console.log(`You did not enter a name so we could not proceed.`);
} else { 
   calcGasAvg();
}
console.log(`===calcGasAvg function return value===`);
console.log(calcGasAvg);

if ((userName !== null || userName !== undefined || userName.trim() !== ``) && avgGasPaid === null) {
   alert(`You cancelled entering gas totals.`);
   console.log(`You cancelled entering gas totals.`);
} else {
   if ((userName !== null || userName !== undefined || userName.trim() !== ``) && countGasEntries === 0) {
      alert(`No gas totals were entered.`);
      console.log(`No gas totals were entered.`);
   } else if ((userName !== null || userName !== undefined || userName.trim() !== ``) && countGasEntries === 1) {
      alert(`${userName} had an average gas bill of $${totalGas}.`);
      console.log(`${userName} had an average gas bill of $${totalGas}.`);
   } else if ((userName !== null || userName !== undefined || userName.trim() !== ``) && countGasEntries > 1) {
      alert(`${userName} had an average gas bill of $${avgGasPaid}.`);
      console.log(`${userName} had an average gas bill of $${avgGasPaid}.`);
   }

   if ((userName !== null || userName !== undefined || userName.trim() !== ``) && countGasEntries === 0) {
      alert(`No gas totals were entered.`);
      console.log(`No gas totals were entered.`);
   } else if ((userName !== null || userName !== undefined || userName.trim() !== ``) && countGasEntries === 1) {
      alert(`There was only 1 entry.`);
      console.log(`There was only 1 entry.`);
   } else if ((userName !== null || userName !== undefined || userName.trim() !== ``) && countGasEntries > 1) {
      alert(`There were ${countGasEntries} entries.`);
      console.log(`There were ${countGasEntries} entries.`);
   }
}
