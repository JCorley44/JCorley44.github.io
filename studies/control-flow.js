/*
 * CONTROL FLOW:
 *
 * 0. Control flow is the order that the computer executes code. Execution goes from the first line of code then down to the 
 * last line but there are ways coders can affect that. Conditional statements are a way for programmers to control the way the 
 * order of the code executed and which code blocks will run during the current instance. Using if statements, else-if statements and 
 * switch statements allow for specific blocks of code to run if a condition is met.
 */

// 1. If Statements//
/* If statements allow certain code blocks to execute only if a certian condition is true.
 */ 

let string = 'i am true';

if(typeof string === 'string') {                 //if statement evaluating the condition of the string variable is a string datatype
   
    console.log('example of an if statement');   //since true then the message will be console logged 
}



// 2. Else-if //
/* Else if statements allow for better control. It will execute if the previous if condition fails. Else if statements can be chained after an if
 * statement to check for multiple conditions. In an else if chain there can only be one if statement but the number of else if statements does not 
 * have a limit. Else if atatements have the same syntax as if statements.
 */

let string1 = 'i am true';

if(typeof string !== 'string') {                
   
    console.log('this is the if statement');            //if condition evaluates to false, code block will not be executed

   
}else if(typeof string === 'string'){                   //else if condition evaluating if num is less than 4
   
    console.log('this is the else if statement');  
}



// 3. Else //
// Else is the very last condition in the if, else if chain.
// Else does not evaluate a condition, it is the default code that will execute if all other tests fail
//  

let number = 1000;

if(number < 19) {                
   
    console.log('if statement');            //this condition is false so the code will go to the next condition

   
}else if(number < 89){                      //this condition is false also, 
   
    console.log('else if statement');                        

   
}else{
   
    console.log('else statement');          //the previous checks have failed the else statement will print to the console
}



// 4. Switch //
//Switch statements are another way to have conditional code execute
//Switch expressions are evaluated once. Each value of the expression is compared with the values of each case and there is a match, the code
//block associated with the passing case. The way to exit switch statements

var bestAnime = 'Cowboy Bebop';

switch(bestAnime){          
   
    case "One Piece":                                                               //if the value of the variable is 'One Piece'
        console.log("very long but pretty good");                                   //the first string in the console log will print
        break;
       
    case 'Cowboy Bebop':                                                            //this case is true so it will print the string in the console log
        console.log("Good choice, it is the best anime of all time");
        break;
       
    default:
        console.log("you have trash taste");        
   
}