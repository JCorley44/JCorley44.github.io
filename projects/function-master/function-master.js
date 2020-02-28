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
  //creating an empty array to push the capitalized strings into
  var emptyArray = [];
  
  //declaring a variable using the split method to split the inout string at the spaces
  var splitArray = string.split(" ");
  
  //creating a for loop to loop through the array storing the strings
  for(var i = 0; i < splitArray.length; i++){
    
    //this will capitalize each string within each element of the array
    
    emptyArray.push(capitalizeWord(splitArray[i]));
  
      
      
  }
  
  //using this variable to convert the array we had into a string joined with spaces 
  var finalString = emptyArray.join(" ");
  
  
  return finalString;
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
      //for in loop iterating through object
      for(var key in object){
        //if there is a key in the object called name the value will be returned in all capital letters with a welcome message
        if(key === 'name'){
       
       return "Welcome " + capitalizeAllWords((object[key])) + "!";
     }

}
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //for in loop iterating through the object
    for(var key in object){
        
    //searching for a key called name if found the value will be stored in the name variable    
        if(key === 'name'){
            var name = object[key];
        } 
        
    //also looking for a key named species, if found the value will be stored in the species variable  
        else if(key === 'species'){
            var species = object[key];
        }
    }
    //creating a variable to allow for the output to be in string format. 
    var final = capitalizeAllWords(name) + " is a " + capitalizeAllWords(species);
    return final;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object){
   
    //if the parameter object's noises key is an array is true and the length of the array is greater than zero
    if(Array.isArray(object.noises)  && object.noises.length > 0){
                
    //the noises array will be joined and returned            
                return object.noises.join(' ');
    }
        
    //if there are no noises then the following message will be returned    
        else{
    return "there are no noises";
    
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
 
//storing the string that was split into a new variable     
    var strArray = string.split(' ');
    
//using the .includes method to check the array againt the word parameter    
if(strArray.includes(word)){
    
//if the check is true then true will be returned if not then false will be returned    
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
    //
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
    // assign an empty array to a variable called nameList.
    var nameList = [];
    // empty array for result
    var result = [];
    // loop through an array (is one of parameter in the function) to look for the name
    for(var i = 0; i < array.length; i++) {
        if(name === array[i].name) {
        // 
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
    // return a list of all the names that <name> is not friends with"
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//using the anonymous key notation to add a new value to the object
object[key] = value;

//returning the object with the new property
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
var nonDupArray =[];
    for(var i = 0; i < array.length; i++){
            if(nonDupArray.indexOf(array[i]) === -1){
                    nonDupArray.push(array[i]);
            }
    }
return nonDupArray;
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