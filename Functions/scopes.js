//Scope 
 
// var b = 300
// if(true){
//     var b = 200
//     console.log("Inner " ,b);  //200  => updated value
    
// }

// console.log("Outer ",b);   //200  => updated value
// Note : var has global scope,it is shared among all blocks 

//Example 2
// let a = 300
// if(true){
//    let a = 200     //this a is different from "a" declared above
//     console.log("Inner " ,a);  //200  

// }

// console.log("Outer ",a);     //300
// NOTE : let has access to only that block in which  it is defined so it has local scope

//Example 3
// const a = 300
// if(true){
//     const a = 200     //this a is different from "a" declared above
//     console.log("Inner " ,a);   // 200

// }

// console.log("Outer ",a);  // 300
//
// NOTE : const has access to only that block in which  it is defined so it has local scope

//++++++++++++ NESTED FUNCTIONs ++++++++++
// function one(){
//     const username = "shreya"

//     function two(){
//         const website = "github"
//         console.log(username);
//         }
//       //console.log(website)  // not defined error as website can't be acessed outside the block 
        
//     //  two()   //shreya
//     }

  //  one()   //nothing printed as nothing is to be printed inside one() function


// Scope in if-else
//   if(true){
//     const username = "shreya"
//     if(username == "shreya"){
//         const website = " github"
//         console.log(username + website); // 3rd time =>  shreya github
        
//     }
//   // console.log(website);  // 1st error as it is local variable can't be accessed outside scope
    
//   }
// // console.log(username);   //2nd error as it is also local variable
  
//++++++++++++++++ interesting ++++++++++++++++
//Example 1
// function addone(num){
//     return num + 1
// }

// addone(4)

// //Example 2
// const addtwo = function addtwo(num){
//     return num + 2
// }

// addtwo(7)

// BOTH are same process

//Example 3
// console.log(addone(4))
// function addone(num){
//     return num + 1
// }

// //O/P : 5

// //Example 4

// console.log(addtwo(7));
// const addtwo = function addtwo(num){
//     return num + 2
// }
//O/P : error 

//NOTE (for example 4) : this is known as concept of HOISTING (you cannot access variable before defining or where to exactly call the function)