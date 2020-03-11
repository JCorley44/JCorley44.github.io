////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, increment) {
  //creating a range array
  var range = [];
  
  //if the start and end parameter are the same then the empty array will be returned
  if(start === end){
    return range;
  }
   
  //if thr increment is greater than zero
    if(increment > 0){
      
  //loop for the increasing by the increment value and pushing into pushing into range array
      for(var i = start; i <= end; i = i + increment){
          range.push(i);
      }
    }
    
    else if (increment < 0){
  
  //loop for the decreasing by the increment value and pushing into range array
        for(var j = start; j >= end; i = i + increment){
            range.push(j);
        }
    }
    
  //if the increment parameter is undefined then it will increment by one
    else if (increment === undefined){
        for(var k = start; k <= end; k++){
          range.push(k);
        }
    }
    return range;
}

// var range = function(start, end, step) {
//     var arr = [];
//     for (var i = start; step > 1 || step === undefined ? i <= end : i >= end; step ? i = i + step : i++)
//         arr.push(i);
//     return arr;
// };

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array){
    // const reducer = (seed, value) => seed + value;
    // return array.reduce(reducer);
    
    //creating avariable to store the sum into
    var arraySum = 0;
    
    for(var i = 0; i < array.length; i++){
         arraySum = arraySum + array[i];
    }
    return arraySum;
    
    }

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //creating a variable to store reversed array
  var reversedArray = [];
        
  for(var i = array.length - 1; i >= 0; i--){
    reversedArray.push(array[i]);
  }
        
        return reversedArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
//had to reverse array in place .reverse does that 
  return array.reverse();

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {

  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
//creating an array for the list
var arrayList = [];

//for loop iterating through the sublist
for (let node = list; node; node = node.rest) {
  
//pushing the node object's value into the array list  
 arrayList.push(node.value);
}

return arrayList;

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
// //creating a variable to hold the array from the list parameter  
// //using the listToArray function to create an array of values
// var listArray = listToArray(list);  
  
// //declaring and assigning the objectListArray with the value placed on the front of the listArray
// var objectListArray = listArray.unshift(value);
 
// //using the arrayToList function to change the array to an object 
// var objectList = arrayToList(objectListArray);
 
// //returning the new object 
// return objectList; 

var listArray = listToArray(list);

listArray.unshift(value);

var objectList = arrayToList(listArray);

return objectList;

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
