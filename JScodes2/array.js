//array =>Array is collection of multiple items under a singke variable name.
//JS arrays are resizeable and is a mixture of different datatypes.
//EXM - arr=[3,4,5,6,"hitesh",[5,4,"shreya"],{object :2}]

//Arrays in JS are ZERO-INDEXED
// +++++ IMP: Array copy-operation creates shallow copies(shallow copy of an object is a copy 
// whose properties share the same references means there will be change in copy as well as in original array )

//Declaration of array in JS
//  const myArr=[6,2,3,5];

// console.log(myArr);    //[ 6, 2, 3, 5 ]
// console.log(myArr[2]);   // 3 
// console.log(myArr[4]);   //undefined
//Array methods

// myArr.push(4);   //added at end
// console.log(myArr);  //[ 6, 2, 3, 5 ,4] 
// myArr.pop();   //removes last value
// console.log(myArr);   // [ 6, 2, 3, 5]

// myArr.unshift(9);  //  [ 6, 2, 3, 5 ] => inserts element at start
// // unshift seems to add inserting elements at first position but it is not considered a right approach as 
// // we have to shift "all" the  elements in the array towards right .
// // although  we use it when needed  
// console.log(myArr);   // [ 9, 6, 2, 3, 5]

//  myArr.shift();  // [ 6, 2, 3, 5 ] => deletes from start
//  console.log(myArr);   //[ 2, 3, 5 ]

//JOIN operation => converts array into string.
// const newArr = myArr.join();
// console.log(newArr);  // 6,2,3,5 (string with comma separated)

//slice => returns section of an array , doesn't include lastindex 
//splice method => returns section of an array , includes lastindex
//But the main diff is that 
//slice do not manipulate original array
//splice manipulates original array.

// const my1 = myArr.slice(1,3)

// console.log("A",myArr);   //original array  => A [ 6, 2, 3, 5 ]
// console.log(my1);    //[ 2, 3 ]

// const my2= myArr.splice(1,3);

// console.log("A",myArr);   //original array => A [ 6 ]
// console.log(my2);    //[ 2, 3, 5 ]

//+++++++++++++++++ Arrays Part 2 +++++++++++++++++++++++++++++

const fruits =["apple","mango","banana","papaya"]
const veg=["potato","tomato","peas"]

//fruits.push(veg)  //it will add entire "veg" array to the end of fruits array as an "element".(array ke andar array) 
//console.log(fruits)  // ['apple',  'mango',  'banana',  'papaya',  [ 'potato', 'tomato', 'peas' ]]

// fruits.concat(veg)  //it will not work like that
// console.log(fruits);   // it will give only fruits array, no change

//AS concat Combines two or more arrays. 
// This method returns a "new array" without modifying any existing arrays.
//so we have to store resultant in a new array variable

// const new_array = fruits.concat(veg)  
// console.log(new_array);  //['apple',  'mango','banana', 'papaya','potato', 'tomato','peas']

//NOTE: push() adds in existing array 
//      concat() returns a new array

// IMP (Widely used): Another easy method "spread()" to merge two arrays.

//spread() means to spread something  
// for exm you have a glass of glass and u just threw it it brokes into pieces 
// this is what spread does it spreads individual elements, in an array

//Syntax : newArray = [...array1, ...array2, ...arrayn](3 dots only)
//  const all_new_eatables= [...fruits, ...veg]
//  console.log(all_new_eatables);   //['apple',  'mango','banana', 'papaya','potato', 'tomato','peas']
 
//NOTE : concat() can only have two arrays. Although we can use concatall to merge multiple arrays
//       spread() can merge multiple arrays 

const another_array = [1,2,3,[4,5,6,7],[7,5,6,[2,1,5]]]
//when this kind of situation arises use "flat()" method
//flat() method - Returns a new array with all sub-array elements concatenated into it recursively 
// up to the specified depth. we have to give depth if not known to where we have to  spread the array 
// just give "Infinity" as parameter so it will spread the entire array.

// const real_array = another_array.flat(Infinity);
// console.log(real_array);  // [ 1, 2, 3, 4, 5, 6, 7, 7, 5, 6, 2, 1, 5]


//isArray() method - checks if a given is array or not. Returns "True" , "false"
//from() method - it converts a given parameter(string,object etc) to an array.

// console.log(Array.isArray("Shreya")) //false

// console.log(Array.from("Shreya")); //[ 'S', 'h', 'r', 'e', 'y', 'a' ]

// //NOTE :
// //object given => INTERESTING CASE
// console.log(Array.from({name : "shreya"}));  // empty list [] as it is not able to convert object
// we have to specify whether key or value has to be converted

//.of() method => Returns a new array from a set of elements.

let score1 =100;
let score2 =400;
let score3 =500;

console.log(Array.of(score1,score2,score3));
// O/P : [ 100, 400, 500 ]
