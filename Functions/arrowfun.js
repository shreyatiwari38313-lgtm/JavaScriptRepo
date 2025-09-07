// this  => to refer to currrent context
//this works only inside Objects not inside function nor inside arrow function
// const user = {
//  username : "hitesh",
//  price : 999,

//  welcomeMessage : function () {
//     console.log(`${this.username}, welcome to website`);
    
//  }

// }
// user.welcomeMessage()   //hitesh, welcome to website => the current context(content) was same till here
// user.username ="sam"    // but here the current context has been changed
// user.welcomeMessage()   //sam, welcome to website => b'coz the current reference here is sam

// second
// const user2 = {
//  username : "hitesh",
//  price : 999,

//  welcomeMessage : function () {
//     console.log(`${this.username}, welcome to website`);
//     console.log(this);
    
//  }

// }
// user2.welcomeMessage()   
// user2.username ="sam"    
// user2.welcomeMessage()

// O/P :-

// hitesh, welcome to website
// {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
  //+++++++++ first current context 
// sam, welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
   //  //+++++++++ second current context 

//third 
// const user2 = {
//  username : "hitesh",
//  price : 999,

//  welcomeMessage : function () {
//     console.log(`${this.username}, welcome to website`);

//  }

// }
// // user2.welcomeMessage()   
// // user2.username ="sam"    
// // user2.welcomeMessage()
// console.log(this);

// O/P:-
// {}  => empty

//++++  IMP => Global Object inside Browser is Window

// ++++++++++++++ can this be used inside function

// first
// function chai(){
//     console.log(this);
  
// }
// chai()    // there will be lots of values in the ouput

// second
// function chai(){
//     let username ="shreya"
//     console.log(this);
  
// }
// chai()           // same as above (global values etc)

//third => this can't be used inside functions 
// function chai(){
//     let username ="shreya"
//     console.log(this.username);
  
// }
// chai()    // undefined

//ANother method to declare functions
// const chai = function (){
//     let username ="shreya"
//     console.log(this.username);
// }

//+++++++++++++++ Arrow functions ++++++++++++++
// Basic arrow function to add two numbers

//NOTE :- when curly braces are used after arrow function ,
//        then must use return keyword

// const addTwo = (num1,num2) => {
//    return num1 + num2
// }
  //calling func
// console.log(addTwo(3,4))     // 7


//Another way to use arrow func
// first way
// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(3,4))     // 7

// //second way
// //NOTE :- when parathesis used after arrow func,
// //        no need to use return keyword
// const addTwoNums = (num1,num2) => ( num1 + num2 )
// console.log(addTwoNums(8,6));

//+++++++++++ Returning Object +++++++++++
//  when we have to return Object ,
// then we have to wrap it into paranthesis

//not a correct way (without parathesis)

//  const addTwo =(num1,num2) => {username:"hitesh"}
//  console.log(addTwo(4,3));    // O/P:- undefined
 
//correct way(with paranthesis)
//  const addTwo =(num1,num2) => ({username:"hitesh"})
//  console.log(addTwo(4,3));    // O/P:- { username: 'hitesh' }


//***************IMMEDIALTELY INVOKED FUNCTION(IIFE) *******/

// IIFE is used to remove pollution created by global scope variables
// and if user want to immediately invoke function

// first - creation of IIFE ->  just put paranthesis after function definition
// function chai(){
//   console.log("Hii! sir");
// }()              // SyntaxError: Unexpected token ')'

// second -> just wrap whole function into paranthesis

// (function chai(){
     //named IIFE
//   console.log("Hii! sir");
// })()

// NOTE : we have to give two paranthesis for IIFE creation ()()
//        () -> one for function definition
//        () -> another for function calling

// Third -> arrow IIFE
//write arrow function(here unnamed) first 
//then wrap it into paranthesis and also add 
//second paranthesis for calling

// (() => {
//   console.log("HII! ma'am")

// })()       // HII! ma'am

//PArametrized and UNNAMED IIFE

// ((name) => {
//   console.log(`hello js lover ${name}`)
  
// })('Shreya')      // hello js lover Shreya

//++++++++++ IMP INTERVIEW QUESTION ++++++++++
// How to write two IIFE together 

// //first
// (function chai(){
//   console.log("Hii! sir");
// })() 

// //second
// ((name) => {
//   console.log(`hello js lover ${name}`)
// })('Shreya')

// O/P : TypeError: (intermediate value)(...) is not a function. 
//        means the first function has no ending point  

//+++++++++++ JUST PUT A SEMICOLON AFTER FIRST FUNCTION
//first
(function chai(){
  console.log("Hii! sir");
})() ;

//second
((name) => {
  console.log(`hello js lover ${name}`)
})('Shreya')

// O/P:- Hii! sir
//       hello js lover Shreya