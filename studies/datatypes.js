/*
 *  DATATYPES:
 * 
 *  0. Datatypes are the attributes of data that allows the compiler to execute the code 
 *  as the programmer intends. They provide the values in which expression get their values.
 *  There are many different datatypes with different values and interactions with other datatypes.
 *  The datatypes in javascript fall under two catagories, simple/primitive and complex. The simple
 *  datatypes are all of the same type, meaning that those datatypes cannot store other datatypes. If 
 *  the datatype is complex it can store a collection of information.   
 *  
 */

// 1. Number//
// Number datatype allow the program to use numbers whether negative, positive or decimal. They are compatiable with all math operators
// and comparison operators

4;                        // example of number datatype

const gravity = -9.81;    // assigning the variable gravity a negative decimal number. 

-5 < 2                    // will return true




// 2. String//
/*
 * The string datatype must have a set if quotations around it. The surrounding quotes must be the same but it does not matter
 * if the single or double quotes are used but two of the same quote will denote all data encapsulated within the string. 
 */

let string = 'This is an example of a string.';             // assigning a variable a string datatype using single quotes 
let string2 = "This is another example of a string";        // assigning a variable a string datatype using double quotes 
let string3 = 'Hello world"      ,    '                     // example showing that quotations must be used as a set to close the string

/* Strings also have index starting at zero. To access a specific index of a string type 
 * the index number inside of brackets after the variable.
 */ 

string[3];          //This will print s to the terminal

// String .length is a property of strings and outputs the number of indices in a string 
string2.length;     //will output 35 to console




// 3. Boolean//
/* The boolean datatype returns one of two logical values, true or false. This datatype is useful for when there is a condition
 * that needs to evaluate to either true or false. The result of comparison operators also evaluate to a boolean value
 */

false;                          // boolean value of false
true;                           // boolean value of true

// boolean value in an if-statement 
if('boolean conditional'){
    // Code here executes if the boolean conditional is true
} else {
    // Code here executes if the boolean conditional is false
}




// 4. Array//
/* The array datatype is a complex datatype. Arrays are an ordered list that can hold other datatypes with it. It is also
 * an ordered list. Like strings arrays have an index values that point to a specific location, element, for its value. To create
 * an array the square brackets must be used.
 */
 
 [];         // example of an array literal
 
 let exampleArray = ['string', 0, true, ['example of nested array']]; // array with 4 elements
//                      0      1    2                3            the numbers below are demonstrating how the indices for arrays are counted
  

console.log(exampleArray);          // will print the entire array to the console
console.log(exampleArray[2]);       // will only print the value in the second index which in this case is the number 2




// 5. Object//

/* Objects like arrays can contain any other datatype but instead of being ordered objects use what are called key/value pairs.
 * The key/value pairs are properties of that object. The key of the object can only be a string while the value associated
 * can be any datatype. The properties must be seperates with commas. Objects are created by using curly braces. To access the values of an object two different notations can be used.
 * The first is dot notaton and the second is bracket notation, very similiar to strings and arrays. 
 */
 
 {};     // exapmle of an object literal
 
 let carObj = { make: 'Subaru', model: 'BRZ', year: 2019, color: 'blue'};   // carObj with four properties
 
 console.log(carObj);           // will print the entire object
 console.log(carObj.model);     // will print the string 'BRZ' - using dot notation
 console.log(carObj['model'])   // will print the string 'BRZ' - using bracket notation



 // 6. Function //
/* Functions are reuseable blocks of code that perfom actions as needed. Functions only perform their actions when they are called 
 * or invoked. Functions use the keyword function followed by a name and a set of parenthesis and finally a set of curly braces that 
 * will contain the code block that performs the action. Inside of the parenthesis the function may contain parameters and if there 
 * is more than one they are seperated by a comma.
 */
 
function isAnimeCool(string){                   // creating a function with a single parameter
 
 if(string.toLowerCase() === 'yes' ){                   
     return 'You are an amazing person!'
 }  else{
     return 'You have no taste'
 }                                              // the code block or function body
};  

isAnimeCool('YES');                             // invoking the isAnimeCool function with a string of yes will return the string 'You are an amazing person!'
 
 
 
// 7. undefined //
/* Undefined is a datatype of something not having a value, such as an variable not being assigned a value. 
 */
var funnyJoke;             // declaring a the variable funnyJoke
console.log(funnyJoke);    // it will print undefined since it has not been assigned a value



// 8. null//
/* Null is a datatype that has a value of nothing. Not to be confused with undefined, but it is an intentional
 * absense of a value. It is treated as a falsy value in boolean conditions. 
 */
var proof = null;      // assigned null to the variable proof
console.log(proof);    // proof will null




// 9. NaN //
/* NaN is the result of an arithmetic operation being performed on something that is not a number or not compatible with  
 * arithmetic operations.
 */
 
'a' / 1;        // strings are not compatiable with division so this will return NaN

true + 1;       // an example of a non number being added to a number that will not 
                // return NaN. The true boolean has a numerical value of one so this will print 2



// 10. Infinity and -Infinity//
/* Infinity and -Infinity represent the absolute highest and lowest values of any number in javascript respectively. 
 */
1/0;        //will have the value of infinity
-1/0        //will have the value of negative infinity



// 11. What is the difference between primitive/simple and complex data types? //
/* Simple datatypes cannot contain other datatypes with themselves while complex dataypes can hold any datatype and are mot limited to 
 * a certain size.   
 */
 
var simple = 'four';                                                // cannot include another datatype inside of the string henceforth making it a simple datatype

var complex = [0, 'one', true, {key: false}, ['hip hip Arrays']];   // the array has multiple datatypes within itself so it is complex




// 12. 
/* Copy by reference vs Capy by value
 * Primitive values directly copy the value that they were assigned. So when using a primitive value the variable directly points to 
 * the value stored in memory. Complex datatypes on the other hand store the values in addresses in memory allocated for the complex datatype.
 * When one wants to check the value of a complex data type the code points to the address of where that value is. The address is the reference
 * to the specified value that we want.
 */

// Copy by value example
var myCar = 'Subaru BRZ';                   // variable being assigned a simple datatype
 
function whatKindOfCar(car){                // declaring a function 
 
 return 'I like your ' + car;               // code block of the whatKindOfCar function
};  

whatKindOfCar(myCar);                       // The value of the myCar variable is copied and passed into the function inside of the car parameter
                                            // The output will be 'I like your Subaru BRZ;



// Copy by reference example
const refVar = { name: 'Jon' };             //creating two values one thaat is copied by value and the other by reference  
const valVar = true;

function passes(r, v) {
  r.name = 'The Great Jonathan';             //inside of the function the r and v parameters will attampt to change the values of  the arguements
  v = false;
}

passes(refVar, valVar);                      //invoking the function

console.log(refVar, valVar);                 //the value of refVar changes but valVar does not
                                             //refVal changes because the r parameter is pointing to the same spot in memory that refVar is pointing to so that value changes
                                             //valVar and v might point to the same value but there is no direct path to change the value so nothing will change