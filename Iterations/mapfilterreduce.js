//+++++++++ forEach() example
const coding = ["Java","js","python","Php"]

const values = coding.forEach( (items)=> { 
    //console.log(items);
    return items     // undefined
} )
//console.log(values);    // undefined
// O/P:- 
// Java
// js
// python
// Php
// undefined    as forEach loop doesn't return anything.It can print only

//************** filter() property ************/

//forEach loop doesn't return anything.It can print only.But assume we have a condition that we have to return(hold) sometimes not printing the values coming from databases
//Here comes filter() property which returns. It also takes callback(unnamed) function in parameter
// we have to "give a condition"(not neccsessary but sometimes) in that on the basis of which filter() fetches values

const myNums = [1,2,3,4,5,6,7]
//no curly braces, no return keyword
//const newNums = myNums.filter( (num)=> num > 4)

// curly braces, use return keyword
const newNums = myNums.filter( (num)=> { return num > 4})
//console.log(newNums)   // [ 5, 6, 7 ]

// +++++++++ Can Also be done by "forEach" its a bit long as we have to apply if-else for condition

const myNums2 = [1,2,3,4,5,6,7]

const newNums2 =[]  // we have to declare an empty array first

myNums2.forEach( (vals)=> {
 if(vals > 2)
   return newNums2.push(vals)   //push() basic method to insert elements in array
} )
//console.log(newNums2);

//------------- Some more operations with filter()
// access values from books array which is in database

// //give details about books which have "History" as its genre
// const userbooks = books.filter( (val)=> val === "History" )
// //console.log(userbooks);

// //give details about books which are published after year 2000
// //const userbooks2 = books.filter( (info)=> info >= 2000)      //correct syntax

// const userbooks2 = books.filter( (info)=> { return info >= 2000})// correct syntax
// // console.log(userbooks2);

// //give details about books which are published after year 2000 and genre is "History"
// const userbooks3 = books.filter( (info)=> info >= 2000 && genre === "History")      
// // console.log(userbooks3);
 
//******************* map() method ******************/

//same as filter(). It can return 
// It supports chaining concept

const myNums3 = [1,2,3,4,5,6,7]

const newNums3 = myNums.map( (num)=> num + 10)
//const newNums3 = myNums.map( (num) => { return num + 10 })

// chaining concept
const newArr= myNums3
                      .map( (num) => num*10)  // [ 10,20,30,40,50,60,70] => this resultant array will pass to second map
                      .map((num) => num + 1)  // [11,21,31,41,51,61,71] => this array will pass to next filter
                      .filter( (num)=> num > 40) //[51,61,71] => final result
//console.log(newArr);

//************************* reduce() method *******************/
//same as filter ,map, it returns and needs callback function .
// This callback fun has two parametres (accumulator,currvalue)
//but acc don't knw where to start . so we give its initial value

const myAr =[1,2,3]
const total = myAr.reduce( (acc,currval ) => { 
   // console.log(`accumulator: ${acc} currvalue: ${currval} `);
    
    return acc + currval
} ,0)   // starting val = 0  we can give any value 3,4.....
 //console.log(total);    // 6

