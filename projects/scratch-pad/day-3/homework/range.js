// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //            //I: 2 numbers, O: an array, C: must implement numbers based on start 
                                               //
                                               //
                                               //
  var nuarr = [];                              //creating an empty array and initalizing 
    if(start < end){                           //creating conditional statement to check if start is less than end 
        for(let i = start; i <= end; i++){     //if true the for loop will iterate until start <= end
            nuarr.push(i);                     //pushing the values from the loop iterations into the arr
        } return nuarr;                        //now returning the array if this condition is true
 }   else if (start > end){                    //an else if statement checking if start is greater than end
        for(let i = start; i >= end; i--){     //
            nuarr.push(i);
    }   return nuarr;

    }
 
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}