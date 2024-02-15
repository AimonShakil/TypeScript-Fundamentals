
/* 4.	Selection Construct/ Conditional or Decision-making statements.

When designing programs, there are often points where a condition needs to be tested in order to make a decision.
Conditions are formed using Boolean logic.

Decision-making constructs in TypeScript are classified as follows –
1.	If
2.	If-Else
3.	Else-If
4.	Switch 
5.	Nested if */

// 1) If Statement:

//
let age1 = 60;

if (age1 >= 70) {
    console.log("you are aged to perfection")
};

//
let mode : string = "Dark"
let color;

if (mode  == "Dark") {
color = "Black";
}
if (mode == "light") {
    color ="white"
}

console.log(color); // Dark


// 2) If Else Statement  

let ageIndv = 71;

if ( ageIndv >=70) {
    console.log(" you are aged to perfection");  
}
else {
    console.log(" you are a spring chicken");
    
};

//
let hasPass : boolean = true

if(hasPass){
    console.log("Welcome in class")
}else{
    console.log("Student not allowed")
}

//
let age2 : number = 25;
if (age2 >= 18) {
    console.log("You can vote");
}

else {
    console.log("Cannot Vote")
}

// 
let bird = "Crow";
let isHungry = false 
let isThirsty = false

if (isHungry) {
    console.log(`${bird} is hungry`);
    
}
if (isThirsty) {
    console.log(`${bird} is Thirsty and need water`);
    
}
else {
    console.log(`${bird} doest want any thing`);
    
};

// not right logic

let pet = "cat";
let ishungry = true;
let isthirsty = false;


if (ishungry == true) {
    console.log(`${pet} is hungry and wants food`)
}
if (isthirsty) {
    console.log(`${pet} wants milk`);
}
else {
    console.log(`Pet dont want anything`)
}

//

let emailInfo = true
let password = true

if (emailInfo == true) {
    console.log("You are signIn");
    
} else {
    console.log("Please enter correct email");
    
};

// Even or Odd
let nums : number = 10;   
if (nums % 2 == 0) {
    console.log("Number is even ");
    
} else {
    console.log ("number is Odd")
}

// If Else using Math Round & random method: 

let x = Math.round(Math.random()*10); //0-1 , 0.1, 0.2,...  multiply from 10 to get values from 1-10.

if (x > 5) { // if this condition is true TS says it true and execute rest of block, and if not true then it comes after this block
    console.log(`The Value of x is ${x} > 5`); //actual no 5 before backticks in both statements
}

else { // where we know that could be possible 2 answers we use if Else statemnts
    console.log(`The value of x is ${x} is less than 5`);   
} 


// 3) Else If Statement ( this is a Multiple condition statement) 
let balance : number = 1000;

if (balance < 500) {
    console.log("Less than 500")
}
else if (balance <750) {
    console.log("Less than 750")

}
else if (balance < 900) {
    console.log("Less than 900")

}
else {
    console.log("Less than 1200")

}

//
let candidate = 17;

if (candidate >= 18) {
    console.log("you can vote");
}

else if (candidate > 10) {
    console.log("You can register for vote");

} else {
    console.log("you cannot vote");
};

//
let mode2  :  string = "Dark"; //to get else we need to like Green
let colrs;

if (mode2 === "Dark") {
    colrs = "Black";

} else if  (mode2 === "light") {
    colrs = "white";

}else if  (mode2 === "Pink") {
    colrs = "Pink";

} else {
    colrs = "Red";
}
console.log(colrs);

//
let x1 = 50;                                               

if ( x1 >= 70) { // 70  or above
 console.log("You are aged to perfecton");
 
}
else if( x1 >=50 && x1 <= 70 ) { // 50 - 69
    console.log( "Wow! you are half a century old");

}
else {
    console.log("you are a spring chicken");
    
}

//Practice Case User purchasing online
const userloggedIn : boolean = true;
const debitCard  = true; //if true both if run , if false second will execute
const loogedInfromGoogle : boolean = false;
const loogedInfromEmail : boolean = true;

