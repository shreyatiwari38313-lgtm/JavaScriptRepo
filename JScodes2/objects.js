//objects in JS
//created using two ways => by literals , by constructors 

//Object literals
// const user = {}  //empty object

// //Object stores data in "key : value" pair 
// //where comma - separated value  can be anything string , boolean, object ,array , number.
// const  user2 ={
//     name: "xyz",
//     age : 23,
//     isLoggedIn : false,
//     LastLogInDays : ["Monday" ,"Saturday"],
//     }

//     console.log(user2.age);  // 23 => but it isnot a good way.

    //console.log(user2[name])  //Error => not correct as we have to give it in string format
    // console.log(user2["name"]); // xyz
    
    //Interview question => add symbol in object and use it as key
    
     //Symbol creation 
    const mysymbol = Symbol("key1");

    //object
    const  user3 ={
    name: "xyz",
    age : 23,
    
    // mysymbol : "mynameis"   // here it is not used as Symbol it is of string type
    [mysymbol] : "mynameis",   // correct syntax use symbol with "square brackets []" inside object
    isLoggedIn : false,
    LastLogInDays : ["Monday" ,"Saturday"],
    }

    // console.log(user3[mysymbol]); // double quotes are not needed in symbol here 
    // O/P : mynameis
    
    //  console.log(typeof user3[mysymbol]); //String
      
    //  //updating values
    //  user3.isLoggedIn = "true"
    //  console.log(user3);
    //  // O/P : {  
     //       name: 'xyz',
     //       age: 23,
     //       isLoggedIn: 'true',
     //       LastLogInDays: [ 'Monday', 'Saturday' ], 
     //       [Symbol(key1)]: 'mynameis'
     //      }

    //freeze() => it resists change to happen in object
    //  Object.freeze(user3)
    //  user3.age = 24;
    //  console.log(user3)
     // O/P : There is no update in age as we freeze object before updating it
    //       {  
     //       name: 'xyz',
     //       age: 23,
     //       isLoggedIn: 'true',
     //       LastLogInDays: [ 'Monday', 'Saturday' ], 
     //       [Symbol(key1)]: 'mynameis'
     //      }
      
      //when reffering to method what's happening
      //Function definition
      
      // user3.greeting = function(){
      //   console.log("HEllo JS users");
        
      // }

    //  console.log(user3.greeting); //  undefined
    //  console.log(user3.greeting());  //HEllo JS users

    //this keyword => refers to a particular attribute in an object
  
    //  user3.greetingTwo = function(){
    //     console.log(`HEllo  user ${this.name}`);
 
    //   }

    //   console.log(user3.greetingTwo()); //HEllo  user xyz

    //+++++++++++++++++++++ Object Creation using Constructors
    
    //const tinderUser = new Object ();   // {} Singleton object
    //   const tinderUser ={}     // {}  => non-singleton object
    // // console.log(tinderUser)
    
    // //Adding values in tinderUser object
    // tinderUser.id ="234abc"
    // tinderUser.name ="shreya"
    // tinderUser.isLoggedIn = false
   
    // console.log(tinderUser);  //{ id: '234abc', name: 'shreya', isLoggedIn: false }

    //object in objects => nested objects

  //   const newUser= {
  //     fullName: {
  //        userFullname : {
  //          firstName : "Shreya",
  //          lastName : "tiwari",
  //     }
  //   }
  // }

  // console.log(newUser.fullName.userFullname.firstName);  //Shreya

  //Merging two objects => 
  
    // const obj1 ={1 : "a", 2 : "b" , 3 : "c"}
    // const obj2={4 : "d" , 5 : "e" , 6 : "f"}
    // const obj3={2 : "u"}

    //console.log(obj1,obj2)    //{ '1': 'a', '2': 'b', '3': 'c' } { '4': 'd', '5': 'e', '6': 'f' }
    //It will merge arrays but there will bw two different arrays in single array

    //assign() method => Copy the values of all of the enumerable own properties from one or more source objects to a target object.
    //                   Returns the target object(in new Object).
    //                   assign() also maintains order of keys
  //    const obj4 = Object.assign(obj1 ,obj2,obj3)
  //  // const obj4 = Object.assign( {}, obj1 ,obj2,obj3)   //braces are optional the O/P will be same with or without braces but its better to use braces as it indicates that assign will return an array 

  //    console.log(obj4); //{ '1': 'a', '2': 'u', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
   // WIdely used spread() for merging two or more objects
  //              spread() maintains order of keys
  //  const obj4 ={...obj1,...obj2,...obj3}
  //  console.log(obj4);   //{ '1': 'a', '2': 'u', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


   // when values come from database
  //+++++++++++ Static Methods 
  //All the methods in Object are static. means we have to use it with 
  // Syntax: - "Object.methodName()"
  // Some examples are  freeze(),entries(),keys(),values()
  //  console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
  //  console.log(Object.values(tinderUser)) // [ '234abc', 'shreya', false ]
   
  //entries() => Returns an "array" of key/values of the 
  // enumerable own properties of an object.after that we can use array methods on it (such as spread(),to String(),etc.....)

  //  console.log(Object.entries(tinderUser)) 
   // O/P:
   // [ [ 'id', '234abc' ], [ 'name', 'shreya' ], [ 'isLoggedIn', false ] ]
   


   //hasOwnProperty(keyName) => used to check whether a key is present in given object 
  //  console.log(tinderUser.hasOwnProperty('isLogged')); //false
   
//******************** Object de-structure and JSON API *************************

const course = {
  cname : "js basics and advanced",
  price : "999",
  Guider: "hitesh"
}

//values access 
//console.log(course.Guider);

//another method mostly used - IMP (in REACT)
//de-structuring
//Step 1 : const {} = course
//Step 2 : const {keyName} = course

// const {Guider} = course
// console.log(Guider);   //hitesh

//if Guider is long name alias it

// const {Guider : g } = course
// console.log(g);  //hitesh

//***************** JSON API *************/

//JSON => An object without name is known as JSON with both "key-value" pair in Strings
//        JSON can also be in the format of array
// EXAMPLE :-

//  {
//   "cname" : "js basics and advanced",
//   "price" : "999",
//   "Guider" : "hitesh"
// }

//Example :- Array of objects (JSON )
// [
//   {},
//   {},
//   {}
// ]




