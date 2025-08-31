// //**********DataTypes In JS***************
// //how to store and access data in memory ,
// // On the basis of that DataTypes are categorized into two types.

// // Primitive DataTypes -- In this copy of the original value is passed and the changes are made on that copy not original value.
//  //They are of 7 types in memory:
// // String, Number, Boolean, null, undefined, Symbol, BigInt

// const score =100 //number
// const scoreValue = 100.3 //number

// const isLoggedIn =false
// const outSideTemp=null      //null 

// //**IMP NOTE -> typeof(outSideTemp)="object"

// var userId;                 //undefined
// let userId =undefined      //undefined

// const id= Symbol('123')       //Symbol
// const anotherId = Symbol('123');

// console.log(id === anotherId); //false =>as every symbol is unique even though they have same values.

// const bigNumber = 354422788648767n; //bigInt


// //Reference (Non-Primitive)

// //Array, Objects, Functions => all non-primitive DT have typeof ""Object""

// //array
// const fruits =["apple" , "mango" , "banana" , "orange"];

// //Object => data is stored in key-value pair
// //whatever written in curly braces is an object
//  let myObj = {
//     name: "shreya",
//     age : 22,
// }

// //function 
// const myFunc=function(){
//     console.log("hello ");
// } 

//**************STACK And HEAP*************/
//Stack (Primitive DAta Types) -a copy of  original value is given
//Heap(Non-Primitive DAta Types) - reference or memory adress of original value is given

//EXAMPLE 
// let myName ="Shiva Tiwari";
// let anotherName = myName

// anotherName ="baby"

// console.log(myName);  //value not changed => "Shiva Tiwari" as its copy was passed and the change tookplace in copy not original value
// console.log(anotherName); //value changed => baby 

let user1 = {
    email: "user@google.com",
    upi : "user@ybl",
}

let user2= user1;
//object attributes accessed using dot(.) symbol
user2.email = "shreya@google.com";
console.log(user1.email);    //shreya@google.com
console.log(user2.email);    //shreya@google.com

// value will be same 
// as reference of original value was given
// so change will reflect in original value 



