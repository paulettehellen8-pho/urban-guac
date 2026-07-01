/*
    1. Named function
*/

function areaCircle() {}

function areCircle(r) {
  //-> This is a named function
  return 3.142 * r * r;
}

let age = 23;
let samsAge = age;

let ac = areCircle;
let k = areCircle(); //expression -> NaN -> Gets evaluated and yields a result
//What is the value of ac and what is it?
console.log(`ac is ${ac} and its type is ${typeof ac}`);
// ac is function areCircle(r) {
//   return 3.142 * r * r;
// }
// and its type is function

//call function
ac(10); //expression

/* 
    Anonymous function: <without a name>
    -> A function can be assigned to a variable
    -> A variable can reference a function        
        
*/

// function rectangleArea(l, w) {
//     return l * w;
// }
// let rA = rectangleArea;

// let rA = function rectangleArea(l, w) {// The name is useles because it cannot be accessed in that scope because it is assigned to the variabl
//     return l * w;
// }

let rA = function (l, w) {
  return l * w;
};

//   1. Create a named function
// function getPercentage(amount, total) {
//   return `(amount / total) * 100) % `;
// }
// console.log(getPercentage(45, 200)); // 22.50%

// 2. Assign the function a variable
// let percent = getPercentage;
// console.log(percent(45, 200));       // 22.50%
// console.log(getPercentage(45, 200)); // 22.50%

// 3. Directly equate your variable to the defined function
// let percent = function getPercentage(amount, total) {
//   return `${(amount / total) * 100}% `;
// };

// 4. Remove the original function -> Error: not defined

// 5. Try calling the variable and the original function
// console.log(percent(45, 200)); // 22.50%

//6. Remove the name of the function
let percent = function (amount, total) {
  return `${(amount / total) * 100}% `; // 7. You are left with an anonymous function without a name
};
console.log(percent2(45, 200)); // 22.50%



/*
    Arrow functions
    -> Simplifies function creation -> <syntatical sugar>
    Step 1. Create an anonymous function
         2. Remove the function keyword
         3. Between () <> {} put an arrow =>
         4. Good practice -> have the variable as a const
*/

let rAa =  (l, w) => {
  return l * w;
};


