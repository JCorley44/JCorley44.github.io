/*
 * VARIABLES:
 *
 * 0. Variables are containers used to hold things in memory for the current program.  They are specific
 * words that point to a specific value wether it is a: number, string, boolean, array, object or even a function.
 * Even though when created they have a value the values of variables can be changed later in your code.
 *
 * 1. The first step in creating a variable is the keyword var, which must be the first followed by the 
 * name. The variable names should be unique and allow for other coders to understand the value and purpose
 * of the variable.
 *
 * 2. There are two steps required inorder to use variables. Variables must first be declared with a keyword and 
 * name initialized then assigned a value. 
 */



// 1. Variable Declaration //
var footballTeam; //when declaring variables in best practice one should use camel case.

/*
 * Above the variable of footballTeam was declared but it has not been assigned a value yet
 * and will have a value of undefined. The computer recognizes the variable name exists but 
 * it does not contain anything. 
 */
console.log(footballTeam); //  will print undefined to the console



// 2. Variable Assignment  //
footballTeam = 'New Orleans Saints';
console.log(footballTeam); // will print the string of 'New Orleans Saints' to the console



// 3. Variable Re-assignment //
footballTeam = 'Jacksonville Jaguars';
console.log(footballTeam); // will print the string of 'Jacksonville Jaguars' to the console 



/* 
 * There are different keywords that can be used during the initialization step of creating a variable
 * each has different properties that allow for better optimization of code.
 */


// 4. Var //
// Var is one of the keywords used to declare a variable.
var footballTeam; // using the keyword var to declare a variable


// If a variable was declared with the var keyword it can be re-assigned a value
var footballTeam = 'Denver Broncos'; // the variable footballTeam now contains 'Denver Broncos' 


var name = 'Gintoki'; // variable declerations and assignments can be performed on the same line.  
console.log(name); // will print 'Gintoki' to the console 


/* Using the var keyword in the global scope will allow for the any block of code to access it. The only 
 * exception to this is when var is declared inside of a function. 
 */
function myFirstFunction(firstName){
   
    var properIntro = "Hello, my name is ";
    console.log(properIntro + name);
}

myFirstFunction(name); // This will use the variable name which was declared in the global scope and print 'Hello, my name is Gintoki'

// NOTE: If we use the console.log function indrder to print properIntro there will be a reference error since it was
// declared inside if a function. This is the only local scoping of the keyword var

console.log(properIntro); // The properIntro variable is scoped to the function myFirstFunction and will return an udefined Reference Error
 
 
 
// 5. Let //
// Let is another keyword that can be used to declare a variable.
let anime; // variable anime being declared with the let keyword


// Like the var keyword, let also allows for the value of the variable be reassigned. 
let lastName = 'Joseph'; // lastName is assigned the value of 'Joseph' 


lastName = 'Sakata'; // lastName is now being assigned the string of 'Sakata'
console.log(lastName); // This will print 'Sakata' to the console


// Variables declared with let are scoped to the code block that they were declared in. Meaning that if a variable was declared 
// within a function, loop or anything with a dedicated code block the global scope will not have access to it
function fullName(name, lastName){
   
    let sentenceStarter = "Hello my full name is ";
    console.log(sentenceStarter + name + lastName);
}

fullName(name, lastName); // When invoking the fullName function it will print 'Hello my name in Gintoki Sakata'.  

console.log(sentenceStarter); // Since sentenceStarter is scoped locally to fullName function this will return an undefined reference error

 
 
 
// 6. Const //
// Const is the third keyword used when declaring a variable. Typically when variables are declared with const they are referencing a constant value.
// Two distinctions between const and the other two variable key words are:
//          1. A value must be assigned at the time of decleration
//          2. They value can not be reassigned 



const speedOfLight = 186282; // variable being declared with const and being assigned a value

// const and let have the same scope restrictions. They are only avaiable to use within the scope they have been declared in.
function greaterSpeed(randomSpeed){
   
    const speedOfSound = 750;
   
    if(randomSpeed > speedOfSound){
        return 'Your speed cannot be better than mine';
    }
}

greaterSpeed(speedOfLight); // Within the greaterSpeed function the speedOfSound is a local variable used for speed comparisons. 

console.log(speedOfSound); // Since speedOfSound is scope bound this will return an undefined reference error
 
 
 
 
// 7. Hoisting //
// All variable and function declarations are brought to the top of the code or the '0th' line. 
// if a variable is referenced before it has been declared the variable will have a value of undefined.


console.log(color); // Due to hoisting, the computer knows that color has been declared but does not know the value thus returning undefined
var color = 'blue'; // Now the color variable has the value of 'blue' if checked it will return blue 
console.log(color); // The color variable will now print blue to the console