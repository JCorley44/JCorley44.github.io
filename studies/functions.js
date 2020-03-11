/*
 * FUNCTIONS:
 *
 * 0. Functions are reusable code that can perform complex actions. Functions are great to use because once created they 
 * can be invoked to reduce the amount of code that has to be written and limit mistakes.
 */



// 1.Two phases to use a function
// To use a function one must first invoke it 
// Then pass arguements into it inorder to use it 

var codeName = 'Shadow Burger';
function whatIsYourCodeName(string){        //declaring the function and using a parameter called string
    console.log(`${codeName} is an execellent choice agent.`);
}
whatIsYourCodeName(codeName);               //here we are invoking the codename function with an arguement that is a variable 



// 2. Parameters vs Arguements
// Parameters are the place holder variables used during the function declaration phase
// Arguements are only used in functions once they are declared. 


var preferredWeapon = 'pickle disks';
function weaponChoice(string){                           //string is the parameter, indicating the data type the finction is expecting
    console.log(`You chose to use ${string} as your primary weapon.`);
}
weaponChoice(preferredWeapon);                           //preferredWeapon is the arguement with a string value assigned to it





// 3. Syntax for a named function
// Functions must have the keyword function in the declaration. If it a named function then the jeyword function is first followed by the 
// function's name followed by a set of parenthesis which may include parameters if any are needed. 
// After the parenthesis a set of curly braces used to type the code that is the function body

function agentGreeting(string){
   
    console.log(`Welcome agent ${string} to Central HQ.`);
   
}



// 4. Assigning functions to variables 
// Functions can be assigned to variables by first declaring the variable then using the assignment operator 
// to assign an anonymous function to the variable. From there the function syntax is the same as any other function

var specialAttack = function (string){
   
    console.log(`Good choice agent ${string} will surely strike fear into the hearts of your enemies.`);
   
};



// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs? //
// Functions can be declared without using parameters. These functions will usually use data from the outside and operate on it.
// Returning a aingle output from a function is possible by using the return keyword. It will allow for the return output to be used in the 
// code later.


function youTheAgent() {            //no parameters include in declaration of function and will return a string using previously created variables
   
    return console.log(`${codeName} you have chosen ${preferredWeapon} as your weapon and I think you are ready for the field.`);     
   
}

youTheAgent()                       //returns "Have A Great Day"





// 6. Scope 
// Javascript has two scopes, global and local. Depending on where a vairable is declared it might be either in a global or local scope.
// The global scope cannot access anything inside of a given local scope but local scopes can access global variables.

var favoriteFood = 'pizza';

function bestMealEver(food){
   
    var secondFavoriteFood = 'gumbo';                 //declaring and assigning value to variable secondFavoriteFood
    return favoriteFood + ' & ' + secondFavoriteFood;
}

console.log(bestMealEver(favoriteFood));              //will return the string of 'pizza & gumbo'

bestMealEver(secondFavoriteFood);                     //throws an error because secondFavoriteFood is scope bound to the function of bestMealEver




// 7. Closures
// A closure is when an inner function references a variable or parameter from the outer function. 



function agentLocation(){                                       //the local function is referencing the location variable from the agentLocation function 
   var location1 = 'New Zealand';                                     //which gives us one closure but using the codeName variable is not one since it was defined in the global scope
        return function local(location , name){
        name = codeName;
        location = location1
        return console.log(`Agent ${name}, you have been assigned to work at ${location}`);
    }
}

console.log(agentLocation());