/*
    Loops: allows you to run a block of code over and over again
    you should not loop to <infinity>
    Have an exit condition

    syntax:
    while(<condition>){
        //block of code
    }

    condition is truthy => condition
    exit if condition is falsey: <false>

    **You can replace a recursive funcction with a loop
    **It is difficult to replace a loop with a recursive function
            <call stack:1734 limit>
            function recursive(){

            }
*/

//Counter 0 -> 100
let n = 0;
let condition = true;
//Itereation -> one run through
while (condition) {
  //console.log("n is", n);
  n = n + 1;
  if (n > 156) {
    condition = false; //automatically exit the loop
    //break -> exit
  }
}
//Iteration 1-> 0 + 1, n > 2 => false
//Iteration 2-> 1 + 1, n > 2 => false
//Iteration 3-> 2 + 1, n > 2 => true -> exit

/*
    Create a function <any name>
    the function should have a parameter
    @param is number greater than 0;
    Have a loop inside that counts down from this number
    Use a while loop. It should print n
*/

function countDown(n) {
  while (n > 0) {
    console.log(n);
    n--;
    // n = n - 1;
  }
}
//countDown(18);

/*
    Options
    ->Have an extra variable
    ->Put condition directly in the while loop without an extra variable
    ->Put condition to true and use the break statement, in an if, to exit the loop
    ->Use a return statement in the if statement too exit the function
*/

/*
    Kindergarten teacher wants to generate a dynamic math table for the students.

    Create a function @function1 (give it any name).
    It doesn't take any parameters.

    This function:
    1. Prompts the user for the first number.
       - Check if the number is valid and greater than 1.
    2. Prompts the user for the second number.
       - Check if the number is valid and greater than 1.
    3. Use recursion or a while loop to ensure the user enters
       valid numbers for both number1 and number2.
    4. After the numbers are entered, call function2.

    Function2 takes the numbers as parameters.

    Create a function @function2 (give it any name).

    This function takes in:
        @param1 -> number greater than 1.
        @param2 -> number greater than 1.

    Inside function2:
    - Check if @param1 is a valid number greater than 1.
    - Check if @param2 is a valid number greater than 1.

    Example:
        function2(3, 5);

    Create a multiplication table up to the given numbers.
    Display the results using console.log().

    Example Output:

    -----
    3 * 5 = 15
    3 * 4 = 12
    3 * 3 = 9
    3 * 2 = 6
    3 * 1 = 3

    -----
    2 * 5 = 10
    2 * 4 = 8
    2 * 3 = 6
    2 * 2 = 4
    2 * 1 = 2

    -----
    1 * 5 = 5
    1 * 4 = 4
    1 * 3 = 3
    1 * 2 = 2
    1 * 1 = 1
*/

function mathTable() {
  let numb1 = Number(prompt(`Enter your first number`));

  while (isNaN(numb1) || numb1 <= 1) {
    numb1 = Number(prompt("Invalid. Kindly enter a number greater than 1"));
  }

  let numb2 = Number(prompt(`Enter your second number`));

  while (isNaN(numb2) || numb1 <= 1) {
    numb2 = Number(prompt("Invalid. Kindly enter a number greater than 1"));
  }
  mathSolution(numb1, numb2);
}

function mathSolution(numb1, numb2) {
  if (!(numb1 > 1 && numb2 > 1)) {
    console.log("Both numbers must be numbers greater than 1.");
    return;
  }
  let multiple = numb1;
  while (multiple >= 1) {
    let multipliedBy = numb2;
    while (multipliedBy >= 1) {
      console.log(`${multiple} * ${multipliedBy} = ${multiple * multipliedBy}`);
      //3*5=15
      multipliedBy--;
      //5,4,3,2,1//stop
    }

    multiple--;
    //3//2*5//2*4//2*3//2*1
    //1*5//1*4//1*3//1*2//1*1
  }
}
mathTable();

//Teachers Way
function promptStudent() {
  let num1 = null;
  let num2 = null;
  while (true) {
    num1 = prompt("Enter the first number");
    if (isNaN(num1)) {
      continue; //restart the loop
    }
    num2 = prompt("Enter the second number");
    if (isNaN(num2)) {
      continue; //restart the loop from the beginning
    }
    num1 = parseInt(num1);
    num1 = parseInt(num1);
    if (num1 <= 0 || num2 <= 0) {
      continue;
    }
    break;
  }
  console.log("Got valid number", num1, num2);
}

function mathsTable(num1, num2) {
  if (!num1 || num1 < 0 || !num2 || num2 < 0) {
    console.error("Ensure Number 1 on number 2 are numbers greater than 0");
    return;
  }

  let outerLoop = num1;
  // doInnerLoop(outerLoop, num2);
  //2>0=true
  while (outerLoop > 0) {
    let innerLoop = num2;
    //3>0:true //2>0 //1>0:false<exit>innerloop
    while (innerLoop > 0) {
      //2*3=6
      //2*2=4
      //2*1=2
      //------
      //1*3=3
      //1*2=2
      console.log(`outerloop = ${outerLoop}, innerloop${innerLoop}`);
      console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);
      //3-1=2 //2-1=1 //1-1=0
      //-----
      //3-1=2
      innerLoop = innerLoop - 1;
    }
    //2-1=1
    outerLoop = outerLoop - 1;
  }
}

// function doInnerLoop(outerLoop, num2) {
//   let innerLoop = num2;
//   while (innerLoop > 0) {
//     console.log(`outerloop = ${outerLoop}, innerloop${innerLoop}`);
//     console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);

//     innerLoop = innerLoop - 1;
//   }
// }
