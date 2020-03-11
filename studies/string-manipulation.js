/*
 * STRING MANIPULATION:
 *
 * 0. Strings can be manipulated using either operators or methods.  
 */

// 1. Manipulation with operators //
// Using the concatenation operator (+) or the shorthand assignment operator (+=)

// Using the concatenation operator, +
console.log('This is ' + 'a string');  // This will print one string instead of two seperate ones. 

// Using the shorthand assignment operator, +=
// If a variable was assigned the value of a string the shorhand assignment operator will 
// concatenate the string value
var string1 = 'Humpty Dumpty';
string1 += ' would be jealous of this concatenation.' //using shorthand operator to concatenate the new string
console.log(string1); // will print 'Humpty Dumpty would be jealous of this concatenation.'


// 2. With string methods //
// Methods are actions that can be performed on different datatypes. These methods allow coders 
// great flexibility when a desired action is necessary.


// .split()
// This method will spilt a sting at a desired character and return them in an array
// .split(' ')
string1.split(' '); //this will split string1 at the space and return ['Humpty', 'Dumpty']


// .toLowerCase()
// Will return the entire string in lowercase
string1.toLowerCase(); //will return 'humpty dumpty'

// .slice()
// Will return an extracted string from a designated start and ending position  
// If the position number is negative then it will start from the end of the string  
// .slice(start, end)
string1.slice(1, 4); //will return 'ump'

// .toUpperCase()
// Returns string in all capital letters
string1.toUpperCase(); // returns 'HUMPTY DUMPTY'

// .trim()
// Removes any white space fro the end of a string
var string3 = '       Hello        ';
string3.trim(); // will print 'Hello';

// .charAt()
// Returns the given character at a specified index within the string
//if the number is larger than the last index an empty space string will ne returned to the console. 
string1.charAt(4); // prints 't'