// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  
//if the input is negativve null will be returned   
  if(n < 0){
    return null;
  }
  
//or if the input is 0, one will be returned  
  else if (n === 0){
    return 1;
  }
 
//n will be returned multiplied by the recursive call of n minus one  
  return n * factorial(n - 1);
  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
 
//assigning the variable sumVal the value of the first element in the array  
  var sumVal = array[0];
 
//base case and checking the array has length  
  if(!array.length){
    return 0;
  }
   
//the first element plus the recursive call of the array minus the first element   
   else {
    return /*array[0]*/ sumVal + sum(array.slice(1));
  }
  
};











// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

};









// 4. Check if a number is even.
var isEven = function(n) {
  
//checking if n is strictly equal to one  
  if(n === 1){
    
//if so false is returned    
    return false;
  } 
  
//checking if n is strictly equal to 2
  else if(n === 0){
    
//if so true is returned    
    return true;
  } 
  
//checking if n is negative, if so the absolute value of that number will be returned  
  else if(n < 0){
   return isEven(Math.abs(n)); 
  } else{
  
//recursive call of n subtracting 2 from it   
  return isEven(n - 2);
  }
  
};









// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

//if n is less than zero
  if(n < 0){
    
//one will be added to the number plus the recursive call of sumBelow adding one to n    
   return   n < 0 ? n + 1  + sumBelow(n + 1): 0;
    } 
    
//one will be subtracted from the number plus the recursive call of sumBelow subtracting one from n
    else{
    return  n > 0 ? n - 1 + sumBelow(n - 1): 0;
    }

};









// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // if (y - x === 0 || y - x === 1) {
  //   return [];
  // } else if(x < y){
  //   var numbers = range(x, y + 1);
  //   numbers.push(y);
  //   return numbers;
  // } else if(x > y){
  //   var numbers1 = range(x, y - 1);
  //   numbers1.push(y);
  //   return numbers1;
  // }
  // return x+1 >= y ? [] : [x+1].concat(range(x+1, y));
  
  
  const upOrDown = x > y ? -1 : 1; 
    var r = [];
    if(x === y) 
    return [];
    if(x === y - upOrDown) 
    return r;
    return r.concat(x + upOrDown, range(x + upOrDown, y));
  
  
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if(exp === 0){
      return 1;
    } else if(exp > 0){
   return base * exponent(base, exp - 1);
    } else if(exp < 0){
        return 1/ exponent(base, -exp);
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
    var result = n / 2;
    if(n === 1 || n === 2){
        return true;
    }

    if (result < 2) {
        return false;
    } else if (result == 2) {
        return true;
    } else {
       return powerOfTwo(result);
    }
};









// 9. Write a function that accepts a string a reverses it.
var reverse = function (string) {
  
//base case returning an empty string  
if(string === ''){
    return '';
} 

//recursive call returning the string with the first letter added to the end
else{ 
    return reverse(string.substring(1)) + string.charAt(0);
}
  
};









// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //converting the string to lowercase and removing spaces
    let lowerCaseString = string.toLowerCase().trim();
  
  //base case, for when the string is less than or equal to one   
    if (lowerCaseString.length <= 1) {
      return true;
    }
  
  //creating variables for the checks
    let [firstLetter] = lowerCaseString;
    let lastLetter = lowerCaseString[lowerCaseString.length - 1];
  
  //beginning the comparison of letters
    if (firstLetter === lastLetter) {
      
    //removing first and last letters of string  
      let stringWithoutFlLl = lowerCaseString.substring(1, lowerCaseString.length - 1);
      
    //recursive call of function witn variable  
      return palindrome(stringWithoutFlLl);
    } else {
      return false;
    }
  
  
  
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};









// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {

//if either x or y is zero
    if(x === 0 || y === 0){
      return 0;
    }  
    
//if both x and y are greater than zero      
    if(y > 0 && x > 0){  
        return x + multiply(x, y - 1);
    } 
    
//if y is less than zero but x is     
    else if ( y < 0 && x > 0){
        return  -x + multiply(x, y + 1);
    }  
    
//if y is greater than zero but x is less than zero    
    else if ( y > 0 && x < 0){
        return  x + multiply(x, y - 1);
    } 
    
//is both y and x are less than zero   
    else if(y < 0 && x < 0){
        return -x + multiply(x, y + 1);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};









// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  
//base case if both strings have no length   
  if(str1.length === 0 && str2.length ===0){
    return true;
  }
  
//checking if the first character in both strings are the same if so it will be sliced  
  if(str1[0] === str2[0]){
    
//recursive call with new characters in front    
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }
};









// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  
//creating the empty array  
    let strArray = [];  
      
      
//base case, returning the array when the string length is 0      
      if(str.length === 0){
        return strArray;
      }

