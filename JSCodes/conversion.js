// let score = 33;
// console.log(typeof(score));   //number
// console.log(typeof score);    //number

// let score = "33";   //string
// //conversion to number type using  "Number" class with N capital
// let valueInNumber= Number(score);
// console.log(valueInNumber);   //33
// console.log(typeof valueInNumber);  //number

//faulty conversions
// let score = "33abc";   //string
// //conversion to number type using "Number" class with N capital
// let valueInNumber= Number(score);

// console.log(typeof valueInNumber);  //number
// console.log(valueInNumber);   // NaN  (Not A Number)         

//boolean conversion to number
// let score = true;  
// let valueInNumber= Number(score);

// console.log(typeof valueInNumber);  //number
// console.log(valueInNumber);   // 1

//NOTE  -> "33" => 33;
//         "33abc" => NaN
//          true => 1;
//          false =>0

//string conversion to int
// let score = "";  
// let valueInNumber= Number(score);

// console.log(typeof valueInNumber);  //number
// console.log(valueInNumber)  //0

//string conversion to boolean
// let score = "";  
// let valueInNumber= Boolean(score);

// console.log(typeof valueInNumber);  //boolean
// console.log(valueInNumber)  //false

//NOTE  -> 1 => true; 0 => false;
//         "" => false; "shreya" =>true

//**********************OPERATIONS**************************************

// let value = 3
// let negVal = -value
// console.log(negVal) //-3

//---basic operations--
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //2 to power 3
// console.log(2/3);
// console.log(2%3);
//---basic nothing much
// let str1= "hello"
// let str2=" shreya"
// let str3 = str1 + str2;
// console.log(str3);  //hello shreya
// //--here's the spinning head concept

// console.log("1"+2);  //12
// console.log(1+"2");  //12
// console.log("1"+ 2 + 2); //122
// console.log(1+ 2 + "2"); //32
//these type of confusing code is not applicable in real life

// let  gameCounter = 100
// //gameCounter++   //101  in this case only
// ++gameCounter;   //101  in this case only 
// console.log(gameCounter);

//**********************COMPARISON***********************
//Basic comparisons no problem => O/P will be boolean => true/false
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//tricky comparisons
// console.log("2" > 1); // true => string type converted to number and then compared 
// console.log("02" > 1); // true => same here bt it is always not true

//faulty comparisons => they are not practically implicable 
// console.log(null > 0);  //false
// console.log(null == 0); //false 
// console.log(null >= 0); //true

// //always give false
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

//strict check => "===" tripleequals - along with value it also checks datatype(if dt same)i.e it first checks datatype then values

console.log("2"=== 2); //false => as datatypes are not same





