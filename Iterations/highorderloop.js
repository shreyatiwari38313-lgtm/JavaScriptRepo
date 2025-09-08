// Specifically for arrays,objects,Strings(as both are iteratable) in JS
//**************** for-of loop *****************

// Syntax:
// for(const iterator of object){ }
//here object means on which we have to apply loop(not a specific array) 
//it can be array or an object

//Array
// const myArr = [1,2,3,4,5]
// for(const i of myArr){
//   console.log(`Value is ${i}`)

// }

//String
const greetings ="Hello world!"
for(const greet of greetings){
   // console.log(greet);       //same output
   //  console.log(`Each char is ${greet}`)  //same output
}

// Maps => map is also an object("key-value" pair) its entries should be unique and it also maintains order of insertion
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")

//console.log(map);

// O/P :- 
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States Of America',
//   'FR' => 'France'
//  }

//Looping through maps
for (const  key of map) {
   // console.log(key);
    
}
//O/P :-
// [ 'IN', 'India' ]
// [ 'USA', 'U]nited States Of America' ]
// [ 'FR', 'France' ]

//destructuring array on o/p
for (const  [key,value] of map) {
   // console.log(key,':-',value);
    
}
//O/P :-
// IN :- India
// USA :- United States Of America
// FR :- France

//Objects
// const UserDetails ={
//     name : "shreya",
//     age : 23,
// }

// for(const details of UserDetails){
//    // console.log(`The detail of user is ${name} and ${age} `)
    
// }  // O/P :- TypeError: UserDetails is not iterable means for of loop doesn't work for objects

//**************** for-in loop **********************
// It is used to  iterate objects.
// Not specifically objects it can also be used with other things

//first
// const myObject ={
//    js : "JavaScript",
//    rb : "Ruby",
//    cpp : "C++",
// }

// for(const info in myObject){
//    console.log(`The full forms are ${info}`);
   
// } 

// O/P :- only keys are printed 
// The full forms are js
// The full forms are rb
// The full forms are cpp

//second
const myObject ={
   js : "JavaScript",
   rb : "Ruby",
   cpp : "C++",
}

for(const info in myObject){
  // console.log(`The full forms are ${myObject[info]}`);
   
} 

// O/P :- Now values are printed for given Object(myObject)
// The full forms are JavaScript
// The full forms are Ruby
// The full forms are C++


// third
const myObject2 ={
   js : "JavaScript",
   rb : "Ruby",
   cpp : "C++",
}

for(const info in myObject2){
  
  // console.log(`${info} shortcut is for ${myObject2[info]}`);
   
} 
// O/P :- Both  key and values are printed
// js shortcut is for JavaScript
// rb shortcut is for Ruby
// cpp shortcut is for C++

//++++++++++ Arrays (forin loop)

const program = ["java","C++","JS"]
 
for(const values in program){
   //console.log(`The value is ${values}`);
   
}
// Here keys are printing means index of array
// In Array , keys -> Index

const program2 = ["java","C++","JS"]
 
for(const values in program2){
// console.log(`The value is ${program[values]}`);
   
}
//O/P :-
// The value is java
// The value is C++
// The value is JS

//++++++++++++ MAPS(for-in loop)

const map2 = new Map()
map2.set('IN',"India")
map2.set('USA',"United States Of America")
map2.set('FR',"France")

for(const keys in map2){
//   console.log(keys);
   
}
//O/P :-
//Nothing will be printed as Map is not iterable using for in loop

//**************** for-each loop *******************/

//forEach loop is a built-in property given for iterating arrays.
//forEach loop needs a callback(unnamed) function to execute.

//++++++++++ regular function
const fruits = ["apple", "mango","banana"]

fruits.forEach( function (values){
   //console.log(values)
   
} )

//O/P:- apple
//      mango
//      banana

//+++++ Using arrow function

const veggies =["potato","peas","onion"]

veggies.forEach( (values) => {
  // console.log(values)
   
} ) 
//O/P:- potato
//      peas
//      onion

//+++++++++ if function can be given

const veggies2 =["beans","peas","tomato"]

function printme(item){
  // console.log(item);
}

veggies2.forEach( printme);   // NOTE : you have to only give "reference" not to call that function

// O/P:-
// beans
// peas
// tomato

//+++++++ forEach has other parameters also not only values

const fruits2 = ["apple", "mango","banana"]

fruits.forEach(  (items,index,arr) => {
   //console.log(items,index,arr)
   
} )

// O/P:-
// apple 0 [ 'apple', 'mango', 'banana' ]
// mango 1 [ 'apple', 'mango', 'banana' ]
// banana 2 [ 'apple', 'mango', 'banana' ]

//************** Objects in array **************/
// [ {},{},{} ]

const myCoding= [
   {
      languageName : "Java",
      fileName : "java",
   },
   {
      languageName : "JavaScript",
      fileName : "js",
   },
   {
      languageName : "HTML",
      fileName : "html",
   }

]

//values accessing
myCoding.forEach( (iterable) =>{     //iterable -> "values inside array"(here objects)
  // console.log(iterable.fileName);  //as iterable here is object so we have to access values using "Dot(.)" operator
   
})

//O/P:-
// java
// js
// html