//pushing first letter ingto the string array      
    strArray.push(str[0]);

//pushing the recursive call into the strArray
    return strArray.concat(createArray(str.slice(1)));
      
};









// 17. Reverse the order of an array
var reverseArr = function (array) {
    
//base case when the array does not have length    
    if(array.length === 0) {
            return array;
        } 
        
//we are popping the last element from the input array and storing it into the array literal 
//recursive call to concat the array to be popped again
        else {
            return [array.pop()].concat(reverseArr(array));
        }
};









// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  
//base case, zero length return empty array  
  if(length === 0){
      return [];
  } 
  
//creating an array literal can concat the value while subtracting one from the length   
  else if(length >= 1){
      return [value].concat(buildList(value, length - 1));
  }
};









// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  
//base case   
  if(!array.length){ 
    return 0;
  }
//adding to the value when the first element is strictly equal to the value and slicing the first array  
  return (array[0] === value) + countOccurrence(array.slice(1), value);

};









// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  
//base case, since only one element function only has to act once  
  if(array.length === 1){
    return callback(array);
  }
  
//concating the array while having the first element having the callback function iterate over it  
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};









// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  // if (n <= 1) 
  //     return 1;

  // return fibonacci(n - 1) + fibonacci(n - 2);

};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  
//edge case  
  if(n < 0){
    return null;
  } 
  
//another edge case  
  else if(n === 0 ){
    return 0;
  }
  
//base case  
    if (n <= 1) 
      return 1;


//recursive call with fibo sequence equation
  return nthFibo(n - 1) + nthFibo(n - 2);

  
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
   
//creating a results array for final answer   
   let result = [];
    
//base case     
    if(input.length === 0) {
        return result;
    }
    
//pushing first element into result array    
    result.push(input[0].toUpperCase());
    
//reassigning the new values of the sliced strings being capitalized to the results array    
    result = result.concat(capitalizeWords(input.slice(1)));
    return result;
};




// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  
//base condition checking the array length  
  if (array.length === 1) {
    
//if true the first character will be uppercase concatenated with the rest of the string    
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  
//removing the last element from the array and assiging it to a new variable result
  const result = capitalizeFirst(array.slice(0, -1));
  
//will capitalize the first letter in the last index
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  
//pushing that new array with the capitalized string into result variable  
  result.push(string);
  
//returning the final result  
  return result;
};


// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};





// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj ={}) {
   
//base case   
   if(str.length===0){
    return obj;
  }
  
//checking to see if the first index is in the object if so one will be added to the value  
  if(str[0] in obj){
    obj[str[0]]++;
  }
  
//if not a new key will be added witha value of one  
  else{
    obj[str[0]] = 1;
  }
  
//slicing off first index  
  return letterTally(str.slice(1),obj);
};





// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
   
//base case   
   if (list.length === 0) return [];
 
 
 
    let [head, ...rest] = list;
    let l = compress(rest);
    return (l[0] === head) 
            ? l
            : [head, ...l];
};





// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, newArr = []) {
   if (array.length === 0) { return newArr }
    if (array[0] !== 0) {
        newArr.push(array[0]);
        return minimizeZeroes(array.slice(1), newArr);
    }
    
    if (array[0] !== array[1]) {
        newArr.push(array[0]);
        return minimizeZeroes(array.slice(1), newArr);
    }
    return minimizeZeroes(array.slice(1), newArr);
};





// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
 
//base condition 
 if (array.length === 0) return [];
 
 // variable holding the values of the indices sliced
  var list = alternateSign(array.slice(0, array.length-1));
 
 //need array length to help determine which elements should be positive or negative
  var lng = array.length;
 
 
//if the last element is eveb and if it is positive then make it negative 
  if (lng%2 === 0) {
    if (array[lng-1] > 0) {
      array[lng-1] = -array[lng-1];
    }
  } 
  
//else if if it is negative, make it negative, which will make it positive  
  else {
    if (array[lng-1] < 0) {
      array[lng-1] = -array[lng-1];
    }
  }
  
//pushing value into the array  
  list.push(array[lng-1]);
  
//returning the list  
  return list;
};





// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
//creating an object if numbers and strings for comparison  
  let map = { 0:'zero',
              1:'one',
              2:'two',
              3:'three',
              4:'four',
              5:'five',
              6:'six',
              7:'seven',
              8:'eight',
              9:'nine'
            };
  
//if the string that was input was not part of the object the string will be returned  
  if (!/[0-9]/i.test(str)) {
    return str;
  }
  
  //splitting sting into array and using find to iterate through and locate the numbers 
  let target = str.split('').find(e => /[0-9]/.test(e));
  
  //using .replace to replace the numbers with the string of the same number
  let newStr = str.replace(/[0-9]/,map[target]);
  return numToText(newStr);
 
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
