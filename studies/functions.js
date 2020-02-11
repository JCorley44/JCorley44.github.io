/**
 *  DATATYPES 
 * 
 *  Datatypes are the attributes of data that allows the compiler to execute the code 
 *  as the programmer intends. They provide the values in which expression get their values.
 *  There are many different datatypes with different values and interactions with other datatypes.
 */

//              NUMBERS
// Number datatype allow the program to use numbers whether negative, positive or decimal. 


//              STRING
// Strings are data in text form. To create a string characters must be surrounded by quotes or double quotes.
        let string = 'This is an example of a string.';
        let string2 = "This is another example of a string";
// Strings also have index starting at zero. To access the index type name of the string variable
// the index number after it inside of brackets.
        string[3]; //This will print s to the terminal
// String length is a property of strings and outputs the number of indices in a string 
        string2.length; //will output 35 to console


//              BOOLEAN
// The boolean datatype returns two logical values, true and false. It is often used for conditional
// statements and loops. 
    //boolean value in if statement 
        if('boolean conditional'){
            // Code here executes if the boolean conditional is true
        } else {
            // Code here executes if the boolean conditional is false
        }


//              ARRAY
/**  Arrays are datatypes that are capable of storing multiple values in one variable. Arrays are created when you assign a variable Each value 
 *   is in an element with a numbered index. The elements within the array can hold any other datatype 
 *   such as: numbers, strings, booleans, functions, objects and even other arrays. They even have properties and 
 *   methods which can be used to manipulate the data within them. 
 */
    //Example of an array
        let array = ['one', 2, true, ['three', 4]];


//      ARRAY PROPERTIES
//  .length - This property returns the number of elements in an array
        array.length;   //returns 4 to the terminal since the example array has elements

//  .prototype - This property allows for the user to create new proporties and methods. 
//  Once prototype has been used all arrays will have access to the newly created method

//              OBJECT
/**  Objects like arrays can store many values and different types of data. Unlike arrays 
 *   objects are not organized by indices but instead have associative key/value pairs.
 */
//Example object 
            let jaguars = {





            }


//              FUNCTION



//              UNDEFINED
// The datatype of undefined occurs when a variable is declared but has not been assigned a value. 
            let stop;
            console.log(stop);

//              NULL
// Null is the intentional absence of any value. 
            let go = null; 


//              NAN



//              INFINITY AND -INFINITY



//              DIFFERENCE BETWEEN DATATYPES