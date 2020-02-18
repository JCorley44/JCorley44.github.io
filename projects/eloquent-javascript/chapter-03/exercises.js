////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
 
 //using the Math.min function, it returns the lowest number between two numbers
 return Math.min(num1 ,num2);

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {

//first checking to see if the number is zero if so it returns true for even
    if( number == 0){
          return true;
  
//when divided by two if the number's remainder is strictly equal to zero then it returns true for even
    } else if(number % 2 === 0){
          return true;
 
//when divided by two if the number's remainder is not strictly equal to zero then it returns false for odd
  } else if(number % 2 !== 0){
          return false;
  }



}
////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  
  //creating a variable to use as the character counter
  var charCount = 0;
 //for loop to iterate through the string so we can begin to compare the individual characters to the input character 
  for(var i = 0; i < string.length; i++){
    
  //conditional statement looking string values and compairing it to the input char  
    if(string.charAt(i) === char){
      
  //when the conditional statement is true then the counter will increase by one    
      charCount += 1;
    }
  }
    //returning the count variable after it iterates through the loop
    return charCount;

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  
  //creating a counting variable 
    var countB = 0; 
  
  //loop iterating through the string input
  for (var i = 0; i < string.length; i += 1) {
    
  //compairing the values of the string strictly to the capital letter B   
    if (string.charAt(i) === "B")
      
  //if true the counter will add one to the count variable     
      countB += 1;
  }
  return countB;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
