// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jcorley44');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //I: an array
    //O: numbuh
    //C: use _.filter
    
    //get access to each costumer object and filter the males
 var  arrOfMaleObj = _.filter(array, function(customerObj, index, array){
        //checking to see if my customer is a male using the gender key
        return customerObj.gender === 'male';
    });//chain on .length to get number of male customers

var numOfMaleObj = arrOfMaleObj.length;
    console.log(numOfMaleObj)
    return numOfMaleObj;
};









var femaleCount = function(array){
    
 //  _.reduce(array, function(prev, current, index){
     
// },0)
    
    //declaring and assigning the variable of numOfFem 
    //using the reduce function to count the number of females
    var numOfFem = _.reduce(array, function(initialValue, customerObj){
    
    //if the customer object id strictly equal to female 
      if(customerObj.gender === 'female'){
         
    //then the initial value will increase by one     
          initialValue += 1;
          return initialValue;
      }
      
    //if the customerObj is not strictly equal to female then the initialValue-seed will be returned   
      else{
          return initialValue;
      }
        
    //setting the seed to one as the initial value    
    }, 0);
    //returning the variable with the count and subtracting the initial seed value  
       var final = numOfFem;
       console.log(final);
       return final;
}; 









var oldestCustomer= function(array){
//creating an age & name variable
var age = 0;
var name;

//creating for loop to iterate through the array of customers
    for(var i = 0; i < array.length; i++){
        
//conditional statement comparing the customers age to the age variable        
        if(array[i].age > age){
        
/*if the customers age is greater than the age variable then their name and age gets stored into the name
and age variable for comparison in the next iteration */
        age = array[i].age;
        name = array[i].name;
        }
    }
    
//returning the name of the customer with the highest age    
return name;
};









var youngestCustomer = function(array) {
 
//creating an age & name variable    
var age = 1000;
var name;

//creating for loop to iterate through the array
    for(var i = 0; i < array.length; i++){
        
//conditional statement comparing the customers age to the age variable         
        if(array[i].age < age){

/*if the customers age is less than the age variable then their name and age gets stored into the name
and age variable for comparison in the next iteration */        
            age = array[i].age;
            name = array[i].name;
        }
    }
    
//returning name of youngest customer    
return name;

};
    
    
    






var averageBalance = function(array){

//plucking an array of the balances   
var arrayOfBalances = _.pluck(array, 'balance');

//using map to remove the dollar sign infront of each balance
var arrayOfBalancesNo$ = arrayOfBalances.map(function(item, index){
    return item.replace('$', '');
});

//using map again to remove the comma from each balance
var arrayOfBalancesNoComma = arrayOfBalancesNo$.map(function(item, index){
    return item.replace(',', '');
});

//using map with parseFloat to convert each balance string to a number
var x = arrayOfBalancesNoComma.map(function(i){
    return parseFloat(i);
});

//using reduce to find the sum of the elements in the array
var totalBalance = x.reduce((a ,b) => a + b, 0);

//settting a variable num equal to the length of the balance array for the average
var num = arrayOfBalances.length;

//finding the average balance
var averageBal = totalBalance / num;

//returning the value
return averageBal;

};









var firstLetterCount = function (array, letter){
//how many customers names begin with a given letter

//using pluck to get an array of the name values
var arrayOfNames = _.pluck(array, 'name');

//creating a variable to store the count
var count = 0;

//for loop iterating through the arrayOfNames 
for(var i = 0; i < arrayOfNames.length; i++){
    
//conditional statement checking the first charcter of each index compared to the input letter     
if(letter === arrayOfNames[i].charAt(0).toUpperCase() || letter === arrayOfNames[i].charAt(0).toLowerCase()){
    
//if true one will be added to the count variable    
    count += 1;
}
}

//returning the count variable
return count;

};









