/*
    Expression-> A piece of code that produces a value
    x>5=> true or false
    10+11=>21 value
    circleArea(5)=> expression function call
*/

let n1 = 23; //statement -> declaring a variable
// n1; //expression
console.log(n1); //is an expression because it gives the value 23
console.log(10 + 12); //is an expression because it gives the  value-> 22
console.log(n1 > 10); //is an expression because it gives true or false

//A function is a statement
function sayMyName() {
  console.log("Sam Mwangi");
}
console.log(sayMyName()); //A function called is an expression ->undefined


//Examples of statements
let n2 = 34; // statement whose action is -> create a variable and store it in memory
//block of code {} statement. //statement{}, if, function, loop
console.log(sayMyName); //Referencing a function -> is a statement - it logs the whole function

