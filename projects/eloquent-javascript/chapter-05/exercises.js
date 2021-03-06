// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function flatten(array) {
  //creating neew array
  var newArray;
  // using reduce to iterate over the array
array.reduce(function(flat, current) {
  // concat to combine the two arrays
  newArray = flat.concat(current);
  // returning new array
  return newArray;
});
//returning the new array
return newArray;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {


//It takes a value, a test function, an update function, and a body function. 
//during each iteration, it will first run a test function on the current loop value and stops if that returns false.
  for (let value = start; test(value); value = update(value)) {
    
//updating the body during each iteration    
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predicate) {



//will return true when the given function returns true for every element in the array.
//fasle otherwise
   for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}


function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  
  console.log(text);
  //lets keep count of each letter in our text for the dominate direction
  let arrayOfScripts = countBy(text, function(characterInText){
  // find the script for each letter that we come across
    const objOfScripts = characterScript(characterInText.charCodeAt())
  

// check if our character belongs to a writing dorection
  // if it belong to a writing direction, return it in our callback function
  //if it doesn't beling to a script, return 'non-alphabetic'


if(objOfScripts !== null){
  return objOfScripts.direction;
}
return "non-alphabetic"
});
//sort our array to find the highest count value
arrayOfScripts.sort(function(a, b){
  return b.count - a.count;
})

return arrayOfScripts[0].name;


}






// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
