/*
    A recursive function is a function that calls itself
    -> since this creates an endless loop, you need to find a way to terminate using
        => An if <condition> and a return statement
*/

function salaryGrossPromptProcess(
  attempt = 0,
  message = "Enter your gross salary",
) {
  console.log(`call, attempt = ${attempt}`);
  let gross = prompt(message);
  //condition to be met
  if (isNaN(gross) === false) {
    console.log(`You entered this amount: ${gross}. Exiting`);
    return; //exit function
  }
  //   alert(
  //     `Invalid gross salary entered. Enter a number for your gross salary. Try again`,
  //   );
  salaryGrossPromptProcess(
    `${attempt + 1}
    Invalid gross salary entered. Enter a number for your gross salary. Try again`,
  );
}
// salaryGrossPromptProcess();

/*
    1. Remove the alert
    2. Initial prompt ->Enter your gross salary
    3. Any prompt after should be ->  `Invalid gross salary entered. Enter a number for your gross salary. Try again`
*/

/*
    Create a function to calculate the factorial of a number
    The function takes a parameter
    ->@param1 which is a number and returns the factorial of the number
    eg. factorial(5) output 120
    //5*4*3*2*1
    //check the number entered is greater than 1
    //hint use a recursive function
*/

function calculateFactorial(n) {
  if (n === undefined) {
    n = prompt("Enter a number");
  }

  if (isNaN(n) === true) {
    alert("Invalid. Kindly enter a number");
    return calculateFactorial();
  }

  n = Number(n);

  if (n <= 1) {
    return 1;
  }
  let previous = calculateFactorial(n - 1);
  let result = n * previous;

  console.log(`The factorial of (${n}) is ${n} * ${previous} = ${result}`);
  return result; //calling the recursive function
}
console.log(`The result is ${calculateFactorial()}`);

//TEACHERS WAY
//factorial(5)
// function factorial(n = 1, lastSolution = 1) {

//     //end condition
//     //5<=1-false //4<=1 false
//     //3<=1 false
//     //2<=1 false
//     //1<=1 true

//     if (n <= 1) {
//         return lastSolution;
//     }

//     //5*1=5 //4*5=20 // 3*20=60 //2*60=120
//     const newSolution = n * lastSolution;

//     const newN = n - 1; //5-1=4//4-1=3//3-1=2//2-1=1
// }

  /*
    Call stack
    factorial(1)->1
    factorial(2)->2
    factorial(3)->3
    factorial(4)->4
    factorial(5)->5
  */
  function factorial2(n){
  if(n <= 1) {
      return 1;
  }
  console.log(n);
  return n*factorial(n-1);
}



/*
    Recursive functions almost function as loops
    Unending loops => takes all the memory, causing you to restart 
    Problem that requires a loop => stack overflow:exit condition
*/

//endless stack => <endless loop>
// function maxStack(n=0){
//     console.log(`N is at ${n}`);
//     maxStack(n+1);
// }

// function maxStack(){
//     let n=0
//     while (true) {
//         console.log("n is", n);
//         n = n+1;//crash
//     }
// }
