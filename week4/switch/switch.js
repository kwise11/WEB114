//Kate Wise 07/05/2026- Favorite Month Checker

/*
1. Variable: favMonth Prompt - string
*/

"use strict";

//Requirement 1. Ask user favorite month, store as lower case
let favMonth = prompt(`What is your favorite Month?`,`January`);

console.log(`===Favorite Month Original Entry===`);
console.log(favMonth, typeof favMonth);

if (favMonth === null || favMonth.trim() === ``) {
   alert(`You didn't enter anything! Don't you have a favorite month?`);
   favMonth = null;
   } else {
   favMonth = favMonth.trim().toLowerCase();
   } 
//Lower case causes an error if null so use if statement with alert to support- include that with support for empty.
//Make both change empty and null favMonth to null for ease of future eval.
//Since favMonth will change with toLowerCase use let to create, include trim at the same time as toLowerCase.

console.log(`===Favorite Month Lower Case and Trim Check===`);
console.log(favMonth, typeof favMonth);

//Requirement 2. Case statements depending on the month.
console.log(`===Favorite Month Switch Case Response===`);

switch (favMonth) {
   case null:
      alert(`You have enter information or else I could not comment...`);
      console.log(`You have enter information or else I could not comment...`);
      break;
   case `December`.trim().toLowerCase():   
   case `January`.trim().toLowerCase():
   case `February`.trim().toLowerCase():
      alert(`You love the Winter months!`);
      console.log(`You love the Winter months!`);
      break;
   case `March`.trim().toLowerCase():   
   case `April`.trim().toLowerCase():
   case `May`.trim().toLowerCase():
      alert(`Spring is nice with everything blooming.`);
      console.log(`Spring is nice with everything blooming.`);
      break;
   case `June`.trim().toLowerCase():   
   case `July`.trim().toLowerCase():
   case `August`.trim().toLowerCase():
      alert(`You enjoy the summer months!`);
      console.log(`You enjoy the summer months!`);
      break;
   case `September`.trim().toLowerCase():   
   case `October`.trim().toLowerCase():
   case `November`.trim().toLowerCase():
      alert(`Fall is fun with all the pretty colors.`);
      console.log(`Fall is fun with all the pretty colors.`);
      break;
   default:
      alert(`Other months are interesting too!`);
      console.log(`Other months are interesting too!`);
      break;
}
//Based on the prompt added month name with caps but used trim and toLowerCase to make them comparable with favMonth.
//Based on prompt we are not to include abbreviations (Jan) or numbers (5) to get normal responses. 
//This means the default response will catch those entries. 
//Included support for null values separate from invalid (Jan, 5) entries.