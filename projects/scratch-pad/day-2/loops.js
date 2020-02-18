// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //created a for loop to iterate through loop
  for(var i=0; i<=array.length-1; i++){
      
      //after each iteration the value of the element will print to console
      console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //created a for loop to iterate through array starting at the last index and loop from last index to first
  for(var i=array.length-1; i>=0; i--){
    
    //after each iteration tthe value of the element will print to console
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // creating an empty array to store keys into
  var arr = [];

  //for in loop to iterate through the object
  for(var key in object){
       
       //using the .push() method to add values, of the object keys, to the empty array created
        arr.push(key);
  }
  
  //returning the array to allow access 
  return arr;
     
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //for in loop iterating through object
   for(var key in object){
        
        //during each iteration each key will print to the console
        console.log(key);
   }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
 
 //creating array to store object values 
  var arr = [];
  
  //for in loop used to iterate through object
  for(var key in object){
      
      //using .push() method to push the object values into the empty array
      arr.push(object[key]);
  }
  
  //returning the array with the object values 
  return arr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //for in loop iterating through object
  for(var key in object){
    
    //printing the object's values at each iteration of the for in loop
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //creating an array to push values into 
   var arr = [];
 
  //for in loop to iterate through object
  for(var key in object){
      
      //using .push() method to push object values into array 
      arr.push(object[key]);
  }
  
  //using the .length property on the array to count the length of value inside
  return arr.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //creating an array to store the objects values into it
   var arr = [];
  
  //using a for in loop to iterate through object 
  for(var key in object){
     
  //during each iteration of the array the object's value will be pushed into the array   
      arr.push(object[key]);
  }
  
  //for loop starting at the last element counting backwards to the first   
  for(var i=arr.length-1; i>=0; i--){
   
  //printing the values in the array during each iteration of the loop
   console.log(arr[i]);
 }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
