// Variable declaration : 4 ways
let myName = "Aimon";
let age;
let color;
let height = 5;
/* Template Literal : also known as template strings a dynamic way of writing string using backticks allow for more flexible string interpolation and /n
multiline strings (allowing line breaks within the string without needing escape characters like \n) compared to/n
traditional string literals. enclosed in backticks (`), They can contain placeholders, indicated by ${}` */
// collective Printing using Template Literals. 
let myName1 = "Aimon";
let secName = "Shakeel";
let charT = "advance";
let prop_1 = "learner";
let printing = (` ${myName1} ${secName} ${charT} ${prop_1}`);
console.log(printing);
//Example 2
console.log(`My Intro will be ${myName1}${secName} is a ${charT} ${prop_1}`);
let emplName = "Mohit Jain";
let compName = "geeksforgeeks";
// Pre-ES6   
let emplDetail1 = emplName + " works in the " + compName + " company.";
// Post-ES6   
let emplDetail2 = `${emplName} works in the ${compName} company.`;
console.log("Before ES6: " + emplDetail1);
console.log("After ES6: " + emplDetail2);
// Example 3
let mystring1a = "MS1";
let mystring2a = "MS2";
let mystring3a = "MS3";
let mystring4a = "MS4";
console.log("Value in my string" + mystring1a + mystring2a + mystring3a + mystring4a);
console.log("\n"); // next paragraph
// Template Literals, with \t there comes a tab gap// 
console.log(`Value in mystring${mystring1a}\n${mystring2a}\n${mystring3a}\n${mystring4a}`);
console.log(`Values in my string ${mystring1a}\n${mystring2a}\n${mystring3a}\n${mystring4a}`); // practice
// Union type or Compound type: 
// Union type describes a value that can be one of several types and use vertical bars (pipe) to seperarate each other
// it allow access to common location by different data types.
let myVar;
myVar = "My Name";
console.log(typeof myVar);
myVar = null;
console.log(typeof myVar);
myVar = 9;
console.log(typeof myVar);
console.log(); // shortkey log+tab// 
//
let code;
code = 123; // OK
code = "ABC"; // OK
//code = false; // Compiler Error
//Sample program:  
let money_in_Bank = 500;
let total_money = money_in_Bank + 1000;
console.log(total_money);
let hol_cost = 700;
let rem_money = total_money - hol_cost;
console.log(rem_money); // output 800
//Sample Program:
var nameT = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name" + nameT);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
// TYPE ASSERTION: changing a variable from one type to another, < > symbols and place it in front of the variable or expression. 
// The reason why it's not called "type casting" is that casting generally implies some sort of runtime support while, /n
//“type assertions” are purely a compile time construct and a way for you to provide hints to the compiler on how you want your code to be analyzed.
/* Type assertion in TypeScript is a way to tell the compiler about the type of a variable, overriding its default/n
 inference. */
//1 Angle-bracket syntax:
let someValue = "this is a string";
let strLength = someValue.length;
//As-syntax:
let someValue1 = "this is a string";
let strLength1 = someValue.length;
//convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
// Assertion for Narrowing - Praticle use case
const addorConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addorConcat(2, 2, 'concat');
//
var str = '1';
var str2 = str; //str is now of type number 
console.log(typeof (str2));
/* The reason <any> is used in the type assertion is to circumvent TypeScript's type checking and allow the conversion
of the variable str to type number directly. It's a way of telling TypeScript to trust that the conversion from string to
number will succeed, even though it's not type-safe. */
//INFERRED TYPING
let num4 = 5;
console.log("value of num " + num4);
//num4 = "12";         // throw error, type string cannot be assigned to number
//++++++++++++++++++++ PROBLEMS
/* 1 : Temperature Conversion: Create a TypeScript program that converts temperatures from Celsius to Fahrenheit /n
and vice versa.Prompt the user to enter a temperature value and perform the conversion. */
import inquirer from "inquirer";
let tempertureData = await inquirer.prompt([{
        name: "Temp",
        type: "number",
        message: " Please input todays Temperature"
    }]);
function CtoFconversion(tempertureData) {
    let Fahrenheit = (2 * tempertureData) + 30;
    console.log(Fahrenheit);
    return Fahrenheit;
}
let result = CtoFconversion(20);
function FtoCconversion(temF) {
    let Celsius = (temF - 30) / 2;
    console.log(Celsius);
    return Celsius;
}
let result2 = FtoCconversion(84);
//Circle Area Calculator: Write a program that calculates the area of a circle given its radius./n
// Prompt the user to enter the radius and compute the area using the formula area = π * radius^2.
function C_AreaCalc(radius) {
    let area = Math.PI * radius * radius;
    console.log(area);
    return area;
}
let results = C_AreaCalc(30);
//Conditional Variable Usage:
//Grade Calculator: Write a program that accepts a numeric grade from the user and displays the corresponding /n
//letter grade (A, B, C, D, or F) based on the grading criteria.
function GradeCalc(marks) {
    if (marks <= 30) {
        console.log("Your are passed with grade F");
    }
    else if (marks <= 50) {
        console.log("Your are passed with grade D");
    }
    else if (marks <= 65) {
        console.log("Your are passed with grade C");
    }
    else if (marks <= 80) {
        console.log("Your are passed with grade B");
    }
    else if (marks <= 95) {
        console.log("Your are passed with grade A");
    }
}
let reultss = GradeCalc(79);
