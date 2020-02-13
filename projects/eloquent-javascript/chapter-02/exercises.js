
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  var x = '';                       //creating a container variable with the value of string
for(var  i = 0; i < number; i++){   //for loop with the stop condition being the input number
      console.log(x += '#');        //
}
return x;
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  
  
for( var i = start; i <= end; i++){ //creating for loop to count from start and end values
        if(i === 0){                //having this be the frist condition because 0/0 = infinity and that is incorrect for this problem
            console.log(i);
        }
        else  if(i%15===0){
                console.log('fizzbuzz');
        }    
        else if (i%5===0){
                console.log('buzz');
        }    
        else if (i%3===0){
                console.log('fizz');
        }
        else{
                console.log(i);
        }
}
        

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
    //empty string to add ' ' , '#' or newline
    var board = "";

//the outer loop adds newline to seperate rows
for (var i = 0; i < number; i++) {   
  for (var j = 0; j < number; j++) {//every inner loop rappresents a line
    if ((i + j) % 2 == 0)         //alternatively adds ' ' or '#' to the board string
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

  console.log(board);
    

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
