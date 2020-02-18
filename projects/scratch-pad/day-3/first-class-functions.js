// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //inside function will check to see if the input value is greater than the base 
    return function (baase1){   
    
    //conditional statement cheking to see which value os greater
        if(baase1 > base){
            
    //if the test value is greater then the function will return true
            return true;
            
    //if the input value is greater then the function will return false        
        } else return false;
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //writing a function tha will compare two values return either true or false
    return function (baase1){
        
    //conditional statement checking to see if the base is greater than the input    
        if(baase1 < base){
            
    //if the input is greater than the input the function will return true        
            return true;
            
    //if not then false will be returned
        } else return false;
    };
        
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //returning a function that will test if startsWith matches a given string
    return function(string){
       
    //using  .toLowerCase() on both parameters just incase either might be in a defferent case
    //strictly comparing startsWith and string to see if they are the same
        if(startsWith.toLowerCase() === string[0].toLowerCase()){
            
    //if true then the function will return true     
            return true;
            
    //otherwise it will return false
        } else {
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //using  .toLowerCase() on both parameters just incase either might be in a defferent case
    //strictly comparing startsWith and string to see if they are the same
    // using the charAt() method and .length property to look at the last value in the string
    return function(string){
        if(endsWith.toLowerCase() === string.charAt(string.length-1).toLowerCase()){
           
    //if true then the function will return true
            return true;
            
    //otherwise it will return false
        } else {
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
        
    //creating an array to store modifieed values into
        var modified= [];
       
    //for loop iterating through the string
        for(var i = 0; i <= strings.length-1; i++){
    
    //invoking the modify function with string[i] as the arguement and pushing that into the array created earlier       
            modified.push(modify(strings[i]));
        }
        
    //returning the modified array
        return modified;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //


//create loop to iterate through each element in array
  for(let i = 0; i < strings.length - 1; i ++){
    
    //conditional statement to test each element in array, if test fails return false
    //if the test doesn't fail it moves on to the next element
    if(test(strings[i]) === false) {
      return false;
    } 
     
    
  } //if all strings pass the test return true
     return true;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}