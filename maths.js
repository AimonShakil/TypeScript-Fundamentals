// const balance: number = 400;
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // 2 or 1 decimal this method most used in ecomerce website as we calculate GST etc and want to see two values
// const otherNum : number = 123.8966 // to practice other properties, priority her is before decimal
// console.log(otherNum.toPrecision(4));
// const hundreds : number = 1000000;
// console.log( hundreds.toLocaleString()); // 1,000,000 US number system type will be returned 
// +++++++++++++++++++++++++++++ Maths++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); //changes negative values poitive stays positive
console.log(Math.round(4.3));
console.log(Math.min(33, 4, 2, 666, 777));
console.log(Math.max(33, 4, 2, 666, 777));
console.log(Math.random()); // most widely used math library , its random values alway comes between 0 to 1
console.log(Math.floor(Math.random() * 10) + 1);
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
export {};