if (userloggedIn && debitCard && 2==2 ) { // left and right both should be true , here 3 conditions are being checked 
    console.log("Allowed to Buy a Course")
}

if (loogedInfromEmail || loogedInfromEmail) { // Pipe sign, says or this or that 
    console.log("User Logged In") // Conditional randering advance using react

}


//Q ; Get user to input a number using prompt ( "Enter a Number"), check if number is multiple of 5 or not?
// inquirer.prompt returns a promise, and you cannot use the await keyword outside of an asynchronous function. You need to wrap the code in an async function to use await.
import inquirer from "inquirer";

async function main() {
    let numInput = await inquirer.prompt([
        {
            name: "num",
            type: "number",
            message: "Please Enter a Number",
        }
    ]);

    if (numInput.num % 5 === 0) {
        console.log(`Number : ${numInput.num} is a multiple of 5`);
    } else {
        console.log(`Number : ${numInput.num} is not a multiple of 5`);
    }
}

main(); 


//Write a Code which gives grades to students accoding to thier scores

async function studentResult ()  {
let grades = await inquirer.prompt ([{
    name : "answer",
    type : "number",
    message : "Enter your Marks Please"

}]);

let scores = Number(grades.answer); // means it user input seventy two it converts input to number JS function
if (scores >= 80 && scores <=100) { 
    console.log( ` Congrats!! You have scored Grade : A `)
}
else if (scores >= 70 && scores <=89){
    console.log( ` Congrats!! You have scored Grade : B `)
}
else if (scores >= 60 && scores <=69){
    console.log( ` Congrats!! You have scored Grade : C `)
}
else if (scores >= 50 && scores <=59){
    console.log( ` Congrats!! You have scored Grade : D `)
}
else if (scores >= 0 && scores <=49){
    console.log( ` Congrats!! You have scored Grade : F`)
}

else {
console.log( "You have Failed");
}
};

studentResult();


//
for (let x = 0; x < 5; x++ ) {

    let rNo = Math.round(Math.random() * 10 ) ;
if (rNo > 5) {
    console.log("Number is greater than 5 " + rNo);

}else{
    console.log("Number is lesser than 5 " + rNo);
}  
};


//
let xt= 8;

if(xt > 1 && xt <= 3){
    console.log(`the Value is ${xt} > Greater than 0 and less tah three`); 

}else if (xt >= 4 && xt <= 6) {
console.log(`the Value is ${xt} which is greater than 4 and les than 6`);

}else if (xt >= 7 && xt <= 9) {
    console.log(`the Value  is ${xt} greater than 7 and less tahn 9`);

}else {
    console.log(`the Value  is ${xt} which is greater than 9 and less than 10`);
}
    
// 4) SWITCH: switch stetemente is alternative to else if statement and same as else if. 
// Syntax: 
// switch (key) { // with this key we can compare
//     case value : 
//     break;
//     default:
//     break;
// }

//Example, where we need to use lots of else if... we prefer to use switch statement

