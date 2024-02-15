/*Problem Statement: Calculating Factorial
Description:
Create a program that calculates the factorial of a given number. The factorial of a non-negative integer n, /n
denoted as n!, is the product of all positive integers less than or equal to n. */
/* 1. Basic Information Gathering:
Create a program that uses inquirer to prompt the user for their name, age, and favorite color. Display the collected /n
information at the end. */
import inquirer from "inquirer";
let qualities = await inquirer.prompt([
    {
        "name": "user_name",
        "type": "string",
        "message": "Please enter your name",
    },
    {
        "name": "user_age",
        "type": "number",
        "message": "Please enter your age",
    },
    {
        "name": "user_color",
        "type": "string",
        "message": "Please enter your fav color",
    },
]);
console.log(`User Your info is displayed below`);
console.table(qualities);
/* 2. Temperature Converter:
Build a program that asks the user to enter a temperature in Celsius. Use inquirer to gather input and then convert the /n
temperature to Fahrenheit, displaying the result. */
let Temp_2 = await inquirer.prompt([
    {
        name: "Tem_Celcius",
        type: "number",
        message: " Please enter Temp in Celcius",
    },
]);
console.log(` Temp in Fahrenheight is : ${Temp_2.Tem_Celcius = 2 * +30}`);
/*3. Guess the Number:
Implement a number guessing game. Generate a random number between 1 and 100, then prompt the user to guess the number /n
using inquirer. Provide feedback if the guess is too high, too low, or correct. */
/*4. Shopping List:
Develop a simple shopping list application. Use inquirer to repeatedly prompt the user to add items to their shopping list/n
.Display the final list when the user decides to exit. */
/* 5. Calculator:
Create a basic calculator program. Use inquirer to prompt the user for two numbers and an operation / n
(addition, subtraction, multiplication, division). Perform the calculation and display the result. */
/* 6. Task Manager:
Build a task manager that allows the user to add, view, and delete tasks. Use inquirer to prompt the user for actions /n
and display the task list. */
/*7. Palindrome Checker:
Implement a program that checks if a given word is a palindrome (reads the same backward as forward). Prompt the user/n
 to enter a word and display whether it's a palindrome or not. */
/* 8. Color Picker:
Develop a program that prompts the user to choose a color from a predefined list. Display a message based on their / n
selection. */
/* 9. BMI Calculator:
Build a BMI (Body Mass Index) calculator. Use inquirer to gather the user's height and weight, then calculate and /n
display the BMI. */
/* 10. Rock, Paper, Scissors Game:
Create a simple rock, paper, scissors game. Prompt the user to choose one of the options, generate a random choice for/ n
the computer, and determine the winner. */
