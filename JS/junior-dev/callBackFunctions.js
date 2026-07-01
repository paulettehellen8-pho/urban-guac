/*
    Callback function
    -> A function that takes one or more parameters as functions
    *one or more of the parameters are functions
        Task
        Create a function that print an alert for the current time
        ->doesn't take parameters
        ->prints alert, console.log
        ->test the function by calling it
*/

// function currentTime() {
//   let time = new Date();
//   console.log(`The current time is ${time}`);
//   alert(
//     `The current date and time is: ${time.toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })}`,
//   );
// }
// currentTime();

/*
    In- built function call setInterval

    param1 is a function => to be called after every 3 seconds
    param2 is time in milliseconds
    ->setInterval(param1, param2);

    after 3 sec = 3000 milliseconds

        1. Use the setInterval with a named function        
*/
// setInterval(currentTime, 3000);// callback function

// 2. Anonynous function -> remove the named function

setInterval(function () {
  const time = new Date();
  console.log(`The current time is ${time}`);
}, 3000);

// 3. Arrow function

let invT = setInterval(() => {
  const time = new Date();
  console.log(`The current time is ${time}`);
}, 5000);
clearInterval(invT); //stops the interval

/* setTimeout only executes once -> If you want a function to have a delay in execution */

setInterval(() => {
  const time = new Date();
  console.log(`The current time is ${time}`);
}, 5000);

/*
    Create our own callback function
*/