const month : number = 3;
switch (month) {
    case 1 :  // can use month name in same case as well to mach with values jan
    console.log("January");
    break;
    case 2 : 
    console.log("Feb");
    break;
    case 3 : 
    console.log("March");
    break;
    case 4 : 
    console.log("April");
    break;
    case 4 : 
    console.log("May");
    break;
    default :
    console.log("Default Case executed");
    break;

}

 /* falsy Values & Truthy values concept.
 truthy and falsy values exist in TypeScript, just like in JS. Truthy and falsy values are values that /n 
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

//Detecting if array or Object is empty or not:
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // return an array 
    console.log("Object is empty")
}

//
let a1 = 9;
switch(a1)
{
    case 1:
        console.log( " Answer is equal to 1")
    break;


    case 2:
        console.log( " Answer is equal to 2")
    break;

    case 3:
        console.log( " Answer is equal to 3")
    break;
    default: 
    console.log("default case executed");
    break;
}

// 5. Nested If Statements: if statement placed inside another if statement

let c: number = 30; //Checked with equal and bigger number

if (c <= 25) {
    if (c == 25 ){
console.log ("Answer is true");
    }
}
console.log("number is not true");

// Ticketing system Program , Chnaged prompt here and using 

let country = ["Pakistan", "China", "Canada"]
let voterage = Math.round(Math.random()*90);
let domicile =["Sindh","Punjab","KPK", "Balouchistan"];

if (country[0] === "Pakistan") {

    if (voterage >= 18) {
console.log(`Voter ager is : ${voterage} and Here is your ticket`)
}  else {
console.error("Age restriction")
}
}
else {
console.log("Invalid country")
}



/*1. Age Verification:
Write a program that prompts the user to enter their age. If the age is greater than or equal /n 
to 18, display "You are eligible to vote," otherwise, show "You are not eligible to vote yet."
*/

let ages = Math.round(Math.random()); //  or can be a hard coded number
if (ages >=18) {
    console.log('You are eligible to vote');
    let show = ages;
    
}
else {
    console.log('You are not eligible to vote yet');
    
}

//2. Temperature Analyzer:
/*Create a temperature analyzer that prompts the user to input the current temperature. /n 
If the temperature is greater than 30 degrees Celsius, display "It's a hot day!"; if it's between 20 /n 
and 30 degrees Celsius, show "The weather is pleasant"; and for temperatures below 20 degrees Celsius, /n 
display "It's a bit chilly today." */

async function tempAnalyzer() {

    async function tempAnalyzer() {
        let currentTemp = await inquirer.prompt([{
            name: "temp",
            type: "number",
            message: "Please enter temperature in Centigrade"
        }]);
        let tem = currentTemp.number
        if (tem >= 30) {
            console.log('It\'s a Hot day!');  
        } else if (tem >= 20) {
            console.log('The weather is pleasant');
        } else {
            console.log('It\'s a bit chilly today');
        }
    }   
}
tempAnalyzer ();

// Another simple Program

let num1 : number = 9;
if(num1 >= 10){
    console.log('Number is greater than and equal to 10');
    
} else {
    console.log('Number is Less than 10');
    
}

// 3. Odd or Even: (num % 2 === 0)
// Develop a program that accepts a number from the user and checks if it's odd or even. If the number is even, output /n 
//"The number is even"; if it's odd, display "The number is odd."

async function evenOdd() {
    let result = await inquirer.prompt([{
        name: "num",
        type: "number",
        message: "Please enter a number"
    }]);

    let num = result.num; // Extract the numeric value from the object, cannot directly perform methametical operation on Object

    if (num % 2 === 0) { //we can check if a number is even or odd using the modulo operator (%). When a number is divided/n 
    // by 2, if the remainder is 0, the number is even; otherwise, it's odd.
        console.log('The Number is even');  
    } else {
        console.log('The Number is odd');
    }
}

evenOdd();

// 4 . Grade Calculator:
// Write a grade calculator that prompts the user to enter a numeric grade. Based on the entered grade, show the /n 
// corresponding letter grade using if-else constructs (e.g., A, B, C, D, F).

function gradeCalc (numGrade : number ) : number {
    if (numGrade >= 90) {
        console.log(' Congrats! You have secured Grade A'); 
    }
    else if (numGrade >= 85 ) {
        console.log(' Congrats! You have secured Grade B'); 
    }
    else if (numGrade >= 65 ) {
        console.log(' Congrats! You have secured Grade C'); 
    }
    else if (numGrade >= 45 ) {
        console.log(' Congrats! You have secured Grade D'); 
    }
    else if (numGrade >= 30 ) {
        console.log(' Congrats! You have secured Grade F'); 
    } else {
         
            console.log('You are Fail'); 
        }
        return numGrade;
    }

gradeCalc (55);


