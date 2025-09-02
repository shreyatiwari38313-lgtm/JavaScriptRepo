//**************STRINGS*******************
// const name ="shreya";
// const repoCount = 50;
// //concatenating strings
// console.log(name + repoCount + " Value");

//Better way to concatenate strings => using "BackTICKS"
//BAckTicks => in backticks we make placeholders "${}" and
//  in that user can directly inject variables

//**IMP NOTE
// console.log(`Hello System my name is ${name} and my age is ${repoCount}`);
// **

//additionally we can apply functions in variables say name.length()
//***********String declaration**************/
//const newNAme = new String("shreya Tiwari");

// In String characters have positions means String also have indexes starting from 0
// Methods - length without paranthesis
//a)length
// console.log(newNAme.length);   //length without paranthesis
// console.log(newNAme.toLowerCase()); //shreya tiwari
// console.log(newNAme.toUpperCase());  //SHREYA TIWARI
// console.log(newNAme.charAt(3)); //charAt(index) with paranthesis
// console.log(newNAme.indexOf('T'));  // 7 => starting from 0
// console.log(newNAme.indexOf('t')); // -1 when not found
// console.log(newNAme.substring(0,5));  // shrey => ending index excluded
// console.log(newNAme.slice(0,4)); //  shre =>  excluding ending index


str1="Hello system!"
// str2=" This side shreya loving JS"
// console.log(str1.concat(str2));   // to merge two strings => "stringOne.concat(stringTwo)""

//console.log(str1.split(" "));    //[ 'Hello', 'system!' ] => stringOne.split(separator like " ", ",", "!")
//split(separator) => returns subarray of strings

// console.log(str1.replace('E','I')); //Nothing will change as string has e in small letters
// console.log(str1.replace('e','i')); //Hillo system!

// console.log(str1.replaceAll('s','m')); //Hello mymtem!

//************************ Number and Maths ***********************

const score = 400 //simply a "number" type value(automatically)

//to explicitly make variable "number" type
const balance = new Number(100)
//console.log(balance);    //[Number: 100]

// console.log(balance.toString()); //type String 
// console.log(typeof balance);     //object
// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(1));   //100.00 => 100.0(1 precision)

// const othernum = 123.8966
// console.log(othernum.toPrecision(3)); //124

// console.log(othernum.toPrecision(4)); //123.9

// const number = 1000000
// console.log(number.toLocaleString());  //1,000,000 => commas acc to US Standard

// console.log(number.toLocaleString('en-IN')); //10,00,000 => commas acc to INDIAN Standard


// +++++++++++++++++++ MAths ++++++++++++++++++

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); // 4 =>sign change(only minus value changes to positive)
// console.log(Math.round(4.6)); // 5

// console.log(Math.ceil(4.6)); // 5 ceiling fan
// console.log(Math.floor(4.6)); // 4 floor-farsh

// console.log(Math.min(4,6,10,5,8,9)); //4
// console.log(Math.max(4,6,5,9,2,1,3,10)); //10

//*****IMP -- .random() function
// console.log(Math.random()); //value comes in between 0-1
// console.log(Math.random()*10); //value ek left shift ho jaaegi
// console.log((Math.random()*10) + 1); //.ke baad agr pehle se zero tou value 0 se start hogi usko avoid krne ke liye  + 1
//OUTPUTS
//0.36889251207287077
//8.001576864655743
//3.2490282876956647

//agr hme value minimum 10 chahiye between range 10-20
const min=10
const max=20

console.log(Math.random() *(max-min +1)); //10.034630754451879
console.log(Math.random() *(max-min +1)+ min);
//functions
// E:2.718281828459045
// LN1: 0.6931471805599453
// LN10: 2.302585092994046
// LOG2E: 1.4426950408889634
// LOG10E: 0.4342944819032518
// PI: 3.141592653589793
// SQRT1_2: 0.7071067811865476
// SQRT2: 1.4142135623730951
// abs: abs()
