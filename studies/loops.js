/*
 * LOOPS:
 *
 * 0. Loops are used to execute a certain code block numerous amonut of times 
 * until a stop condition is reached. The three types of loops used in javascript are:
 * for loops, for-in loops, & while loops. For loops iterate over arrays, for-in loops iterate over
 * objects and while loops continue iterating while a condition is true.
 * 
 */




// 1. Explaining the three types of loops //

/* While Loops: This loop uses the keyword while followed by a set of parenthesis where the condition. The condition determines 
 * how long the loop will iterate. While loops also need to have a counter variable which is either incremented or decremented. 
 * If there is no counter variable then the loop will infinitely iterate. After the closing parenthesis a set of curly braces 
 * that houses the code to be repeated is located. 
 *
 * For Loops: Uses the keyword for to begin followed by a set of parenthesis. Inside of the parenthesis there is a variable that is
 * assigned to an element in the array as the starting point for the loop. Next is the stopping condition for the variable. Lastly the
 * incrementor which can either count up or down. Just like the while loop for loops also have a set of curly braces what contains the c
 * code block that will be excuted multiple times.
 * 
 * For-in Loops: For-in Loops are also declared with the keyword for. This loop does not contain a condition but instead there is a variable that 
 * represents the objects keys followed by the object's name that is going through the iteration. Like the other loops it has a set of curly braces 
 * with the code block inside that will be executed during the iteration. Since there is no stop condition for for-in loops it will iterate over every key/value pair.
 */
 
 
 

// 2. While loop counting //

//While loop counting up
var num = 0;
while(num < 11) {
   
    console.log(num);  // will print numbers to console
   
    num++;             // this is the counting variable
}

//Counting backwards from 10
var num = 10;
while(num >= 0) {
   
    console.log(num);  // will print numbers 10 to 0
   
    num--;
}





// 3. For loop iterating over an array //

var sampleArray = [0,1,2,3,4,5,6,7,8,9,10];


// Looping forward
for(var i = 0; i < sampleArray.length; i++){
   
    console.log(sampleArray[i]);               // prints all strings in bestArrayEver
}


// Looping Backward
for(var i = sampleArray.length-1; i >= 0; i--){
   
    console.log(sampleArray[i]);               // prints all strings in bestArrayEver backwards
}





// 4. For-in loop iterating over object //

var sampleObject = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10};

for(var key in sampleObject){
   
  console.log(key);                              // each key and value will print to the console
  console.log(sampleObject[key]);                
}