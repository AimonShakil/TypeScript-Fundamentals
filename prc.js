// Multiples/ Factors , even and odd ( num 5 % 2 === 0 ) 
// <= , >=
// const month : number  = 5;
// switch (month) {
//     case 1 :  // can use month name in same case as well to mach with values jan
//     console.log("January");
//     break;
//     case 2 : 
//     console.log("Feb");
//     break;
//     case 3 : 
//     console.log("March");
//     break;
//     case 4 : 
//     console.log("April");
//     break;
//     case 5 : 
//     console.log("May");
//     break;
//     default :
//     console.log("Default Case executed");
//     break;
// }
// let country = ["Pakistan", "China", "Canada"]
// let voterage = Math.round (Math.random()* 50);
// let domicile =["Sindh", "Punjab", "KPK", "Balouchistan"];
// if (country[1] === "Pakistan") {
//     if (voterage >= 18) {
// console.log(`Voter ager is : ${voterage} and Here is your ticket`)
// }  else {
// console.error("Age restriction")
// }
// }
// else {
// console.log("Invalid country")
// }
// let num1 : number = 10;
// if(num1 > 10){
//     console.log('Number is greater than 10');
// } else if (num1 === 10) {
//     console.log('Number is equal to 10');
// } else {
//     console.log('Number is Less than 10');
// }
import inquirer from "inquirer";
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
        }
        else if (status === 'Gold member') {
            discountRate = 0.2; // 20% discount for Gold members
        }
        else if (status === 'Platinum member') {
            discountRate = 0.3; // 30% discount for Platinum members
        }
        // Apply discount to total bill
        totalBill -= totalBill * discountRate;
    }
    console.log(`Your total bill is: ${totalBill}`);
}
BookOrderSystem();
