//DATES => DAte objects represents a single moment in time.
//dates calculation started from an arbitrary date January 1,1970.
//whenever you create date a long string comesit is nothing but time in miliseconds from jan 1,1970 -current time,
//It is easy to compare date and time in miliseconds that's why we use Date concept.


//Current date using object
// let myDate = new Date(); 
// console.log(myDate);     // 2025-09-01T18:03:35.849Z
// console.log(myDate.toString());   // Mon Sep 01 2025 18:04:53 GMT+0000  //understandable format(converted to string)
// console.log(myDate.toDateString());  // Mon Sep 01 2025
// console.log(myDate.toLocaleString());  // 9/1/2025, 6:06:28 PM
// console.log(typeof myDate);    //object

//manually created dates using "Date" class.Month in js starts from 0
//format followed in india - mm/dd/yy
 let myCreatedDate = new Date("06-20-2025");
// console.log(myCreatedDate); //2025-06-20T00:00:00.000Z
// console.log(myCreatedDate.toLocaleString()); //6/20/2025, 12:00:00 AM

//+++++++++++++++Time Stamps++++++++++++++++++++
//timestamps are used in cases when u have to design quizes and 
// poles who has given poles response fastest to whom you want to make winner

//creating timestamp
// let myTimeStamp = Date.now() //gives current time in miliseconds
// console.log(myTimeStamp); //1756805243494 =>it is the difference of (time in miliseconds) of the date extracted before and now created time stamps
// //it is created to compare two times in miliseconds when we are booking hotels ,restaurants,staying facilities
// console.log(myCreatedDate.getTime()); //myCreateDate will be giving you the date and time bt u want time in miliseconds to compare it to time that came from myTimeStamp;
//that's why u used ".getTime()" function(gives time& date in miliseconds).
//O/P => 1756819891899
//       1750377600000

//To convert current time from miliseconds to seconds
// console.log(Date.now()/1000); //but the problem is that it sometimes can give decimal values.
// console.log(Math.floor(Date.now()/1000));  // 1756820250


//+++++++++++++Some other Methods of Date
let newDate  = new Date()
// console.log(newDate);      // 2025-09-02T13:42:21.945Z
// console.log(newDate.toLocaleString());  // 9/2/2025, 1:43:35 PM    

// console.log(newDate.getMonth());  // 8
console.log(newDate.getDay());  // 2


