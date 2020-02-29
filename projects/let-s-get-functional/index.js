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
    }, 1);
    //returning the variable with the count and subtracting the initial seed value  
       var final = numOfFem - 1;
       console.log(final);
       return final;
}; 

var oldestCustomer= function(array){
    
// var oldestAge = 0;
// //creating an array of the ages
// var oldieAge = _.pluck(array, 'age');
      
// //creating an array og the names
// var oldieName = _.pluck(array, 'name')

// ///using math.max to find the largest age
// var largestAge = Math.max(...oldieAge);
  
// var eldestName;


var age = 0;
var name;


    for(var i = 0; i < array.length; i++){
        if(array[i].age > age){
                age = array[i].age;
         name = array[i].name;
        }
    }
return name;
};

var youngestCustomer = function(array) {
    
var age = 100;
var name;


    for(var i = 0; i < array.length; i++){
        if(array[i].age < age){
                age = array[i].age;
         name = array[i].name;
        }
    }
return name;

};
    
    
    

var averageBalance = function(array){
    
var totalBal = _.reduce(array, function(currentBalance, TotalBalance){
      
        currentBalance += TotalBalance;
        return currentBalance;
    },1);
    return console.log(totalBal);
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