// Username Validator:
// Create a program that prompts the user to enter a username. If the username matches a predefined value (e.g., "Admin")/n 
// , display "Access granted"; otherwise, show "Access denied."

async function namevalidator() {
    let userName = await inquirer.prompt ([{
        name : "uname",
        type : "string",
        message : " Please enter a username"
    }])

let uName = userName.uname

    if (uName == 'Admin' ) {
        console.log('Access granted');
        
    }
    else {
        console.log("Access Denied");
        
    }
};
namevalidator();


//5.  Nested If: 
/* Syntax for Nested IF:
if (condition1) {
    // Code block for condition1 being true
    
    if (condition2) {
        // Code block for condition2 being true
        // More nested if statements if needed
    
    } else {
        // Code block if condition2 is false
    }
} 
else {
    // Code block if condition1 is false
} */


// nested if statements are constructed by placing one if statement inside another if statement or inside an else or /n 
// else if block. This allows for multiple levels of conditions to be evaluated.

// Example 
// Let's consider an example where nested if statements are used to check conditions based on a person's age /n 
// and their eligibility for certain activities:

let age: number = 22;
let isAdult: boolean = false;
let canVote: boolean = false;

if (age >= 18) {
    isAdult = true;
    if (age >= 22) {
        canVote = true;
        console.log("You can vote and drive a car.");
    } else if (age <= 21 ) {
        console.log("You are an adult but cannot drive a car.");
    }
} else {
    console.log("You are not an adult yet.");
}


/*
•	The outer if statement checks if the person is an adult (age 18 or older).
•	If the person is an adult, the nested if statement checks if they are old enough to vote (age 21 or older).
•	Based on these conditions, different messages are logged to the console.
•	Additionally, two boolean variables (isAdult and canVote) are used to track the eligibility status. */

//

function checkTemperature(temperature: number): void {
    if (temperature > 0) {
        if (temperature < 100) {
            console.log("The water is liquid.");
        } else if (temperature >= 100 && temperature <= 150) {
            console.log("The water is boiling.");
        }
    } else {
        console.log("The water is frozen.");
    }
}

/* In this example, the checkTemperature function contains nested if statements to determine the state of water based on the provided temperature.
The outer if-else block checks if the temperature is greater than zero. If true, it enters another if-else block to further evaluate the temperature range.
If the temperature is between 0 and 100, it prints "The water is liquid." If it's above 100, it prints "The water is boiling."
If the temperature is not greater than zero, it prints "The water is frozen." */


/*
1. Book Ordering System:
Develop a program for a bookstore that calculates the price of a book based on the customer's membership status and /n 
the quantity purchased. Apply discounts as follows:

Regular customers get no discount.
Silver members get a 10% discount.
Gold members get a 20% discount.
Platinum members get a 30% discount. */ 

async function BookOrderSystem() {
    let mStatus = await inquirer.prompt([
        {
            name: 'selectedOption',
            type: 'list',
            message: 'For Membership status Please select an type',
            choices: ['Regular customer', 'Silver member', 'Gold member', 'Platinum member']
        },
        {
            name: 'bookNum',
            type: 'number',
            message: 'Please enter Number of books purchased'
        }
    ]);

    let unitPrice = 100;
    let status = mStatus.selectedOption;
    let bookPurchased = mStatus.bookNum;

    // Check membership status and calculate total bill
    let totalBill = bookPurchased * unitPrice;
    if (status !== 'Regular customer') {
        // Apply discount for non-regular customers
        let discountRate = 0;
        if (status === 'Silver member') {
            discountRate = 0.1; // 10% discount for Silver members
        } else if (status === 'Gold member') {
            discountRate = 0.2; // 20% discount for Gold members
        } else if (status === 'Platinum member') {
            discountRate = 0.3; // 30% discount for Platinum members
        }

        // Apply discount to total bill
        totalBill -= totalBill * discountRate;
    }

    console.log(`Your total bill is: ${totalBill}`);
}

BookOrderSystem();