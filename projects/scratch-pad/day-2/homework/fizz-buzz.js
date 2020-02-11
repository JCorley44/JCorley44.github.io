// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

        for(var i=1; i<=100; i++){          //creating for loop starting at 1 and counting to 100         
            if(i%15===0){                   //using modulus 15 first since it will have less statements return true
                console.log('FizzBuzz');     //if the above condition is true then 'FizzBuzz' will be displayed instead the number
            } else if(i%5===0){             //
                console.log('Buzz');         //
            } else if(i%3===0){             //
                console.log('Fizz');         //
            } else console.log(i)           //  
        
       // i%15===0 ? console.log('FizzBuzz') : i%5===0 ? console.log("Buzz") : i%3===0 ? console.log('Fizz') : console.log(i);  
            
            
            
            
            
            
            
        }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}