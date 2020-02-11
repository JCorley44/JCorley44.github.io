/**
 *  OPERATORS
 * 
 *      JavaScript has six different operators: mathematic, assignment, logical, comparison, unray and ternary operators. 
 */

 //             MATH OPERATORS

 /**
  *  The math operators allow for basic mathematical operations depending on which operand is used.
  */

//Addition Operator 
    //The addition operator is a plus sign: +
    //Adds numbers or variables which have been assigned numbers 
            
            console.log(2+2); //simple calculation that equals 4

            let a = 8, b = 4; //assigning values to variables then adding them
            let sum = a + b;
            console.log(sum); //printing the answer to the terminal which will equal 12
    //Can also concatenate or add strings together 
            console.log('Hello ' + 'World'); //This will output 'Hello World' as a single string

//Subtraction Operator
    //The subtraction operator is a minus sign: -
    //Subtracts numbers or variables which have been assigned numbers

            console.log(2-2); //simple calculation that equals 0

            let c = 8, d = 4; //assigning values to variables then subtracting them
            let difference = c - d;
            console.log(difference); //printing the answer to the terminal which will equal 4

//Multiplication Operator
    //The multiplication operator is an asterisk: *
    //Multiplies numbers or variables which have been assigned numbers

            console.log(2*2); //simple calculation that equals 4

            let e = 8, f = 4; //assigning values to variables then adding them
            let product = e * f;
            console.log(product); //printing the answer to the terminal which will equal 32

//Division Operator
    //The division operator is a forward slash: /
    //Divides numbers or variables which have been assigned numbers

    console.log(2/2); //simple calculation that equals 1

    let g = 8, h = 4; //assigning values to variables then adding them
    let quotient = g / h;
    console.log(quotient); //printing the answer to the terminal which will equal 2

//Modulus Operator
    //The modulus operator is the percent sign: %
    //Divides numbers or variables which have been assigned numbers and outputs the remainder as the answer

    console.log(2%2); //simple calculation that equals 1

    let i = 8, j = 4; //assigning values to variables then adding them
    let remainder = g % h;
    console.log(remainder); //printing the answer to the terminal will equal 0    

//Increment Operator
    //The increment operator is the double plus sign: ++
    //Increaces a variable by one

    console.log(j++); //j++ will output 5 

//Decrement Operator
    //The decrement operator is the double minus sign: --
    //Decreses a variable one
    console.log(j--); //j-- will output 3



//              COMPARISON OPERATORS

/** They compare the value of two values. They only return true or false as an output. */

//Creating a variable to demonstrate the comparison operators
    let zeta = 44;

// Equal to value operator: ==
    zeta == 9;      //Returns false
    zeta == '44'    //Return true, the equal to operator only looks at the value and not the type of data when compairing

// Not equal to operator: !=
    zeta != 0;      //Returns true
    zeta != '44';   //Returns false

// Less than or equal to operator: <=
    zeta <= 100;    //Returns true 
    zeta <= 44;     //Returns true
    zeta <= 20;     //Returns false

// Greater than or equal to operator: >=
    zeta >= 20;     //Returns true
    zeta >= 44;     //Returns true
    zeta >= 100;    //Returns false

// Less than operator: <
    zeta < 100;     //Returns true
    zeta < 44;      //Returns false
    zeta < 20;      //Returns false

// Greater then operator: >
    zeta > 20;      //Returns true
    zeta > 44;      //Returns false
    zeta > 100;     //Returns false


//              ASSIGNMENT OPERATORS

//These operators assign values to variables
    var k;
//Assignment operator: =
    //Assigns a value to a variable
    k = 6; //The number 6 has been assigned the value of 6

//Addition assignment: +=
    //This operator adds and assigns a value
    k = k + 6; 
    k += 6;    //This operator is equivalent to the line of code above. 

//Subtraction assignment: +=
    //This operator subtracts and assigns a value
    k = k - 6; 
    k -= 6;    //This operator is equivalent to the line of code above

//Multiplication assignment: *=
    //This operator multiplies and assigns a value
    k = k * 6; 
    k *= 6;    //This operator is equivalent to the line of code above

//Division assignment: /=
    //This operator divides and assigns a value
    k = k / 6; 
    k /= 6;    //This operator is equivalent to the line of code above

//Remainder assignment: %=
    //This operator divides then assigns the remainder as the new value
    k = k % 6; 
    k %= 6;    //This operator is equivalent to the line of code above

//Exponentiation assignment: **=
    //This operator raises the current value to a new power then assigns it to a new variable
    k = k ** 6; 
    k **= 6;    //This operator is equivalent to the line of code above.
    
    
//              LOGICAL OPERATORS
/** Logical operators also known as boolean operators compare expressions and return values of either true or false. */

// &&
// This is the logical operator and. It evaluates two different conditions and only returns true if both statements are true
    // a = 8 and b = 4
            a > 1 && b < 5; //this will return true since both operands are true
            a < 1 && b < 5; //this will return false since a < 1 is false

// ||
// This is the logical operator or. It evaluates two conditions and returns true if one of the conditions is
// evaluated as true. It will return false if both operands are evaluated as true.
            a < 4 || b < 5; //will return true since a < 4 is false but b < 10 is true
            a > 1 && b < 5; //this will return true since both operands are false

// !
//This is the logical operator not. It inverts the boolean value 
            !(4 > 5);       //this will return true
            !(1 === 1);     //this will return false



//              UNARY OPERATORS 
// Unary operators are operators with only one operand. 

//  typeof
// This unary operator determines the data type of an operand and returns the evaluation as a string
        typeof a;           //will return number
        typeof zeta;        //will return string 



//              TERNARY OPERATOR
/**  A ternary operator is a simple conditional statement. The syntax of the
 *   ternary statement is:      
 *                          condition ? executeIfTrue : executeIfFalse;
 *   If condition statement of the ternary is true then the executeIfTrue will run but otherwise the executeIfFalse will run 
 * */

        4 > 1 ? console.log('true') : console.log('false');  //this will return true since 4 is greater than one
        4 < 1 ? console.log('true') : console.log('false');  //this will return false since 4 is not less than one