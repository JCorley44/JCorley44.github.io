/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};                 //creating object of animal
animal.species = 'panthera';     //creating a key value pair of species using dot notation
animal['name'] = 'Grimmjow';     //creating a key value pair of name using bracket notation
animal.noises = [];              //creating a key value pair that has the value that is an array called of noises using dot notation           
console.log(animal);             //printing the object to terminal
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];                 //creating an empty array of noises 
noises[0] = 'Cero';              //assigning a value to the first index of the noise array
noises.push('Grand Rey Cero');   //asigning a value of Grand Rey Cerro to the end of the noise arrat using the push function
noises.unshift('Hierro');        //adding a value of Hierro to the front of the array using the unshift
noises.push('BANKAI');           //pushing noise into noises object
noises[animal.noises.length] = 'Place Holder';
console.log(noises.length);
console.log(noises.length-1);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;                  //adding the array of animal noises to the property of noises
animal.noises.push('Garra de la Pantera');  //adding a new noise to the array of noises within the property of noises in animal object
console.log(animal);                        //console logging object

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
        
        to  access properties on objects the best ways are:
            using dot notation      object.keyName
            bracket notation        object['keyName']
            for in loops            for(var key in object)
            
 *
 * 2. What are the different ways of accessing elements on arrays?
 
        to access elements on arrays the best ways are
            using bracket notation
            split
            join
            pop
            shift
            unshift 
            splice

 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];           
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
var goose = { species: 'bird', name: 'Silly', noises: ['slap', 'splash', 'flap', 'wam'] };
var bear = { species: 'grizzley', name: 'Smokey', noises: ['bam', 'roar', 'snore', 'thud'] };
animals.push(goose);
animals.push(bear);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = []; //instructions said to make a list so an array was created 

//making a random function
function getRandom(animals){
    
    //creating loop to iterate through array
    for(var i = 0; i < animals.length; i++){
        
        //using math.floor to round the random number to a whole number for the array
        return Math.floor(Math.random(animals.length));
    }
}    

//pushing duck name into friends array
friends.push(duck["name"]);

//adding friends as a property to one of the animals in friends
animals[getRandom(animals)].friends = friends;
console.log(friends); //

console.log(animals);
    
    //should return index
    


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
