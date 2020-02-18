//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //using object.values method to output values as an array
    return Object.values(object); 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //creating variable to store key array into 
    let supercalifragilisticexpialidocious;                  
    
    //using object.keys method to get keys as an array and assign to the variable j
    supercalifragilisticexpialidocious = Object.keys(object);
   
   //returning the array j as a string using the join method with a space
    return supercalifragilisticexpialidocious.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    //creating array to store the values of object 
    var j = [];
    
    //for loop to iterate through the object
    for(var key in object){
    
    //conditional statement checks to see if each value is a string
        if(typeof object[key] === 'string'){
    
    //if that condition is true then that value is pushed into the object
            j.push(object[key]);
        }
    }
    //returning the array of object values and using the .join to turn it into a string 
    return j.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
         return 'array';
    } else if(collection && typeof collection === 'object' && collection.constructor === Object){
        return 'object';
    }
        
    
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
//using replace function to replace the string parameter then using the toUpperCase method to capitalize the string
    return string.replace(string[0], string[0].toUpperCase());
}
    


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  var emptyArray = [];
  
  
  var splitArray = string.split(" ");
  
  
  for(var i = 0; i < splitArray.length; i++){
    
    
    emptyArray.push(capitalizeWord(splitArray[i]));
  
      
      
  }
  
  
  var finalString = emptyArray.join(" ");
  
  
  return finalString;
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
      for(var key in object){
        
        if(key === 'name'){
       
       return "Welcome " + capitalizeAllWords((object[key])) + "!";
     }

}
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    for(var key in object){
        if(key === 'name'){
            var name = object[key];
        } else if(key === 'species'){
            var species = object[key];
        }
    }

    var final = capitalizeAllWords(name) + " is a " + capitalizeAllWords(species);
    return final;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object){
   
    
    if(Array.isArray(object.noises)  && object.noises.length > 0){
                return object.noises.join(' ');
    }
        else{
    return "there are no noises";
    
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    var strArray = string.split(' ');
    
if(strArray.includes(word)){
    return true;
} else {
    return false;
}

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
//input: name and object

//add name to an array in object 
object.friends.push(name);



//returns object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
      if((Object.entries(object).length === 0)){
        return false;
    } else if(object.friends.includes(name)){
        return true;
    } else{
        return false;
    }
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

//creating a variable to store non friends into
var notFriend = [];

//creating an loop to iterate to elements of array
for(var i = 0; i <= array.length; i++){
  

  
//       return;
//   } 
  //conditional statement using previous function to check of name is friends with other names in the data array
  //since the previous function checked for friends and returned true if they were friends
  //the conditional statement will check for falsehoods and push those into a an array
  //
      if(isFriend(name, array[i]) === false && array[i].friends !== name && array[i].name !== name){
          
  
  //pushing the flase values to the friends function into the not friends array
        notFriend.push(array[i].name);
        console.log('notfriend', notFriend);
    }
}
 return notFriend;


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
   var j;
   
    //creating a for in loop to loop through object key
    for(var key in object){
    //conditional statement checking to see if the object property is an array
    if(array.includes(key)){
            delete object[key];   
    }

} 

    
    
    
    
    
    
    
}



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
function nonFriends(name, array) {
    //creating an empty array 
    var nameList = [];
   
    //empty array for answer
    var result = [];
    
    //loop iterating through the array
    for(var i = 0; i < array.length; i++) {
        
    //if name is strictly equal   
        if(name === array[i].name) {
        
       var current = array[i];
    } else {
        nameList.push(array[i].name);
    }
}
      if(current === null){
        return nameList;
    }
    for(var i = 0; i < nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }
    // return array of names non dupes
    return result;
}
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}