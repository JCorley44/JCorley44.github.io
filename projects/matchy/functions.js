/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//animals parameter is an array and name parameter is a string
function search(animals, name){ 
    
    //for loop to iterate through array
    for(var i = 0; i < animals.length; i++){
        
        //if statement strictly compares names in lower case to correct for any possible capitalizations
        if(name.toLowerCase() === animals[i].name.toLowerCase()){
            
            //if the condition is true it will return the animal object at that index
            return animals[i];
        }
        //if not then it will return null
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//creating a replace function
function replace (animals, name, replacement){
        
        //creating loop to iterate through array
        for(var i = 0; i < animals.length; i++){
            
            //if statement checking each element of array to see if they strictly equal
            if(animals[i].name === name){
                
               //if true splice will replace that element
               animals.splice(i, 1, replacement);
              
            } 
        }  
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//creating function to remove animals
function remove(animals, name){     
    
    //for loop to iterate through object
    for(var i = 0; i < animals.length; i++){
            
            //creating if statement checking to see if the value of the name key os equal to the input
            if(animals[i].name === name){
              
              //using the splice method remove the animal name if it matches
              animals.splice(i, 1);
    
}
}
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//crating a function to add animals
function add(animals, animal){
    
    
    //creating conditional statement to check if the name value is greater than zero then proceed to next if satement
    if(animal.name.length > 0){
        
        //if previous if statement is true this one will check for species length to be greater than zero
        if(animal.species.length > 0){
            
            //if true loop williterate through array and check for unique names
            for(var i = 0; i < animals.length; i++){
                
                //if the names are the same then the function will end 
                if(animals[i].name === animal.name){
                    return
                }
                //if all checks pass then the animal will be pushed into array
            }   animals.push(animal); 
        }
    }
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
