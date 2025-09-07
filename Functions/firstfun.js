// Function Creation

// console.log("S")
// console.log("H")
// console.log("R")
// console.log("E")
// console.log("Y")
// console.log("A")
//convert it into function

//function definition
// function printName() {
//     console.log("S")
// console.log("H")
// console.log("R")
// console.log("E")
// console.log("Y")
// console.log("A")
// }

//function calling: printName -> reference to that function, it will not print anything
//                  printName() -> function execution
// printName()

//Add two numbers
// function addtwonumbers(number1,number2){
//     console.log(number1 + number2);
    
// }
//calling
// addtwonumbers(5,6);    // 11
// //addtwonumbers(5,"4");  // 54 (not get added as 5 is also converted to string) 
// //addtwonumbers(5, null);  // 5

// const result = addtwonumbers(5, 6)   
// console.log(result);       //undefined (as we are not returning anything in function so it is undefined)

// function with return
// function addtwonumbers(number1,number2){
//  /* // let result = number1+ number2;
//     // return result;
//     //console.log(result);   //not valid after return statement nothing will print or written
//                  OR   */
//     return number1 + number2;
// }

// const result  = addtwonumbers(9,7) 
// console.log(result);   // 16

// function loginUserName(username){
//     return `${username} just logged in`
// }

//calling
// loginUserName("Shiva")  // will not print anything
// //calling and printing 
// console.log(loginUserName("Shiva"))    //Shiva just logged in

//+++ IMP : if not passed anything in calling it will print "undefined"

//console.log(loginUserName()) //if user have not passed anything
//O/P : undefined just logged in

//++++++++++++++++++ If - else
// function loginUserName(username){
//     if(username == undefined){
//         console.log("Please enter a user name")
//         return;   //after that nothing will print or work not any else statement outside if block
//     }
//     return `${username} just logged in`
// }
// //nothing passed
// //console.log(loginUserName())   //Please enter a user name    undefined
// //empty string passed
// console.log(loginUserName(""))   //just logged in => (only message printed)


//Another way => smart programming

// function loginUserName2(username){
//     if(!username){     //username will be undefined and undefined in js treated as false =>(!false) means true . so, (username === undefined) is equivalent to (!username)
//         console.log("Please enter a user name")
//         return
//     }
//     return `${username} just logged in`
// })
//console.log(loginUserName2())   //Please enter a user name   undefined

//console.log(loginUserName2("Tiwari g")) //Tiwari g just logged in

//console.log(loginUserName2("")) //Please enter a user name   undefined

//++++++++++ with default values
// function loginUserName2(username="sam"){
//     if(!username){     //username will be undefined and undefined in js treated as false =>(!false) means true . so, (username === undefined) is equivalent to (!username)
//         console.log("Please enter a user name")
//         return
//     }
//     return `${username} just logged in`
// }
// //console.log(loginUserName2())  //sam just logged in

// console.log(loginUserName2("SHreya")) //SHreya just logged in

//***************** Functions with objects ******/
// function calculateCartPrice(num1){
//     return num1
// }

// //console.log(calculateCartPrice(7))  // 7
// console.log(calculateCartPrice(7,6,5)  // 7 =>here also it is returning only 1 value

//So for returning multiple values we use spread and rest

// function calculateCartPrice(...num1){
//     return num1
//  }

//  console.log(calculateCartPrice(700,600,5000)) // [ 700, 600, 5000 ]

//++++++++ IMP :-
//what are the values for num1
// function calculateCartPrice(val1,val2,...num1){
//     return num1
//  }

//  console.log(calculateCartPrice(700,600,5000,800)) 
 // O/P :- [ 5000, 800 ] as 700 assigned to val1,600 assigned to val2 , remaining(5000,800) assigned to num1

//+++++++++++++++++How to pass object in function
//Object creation
const user ={
    name :" shreya",
    age : 23,
}

//function creation
//anyObject is used as the developer don't knws the type of response 
// whether is a string , api, array

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
    
}
//function calling and passing object to it
handleObject(user)   //Username is  shreya and age is 23

//+++++++++++++++++How to pass array in function

//Array creation
const newArray=[200,300,400,800]

//function creation
function returnvalue(getArray){
     return getArray[1]      // 1st index element
}

//function calling and result printing
//console.log(returnvalue(newArray)) // 300

 console.log(returnvalue([200,700,400,1000]))  // 700