//Selection Construct / Conditional or Decision making construct
// >,< , <= , >= , == ,!= (3 !=2 , means is 3 not equal to 2 , questioning remeber its a question and answr will /n
//come in true or false), ===, !==( strick checking) check boolean
let isuserLoggedin = true;
let temperure = 41;
if (temperure < 50) { // or temp == 41 both same
    console.log("Temp is less than 51");
}
console.log("tem is greater tha 50");
//2
const score = 200;
if (score > 100) {
    const power = "fly";
    console.log(`User Power:  ${power}`);
}
// // 1) If Statement
// let candidate : number = 25;
// if ( candidate >= 18) {
//     console.log("You can vote");
// }
// if (candidate < 18 ) {
//     console.log("you CANNOT vote");
// }
// //2
// let mode : string = "Dark"
// let color; 
// if (mode  == "Dark"){
// color = "Black";
// }
// if (mode == "light"){
//     color ="white"
// }
// console.log(color); // Dark
// // 2) If Else Statement
// let age2 : number = 25;
// if (age2 >=18) {
//     console.log("You can vote");
// }
// else {
//     console.log("Cannot Vote")
// }
// // Even or Odd
// let nums : number = 10;   
// if (nums % 2 == 0) {
//     console.log("Number is even ");
// } else {
//     console.log ("number is Odd")
// }
// // Selection Statement If Else using Math Round & random method
// let x = Math.round(Math.random()*10); //0-1 , 0.1, 0.2,... hm multiply 10 se krwa re hai inliye 1-10 k darmiyan hogi value
//  if (x > 5) { // if this condition is true TS says it true and execute rest of block, and if not true then it comes after this block
//     console.log(`The Value of x is ${x} > 5`); //actual no 5 before backticks in both statements
// }
// else { // where we know that could be possible 2 answers we use if Else statemnts
//     console.log(`The value of x is ${x} <= 5`);   
// } 
// // 3) Else If Statement ( this is a Multiple condition statement) 
let balance = 1000;
if (balance < 500) {
    console.log("Less than 500");
}
else if (balance < 750) {
    console.log("Less than 750");
}
else if (balance < 900) {
    console.log("Less than 900");
}
else {
    console.log("Less than 1200");
}
//Practice Case User purchasing online
const userloggedIn = true;
const debitCard = true;
const loogedInfromGoogle = false;
const loogedInfromEmail = true;
if (userloggedIn && debitCard && 2 == 2) { // left and right both should be true
    console.log("Allowed to Buy a Course");
}
if (loogedInfromEmail || loogedInfromEmail) { // Pipe sign, says or this or that 
    console.log("User Logged In"); // Conditional randering advance using react
}
// let mode2  :  string = "Dark";
// let colrs;
// if (mode2 === "Dark") {
//     colrs = "Black";
// } else if  (mode2 === "light") {
//     colrs = "white";
// }else if  (mode2 === "Pink") {
//     colrs = "Pink";
// } else {
//     colrs = "Red";
// }
// console.log(colrs);
// //Q ; Get user to input a number using prompt ( "Enter a Number"), check if number is multiple of 5 or not?
// // import inquirer from "inquirer";
// // let numInput = await inquirer.prompt ([
// //     {
// //     name :  "num",
// //     type : "number",
// //     message : "Please Enter a Number",
// //     }
// // ]);
// // if (numInput % 5 === 0) {
// //     console.log( `Number : ${numInput.num} is Multiple of 5`);
// // } else {
// //     console.log ( `Number : ${numInput.num} is Not a Multiple of 5`); 
// // } 
// import inquirer from "inquirer";
// // async function main() {
//     const answers = await inquirer.prompt([
//         {
//             name: "num",
//             type: "number",
//             message: "Please Enter a Number",
//         }
//     ]);
//     const enteredNumber = Number(answers.num);
//     // if (!isNaN(enteredNumber)) {
//         if (enteredNumber % 5 === 0) {
//             console.log(`Number: ${enteredNumber} is a Multiple of 5`);
//         } else {
//             console.log(`Number: ${enteredNumber} is Not a Multiple of 5`);
//         }
// //     } else {
// //         console.log("Invalid input. Please enter a valid number.");
// //     }
// //  }
// // Call the asynchronous function
// // main();
// //Write a Code which gives grades to students accoding to thier scores
// let grades = await inquirer.prompt ([{
//     name : "answer",
//     type : "number",
//     message : "Enter your Marks Please"
// }]);
// let scores = Number(grades.answer);
// if (scores >= 80 && scores <=100) {
//     console.log( ` Congrats!! You have scored Grade : A `)
// }
// else if (scores >= 70 && scores <=89){
//     console.log( ` Congrats!! You have scored Grade : B `)
// }
// else if (scores >= 60 && scores <=69){
//     console.log( ` Congrats!! You have scored Grade : C `)
// }
// else if (scores >= 50 && scores <=59){
//     console.log( ` Congrats!! You have scored Grade : D `)
// }
// else if (scores >= 0 && scores <=49){
//     console.log( ` Congrats!! You have scored Grade : F`)
// }
// else {
// console.log( "You have Failed");
// }
// // let x1 = 70
// // if (x1 <80) {
// //     console.log("you are good to perfection");
// // }
// // else if (x1<=50){
// // console.log("wow, you are half a century old");
// // }
// // else {
// //     console.log("you are a spring chicken")
// // }
// // //Program 2, Good Advance example
// // let rNo = 0
// // for (let x=0;x<5;x++){
// //     rNo = Math.random()*10;
// // if (rNo>5) {
// //     console.log("Number is greater than 5 " + rNo);
// // }else{
// //     console.log("Number is lesser than 5 " + rNo);
// // }  
// // }
// // //Else If Statement ( this is a Multiple condition statement)
// // if(x > 1 && x <= 3){
// //     console.log(`the Value ${x} > 0 and <= 3`); 
// // }else if (x >= 4 && x <= 6) {
// // console.log(`the Value ${x} >= 4 and <= 6`);
// // }else if (x >= 7 && x <= 9) {
// //     console.log(`the Value ${x} >= 7 and <= 9`);
// // }else {
// //     console.log(`the Value ${x} >= 9 and <= 10`);
// // }
// // // 4) Switch Statetment is is alternative to else if statement and same as else if. 
//Syntax: 
// switch (key) {
//     case value : 
//     break;
//     default:
//     break;
// }
//Example, where we need to use lots of else if... we prefer to use switch statement
const month = 3;
switch (month) {
    case 1: // can use month name in same case as well to mach with values jan
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    default:
        console.log("Default Case executed");
        break;
}
/* falsy Values & Truthy values concept.
truthy and falsy values exist in TypeScript, just like in JavaScript. Truthy and falsy values are values that /n
evaluate to true or false when used in a boolean context.

In TypeScript (as in JavaScript), the following values are considered falsy:

false: The boolean value false.
0: The number zero.
-0: Negative zero.
0n: BigInt zero.
'' or "": An empty string.
null: The value null.
undefined: The value undefined.
NaN: Not a Number.
All other values are considered truthy. This includes non-empty strings, non-zero numbers, non-empty arrays, /n
objects, functions, and any non-null object.

Truthy : "0", 'false', " " ,[] Array empty , {} object empty , function (){} empty function */
//Detecting if array or Object is empty or not like below
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) { // return an array 
    console.log("Object is empty");
}
//Nullish coalescing Operator (??): null undefined > refer to video link or gpt https://www.youtube.com/watch?v=0P_YvC6Gg0c&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=27
//Terniary Operator , condition ? true : false
const iceTeaprice = 100;
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80"); // >=80 
export {};
// // let a1 = 9;
// // switch(a1)
// // {
// //     case 1:
// //         console.log( " Answer is equal to 1")
// //     break;
// //     case 2:
// //         console.log( " Answer is equal to 2")
// //     break;
// //     case 3:
// //         console.log( " Answer is equal to 3")
// //     break;
// // }
// // // 5. Nested If Statements: if statement placed inside another if statement
// // let c: number = 30; //Checked with equal and bigger number
// // if (c<=25) {
// //     if (c ==25 ){
// // console.log ("Answer is true");
// //     }
// // }
// // console.log("number is not true");
// // // Ticketing system Program , Chnaged prompt here and using 
// // let country = ["Pakistan", "China", "Canada"]
// // // Number() function is used to convert the string to number
// // let age = Math.round(Math.random()*90);
// // let domicile =["Sindh","Punjab","KPK", "Balouchistan"];
// // if (country[0] === "Pakistan") {
// // if (age >= 18) {
// // console.log("Here is your ticket")
// // } else {
// // console.error("Age restriction")
// // }
// // } else {
// // console.log("Invalid country")
// // }
// // // Wania Rep
// // let pet = "cat"
// // let isHungry = true
// // let isThirsty = false
// // let pet2 ="dog"
// // let Hungry;
// // let thirsty;
// // //if-else
// // if (isHungry == true){
// //     console.log(`${pet} is hungry and wants food`)
// // }else{
// //     console.log(`${pet} is not hungry`)
// // }
// // // if if-else
// // if(isHungry == true){
// //     console.log(`${pet} is hungry and wants food`)
// // }
// // if(isThirsty){
// //     console.log(`${pet} wants milk`)
// // }
// // else{
// //     console.log(`Pet dont want anything`)
// // }
// // //scenario 2
// // let hasPass : boolean = true
// // if(hasPass){
// //     console.log("Welcome in class")
// // }else{
// //     console.log("Student not allowed")
// // }
// // */
// // /*1. Age Verification:
// // Write a program that prompts the user to enter their age. If the age is greater than or equal /n 
// // to 18, display "You are eligible to vote," otherwise, show "You are not eligible to vote yet."
// // */
// // let ages = Math.round(Math.random()); //  or can be a hard coded number
// // if (ages >=18) {
// //     console.log('You are eligible to vote');
// //     let show = ages;
// // }
// // else {
// //     console.log('You are not eligible to vote yet');
// // }
// // //2. Temperature Analyzer:
// // /*Create a temperature analyzer that prompts the user to input the current temperature. /n 
// // If the temperature is greater than 30 degrees Celsius, display "It's a hot day!"; if it's between 20 /n 
// // and 30 degrees Celsius, show "The weather is pleasant"; and for temperatures below 20 degrees Celsius, /n 
// // display "It's a bit chilly today." */
// // function currentTemp(Temp: number): number {
// //     if (Temp > 30 ) {
// //         console.log('Its a Hot day!')  
// //     }
// //     else if (Temp >=20 && Temp <=30) {
// //         console.log('The weather is pleasant');
// //     }
// //     else {
// //         console.log('Its a bit chilly today');
// //     }
// // return Temp; 
// // }
// // currentTemp (29);
// // // Another simple Program
// // let num1 : number = 10;
// // if(num1 > 10){
// //     console.log('Number is greater than 10');
// // } else if (num1 === 10) {
// //     console.log('Number is equal to 10');
// // } else {
// //     console.log('Number is Less than 10');
// // }
// // // 3. Odd or Even:
// // // Develop a program that accepts a number from the user and checks if it's odd or even. If the number is even, output /n 
// //  //"The number is even"; if it's odd, display "The number is odd."
// //  let num2 : number = 22;
// //  if (num2 % 2 === 0) { // we can check if a number is even or odd using the modulo operator (%). When a number is divided/n 
// //     // by 2, if the remainder is 0, the number is even; otherwise, it's odd.
// //     console.log('The Number is even');  
// //  } else {
// //     console.log('The Number is odd');
// //  }
// //  // 4 . Grade Calculator:
// // // Write a grade calculator that prompts the user to enter a numeric grade. Based on the entered grade, show the /n 
// // // corresponding letter grade using if-else constructs (e.g., A, B, C, D, F).
// // function gradeCalc (numGrade : number ) : number {
// //     if (numGrade >= 90) {
// //         console.log(' Congrats! You have secured Grade A'); 
// //     }
// //     else if (numGrade >= 85 ) {
// //         console.log(' Congrats! You have secured Grade B'); 
// //     }
// //     else if (numGrade >= 65 ) {
// //         console.log(' Congrats! You have secured Grade C'); 
// //     }
// //     else if (numGrade >= 45 ) {
// //         console.log(' Congrats! You have secured Grade D'); 
// //     }
// //     else if (numGrade >= 30 ) {
// //         console.log(' Congrats! You have secured Grade F'); 
// //     } else {
// //             console.log('You are Fail'); 
// //         }
// //         return numGrade;
// //     }
// // gradeCalc (55);
// // // Username Validator:
// // // Create a program that prompts the user to enter a username. If the username matches a predefined value (e.g., "Admin")/n 
// // // , display "Access granted"; otherwise, show "Access denied."
// // function Ui_Prog ( uName : string = 'Aimon') : string {
// //     if (uName == 'Aimon' ) {
// //         console.log('Access granted');
// //     }
// //     else {
// //         console.log("Access Denied");
// //     }
// //     return uName; 
// // }
// // Ui_Prog();
// // // Nested If 
// // // nested if statements are constructed by placing one if statement inside another if statement or inside an else or /n 
// // // else if block. This allows for multiple levels of conditions to be evaluated.
// // // Example Nested If
// // // Let's consider an example where nested if statements are used to check conditions based on a person's age /n 
// // // and their eligibility for certain activities:
// // let age: number = 22;
// // let isAdult: boolean = false;
// // let canVote: boolean = false;
// // if (age >= 18) {
// //     isAdult = true;
// //     if (age >= 21) {
// //         canVote = true;
// //         console.log("You can vote and purchase alcohol.");
// //     } else {
// //         console.log("You are an adult but cannot purchase alcohol yet.");
// //     }
// // } else {
// //     console.log("You are not an adult yet.");
// // }
// // console.log(`Are you an adult? ${isAdult}`);
// // console.log(`Can you vote? ${canVote}`);
// // /*
// // •	The outer if statement checks if the person is an adult (age 18 or older).
// // •	If the person is an adult, the nested if statement checks if they are old enough to vote (age 21 or older).
// // •	Based on these conditions, different messages are logged to the console.
// // •	Additionally, two boolean variables (isAdult and canVote) are used to track the eligibility status. */
// // //
// // function checkTemperature(temperature: number): void {
// //     if (temperature > 0) {
// //         if (temperature < 100) {
// //             console.log("The water is liquid.");
// //         } else {
// //             console.log("The water is boiling.");
// //         }
// //     } else {
// //         console.log("The water is frozen.");
// //     }
// // }
// // /* In this example, the checkTemperature function contains nested if statements to determine the state of water based on the provided temperature.
// // The outer if-else block checks if the temperature is greater than zero. If true, it enters another if-else block to further evaluate the temperature range.
// // If the temperature is between 0 and 100, it prints "The water is liquid." If it's above 100, it prints "The water is boiling."
// // If the temperature is not greater than zero, it prints "The water is frozen." */
// // /*
// // 1. Book Ordering System:
// // Develop a program for a bookstore that calculates the price of a book based on the customer's membership status and /n 
// // the quantity purchased. Apply discounts as follows:
// // Regular customers get no discount.
// // Silver members get a 10% discount.
// // Gold members get a 20% discount.
// // Platinum members get a 30% discount. */ 
// // let price : number ;
// // function Book_Ord (membership_status : boolean ) :void {
// // if (membership_status == false ){
// //     console.log();
// // }
// // }
