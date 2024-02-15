
let numbers : number[] = [61,32,33,44,55,65,77,99,22]
// let names: string[]
//

//console.log(numbers[7]); // [0, 1,2,3,4,5,6,7,8,9] this is array indexing
console.log(numbers);
console.log(numbers.length);

console.log(numbers.push(101)); // [0, 1,2,3,4,5,6,7,8,9101] through this we can incorporate 3 functions in 1

console.log(numbers.length);

console.log(numbers.pop()); // it will print he value it has poppped out
console.log(numbers);
console.log(numbers.length);

//
let mixType : number[] | String[] | Boolean[] =["Singleton", "true", "10"]
let mixType2 : number[] | String[] | Boolean[] = [true, false]
let mixType3 : number[] | String[] | Boolean[] = [1,2,3,4]


mixType.push("Alpha");
//mixType.push("True");
//mixType.push("10");


numbers.splice(8,0,500);

console.log(numbers.splice (8,0,500));
console.log(numbers.splice (8,2,500,600,700,800)); // 8th index se 2 elements delete kr diye
console.log(numbers);

let myslice = numbers.slice(8,11);
console.log(myslice);


let number: number[] =[21,12,43,54,45,66,17,81,91,10];  // when we declare array type variable typescript gives somes functions and properties with arrays
//                    [0,  1, 2 ,3 ,4 ,5 , 6, 7, 8, 9] this is indexing
console.log(numbers[7]);
console.log(number[7]);

console.log(numbers.length); // means how many elemnts are present in the array ,,, Method and function is same 

console.log(number.push(101)); // this method/function push 101 at the end of array
number.pop()

console.log(numbers.splice(5,2,600,700,800)); //makes a new array and doing in that
console.log(numbers);

// Slice


//Session3
let mySlice = numbers.slice(8,11);
console.log(mySlice);

let tempArray = [];
let cnincs: number[] = []; //empty array declayed but not initilaized 
let names:string[] =[];
let cLanguages = ["C#", "Java", "COBOL", "C++", "Assembly", "Typescript"];



let mixArray2 : string []|Number[] =[123, ] ; // here we can have only one type string or number, one type at a time
mixArray2. push(123);
mixArray2. push(124);
mixArray2. push(34);
mixArray2. push(11);

console.log(mixArray2);

mixArray2 = ["Alpha", "Beta", "Gamma"];
console.log(mixArray2);
 
//Another way , Arrays is an object having properties and Functions
let mixArray :(string|number)[] = ["Alpha", "124"]; // can have here both types of data,2 types ja sakhte hai but decison initiliaze krty tim ekrna ho
                                                    // this is direct initiliazation


//Another Array

mixArray2.reverse() .reverse;
console.log(mixArray2);

// Copying an array

let copyofArray = mixArray2.copyWithin(0,0);
console.log(copyofArray);

//Looping on Array

const dcHeros : string[] = [ "Batman", "Thor", "Ironman"]
dcHeros.map(dcHeros => {
    return ` Hero is ${dcHeros}`
})