var friendFirstLetterCount = function(array, customer, letter){
    
//using pluck to get an array of the name values
var arrayOfNames = _.pluck(array, 'name');

//an array of friends with each element having an object of friends for each person
var arrayOfFriends = _.pluck(array, 'friends');
    

//creating a variable to store the count
var count = 0;

//store the index position of the customer in the arrayOfNames 
var indexVar;

//iterating over the arrayOfNames to get the index position and use that for the corresponding arrayOfFriends
for(var i = 0; i < arrayOfNames.length; i++){
    if(customer === arrayOfNames[i]){
        indexVar = i;
    }
    
} 

//this will store the array of a single customer's friends
var specificFriendArray = arrayOfFriends[indexVar];



//iterating to find which friend starts with the same letter then will add one to the count variable
for(var j = 0; j < specificFriendArray.length; j++){
    if(letter.toLowerCase === specificFriendArray[j].name.charAt(0) || letter.toLocaleUpperCase() === specificFriendArray[j].name.charAt(0)){
        count +=1;
    }
}
  
return count; 

};









var friendsCount = function(array, name){
    // create a count array
    let count = [];
    // filter through array
    array.filter(person => {
        // loop thorugh each persons.friends
        person.friends.forEach(friend => {
            // if the friends name strictly equals the name it will push the friends name into the count array
            if(name === friend.name){
                count.push(person.name);
            }
        });
    });
    // return count array
    return count;
};









//var topThreeTags = function(array){
// //creating an array for all tags
//  var arrayOfAllTags = [];
     
// //iterating over the array of objects
//         for(var i = 0; i < array.length; i++){
          
// //putting all of the values of the tags keys into an array
//             var tagsArray = array[i]['tags'];    
                
//          //pushing all of the tag values that we are getting into the array of all tags
//                 for(var j = 0; j < tagsArray.length; j++){
//                     arrayOfAllTags.push(tagsArray[j]);
//                 }
//     }

// //sorting the tags
// var sortedTags = arrayOfAllTags.sort();

// for(var k = 0; k < sortedTags.length; k++){
// }  
// //creating an object to hold the occurence of tags
// var counts = {}; 

// //counting the occurances of the tags
// for (var i = 0; i < sortedTags.length; i++) {
//   var num = sortedTags[i];
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }
 
// var sortedTagWithValueArray = [];    
//  for(let key in sortedTags){
//       sortedTagWithValueArray.push([key, sortedTags[key]]);
//   }
  
  
//  //returning the sorted tags with value
//  return  [sortedTagWithValueArray[0], sortedTagWithValueArray[1], sortedTagWithValueArray[2]];



//creating an array to store top three tags 
//};







var topThreeTags = function(array){
var top3 = [];
_.each(array, function(element, index, collection) {
_.each(element.tags, function(tag, index, collection) {
    top3.push(tag);
});
});
var reduced = _.reduce(top3,function(accObj, tags){
  if(accObj[tags]){
accObj[tags] += 1;
return accObj;
  }
  accObj[tags] = 1;
  return accObj;
},{});
var sortedArray = [];
for (var key in reduced){
  sortedArray.push({tag: key, occured: reduced[key]});
}
sortedArray.sort(function (a,b){
  return b.occured - a.occured;
});
return [sortedArray[0].tag, sortedArray[1].tag, sortedArray[2].tag];
};










var genderCount = function(array){
    
//assigning and declaring gendes object and using reduce to count the individual genders    
  let genders = array.reduce((count, person) => {
      
//if the object key is strictly equal to male      
      if(person.gender === 'male'){
          
//if true a value of one will be added to the male property
//if false the property will have a value of zero
          count.male = (count.male || 0) + 1;
      
//the other genders will also follow this logic          
      } if(person.gender === 'female'){
          count.female = (count.female || 0) + 1;
      } if(person.gender === 'non-binary'){
          count['non-binary'] = (count.nonbinary || 0) + 1;
      }
      
//returning the count object so gender can use the data      
      return count;
  }, {});
  
//returning count   
  return genders;

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
