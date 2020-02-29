// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function (value){
   
//checking to see if the datatype is null since using the typeof function returns object
    if(value === null){
        return 'null';
    }
    
//checking if the datatype is an array. this also return object if using typeof method 
    else if(Array.isArray(value)){
        return 'array';
    } 

//other datatypes are unique so typeof works
    else{
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
//creating an array for the shortened return answer
    var outputArray = [];
    
//created an emptyArray for edge case and just in case the input array is not an array    
    var emptyArray = [];

//Using the Array.isArray with the bang operator to check if the input array is not an array
if(!Array.isArray(array)){
    
//If the input array is not an array the function will return an empty array    
    return emptyArray;
} 

//Checking to see if the number is greater then the array length
else if(number > array.length){
    
//If so then the entire array will be returned    
    return array;
    
//using undefined to check to see if there is a value for number    
} else if(number === undefined){
    
//if number is undefined then the first element of the array will be returned    
    return array[0];
} 

//checking for edge case of the input number being negative
else if(number < 0){
   
//if the input number is negative an empty array will be returned   
    return emptyArray;
} 

//if all of the conditions above are false then a sliced array will be returned from the first index to the input number
else{
     return outputArray = array.slice(0, number);
    }

};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
 
//creating an array for the output   
    var outputArray = [];
    
//creating an empty array for a specific input  
    var emptyArray = [];

//Using the Array.isArray with the bang operator to check if the input array is not an array
if(!Array.isArray(array)){
    return emptyArray;
} 

//Checking to see if the number is greater then the array length
else if(number > array.length){
    return array;
} 

//using undefined to check to see if there is a value for number if so the last element will be returned
else if(number === undefined){
    return array[array.length - 1];
} 

//if the input number is negative an empty array will be returned  
else if(number < 0){
    return emptyArray;
} 

//if all of the conditions above are false then a sliced array will be returned from the number to the last index
else{
     return outputArray = array.slice(-number, array.length);
    }
};









/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    // return array.indexof(value);
    if(array === undefined){
        return undefined;
    }
    
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    
        return -1;
}









/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){

//using the .includes method to check is the iput value is in the array
//if so true will be returned if not false will be returned
return (array.includes(value)) ? true : false;
}









/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each =function(collection, action) {
   
   //first checking to see if the collection value is an array
    if(Array.isArray(collection)) {
        
    //if true then each element in the array will have a function called for it
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } 
    
    //if the collection is an object then each property will have a function called for it
    else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};









/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    //creating an array for the final result
    var resultArray = [];
    
    //for loop iterating through the array
    for(var i = 0; i < array.length; i++){
       
    //the if statement is using the indexOf to compare the the element to     
        if(_.indexOf(array, array[i]) === i){
          resultArray.push(array[i]);
        }
    }
    //returning the new array with unique values
    return resultArray;
};









/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array, action){
    
    //creating an empty array for the result
    let arr = [];
    
    //using each to iterate through the array
    _.each(array,(value,index,collection)=>{
        
    //if the current iteration of the each function resloves to true with the test parameter
    //it will be pushed into the array
        if(action(value,index,collection)){
            arr.push(value);
        }
    });
    return arr;
};




/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, test){
    
    //creating an empty array for the result
    let arr = [];
    
    //using each ti iterate through the array
    _.each(array,(value,index,collection)=>{
        
    //if the current iteration of the each function resloves to false with the test parameter
    //it will be pushed into the array    
        if(!test(value,index,collection)){
            arr.push(value);
        }
    });
    return arr;
};



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, test){
    //creating an array for final result
    let arr = [];
    
    //pushing values that pass the the filter function into one sub array and the ones that pass the reject function into a different sub array
    //while pushing both of those into the empty array created earlier
    arr.push(_.filter(array,test), _.reject(array,test));
    return arr;
};





/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection, test){
    let arr = [];
    _.each(collection,(value,index,collection)=>{
        let val = test(value,index,collection);
        arr.push(val);
    });
    return arr;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// _.pluck = function(array, property){
//  var arrayPlucked = [];
//  arr.forEach(function(element) {
//     arrayPlucked.push(element[type]);
//   });
//   return arrayPlucked;
// };

_.pluck = function(arr, type) {
    
    //
    var arrPlucked = [];
    arr.forEach(function(element) {
        arrPlucked.push(element[type]);
    });
    return arrPlucked;
};









/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, action){
    // create an array for the results
    let resultsArray = [];
    //iterate through collection with each function
    _.each(collection, function(elem, ind, arr){
        //if function is not given the return will be true or false for each element
        if(action === undefined){
            if(elem){
                resultsArray.push(true);
            } else {
                resultsArray.push(false);
            }
            // if the action applied on the element, index, array equals true push true into results array
        } else if (action(elem, ind, arr) === true) {
            resultsArray.push(true);
            // if the action applied to the element, index, array equals false push false into the results array
        } else if (!action(elem, ind, arr)) {
            resultsArray.push(false);
        }
    });
    // using contains, see if the results array does not contain any falsey values. 
    return !_.contains(resultsArray, false);
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, action){
//creating an array for the final result   
    let resultsArray = [];
    
//using each to iterate through the collection
    _.each(collection, function(element, index, array) {
       
    //if the action is false for the elemnt     
        if (!action) {
            if (element) {
                resultsArray.push(true);
            } else {
                resultsArray.push(false);
            }
        } else if (action(element, index, array) === true) {
                resultsArray.push(true);
        } 
        
        //if all other tests fail
        else if (action(element, index, array) === false) {
                resultsArray.push(false);
        }
    });
    return _.contains(resultsArray, true);
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, action, seed){
    // loop through the array
    _.each(array, function(elem, ind, arr){
    // if seed is undefiend, the seed equals the first element
        if(seed === undefined){
            seed = array[0];
    // if there is a seed, the seed equals-pl the action applied to the seed, element, and index
        } else if(seed){
            seed = action(seed, elem, ind, arr);
        }
    });
    // returning the seed
    return seed;
};



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object){
    // loop through the arguments
    _.each(arguments, function(elem, ind, arr){
        // using object.assign, assign each element to the object
        Object.assign(object, elem);
    });
    // return the object
    return object;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
