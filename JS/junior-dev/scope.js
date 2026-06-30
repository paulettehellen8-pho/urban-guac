const pi = 3.142; //global scope

function areaCircle(r) {
  //global scope
  const pi = 3.1423; // in the block scope
  return pi * r * r;
}

function perimeterCircle(r) {
  return 2 * pi * r;
}

function circle(r) {
  //global scope
  const area = areaCircle(r);
  const perimeter = perimeterCircle(r);
  console.log(`For a circle of r ${r} area ${area} perimeter ${perimeter}`);
}

function testM() {
  let m = "hello world";
  console.log(m);
  if (true) {
    let m = 123;
    console.log(m); //returns 124
  }
}

let clicked = 0;
//Global scope

function increment() {
  clicked = clicked + 1;
  console.log("Clicked value", clicked);
}

function increment() {
  clicked = clicked + 1;
  console.log("Clicked value", clicked);
  updateClickValue();
}

function decrement() {
  clicked = clicked - 1;
  console.log("Clicked value", clicked);
  updateClickValue();
}

function updateClickValue() {
  document.getElementById("click_value").innerText = clicked;
}

/*
    {
        //block code
        -> if (){}, function(){}, while, for loop

        Check the scope going outward
        You can't use the same variable name in the same scope
    }
*/

// let name = "Hellen";

// function sayMyName(){
//     let name = "Tehilla";
//     if (true) {
//         let name = "Kardashian";
//         console.log(name);
//     }
// }

/*
    1. Create a variable name in the Global scope
    2. Create a function called sayMyName
        console.log("the name and the line number")
        call the function
    3. Declare the variable name at the start the function and assign it a different name
        print the name and the line number
    4. Create an if statement, inside the function and pass a truthy condition of your choice
        Inside the block console.log name and the line number
    5. Inside the if block, at the very top, declare another variable called name and assign it a different value,
    6. Inside the function after the if block console.log name and the line number
    7. Try declaring the same variable twice in the same scope.
*/
let name = "Judas";
console.log(`name ${name} line ${87}`);//logs Judas ->It's in the global scope

function sayMyName() {
  let name = "Jesus";
  // let name = "Peter";//Syntax Error: name has already been declared
  console.log(`name ${name} line ${92}`); //logs Jesus->It's in the function scope
  if (true) {
    let name = "Dellilah";
    console.log(`name ${name} line ${95}`); //Logs Dellilah->It's in the if statement scope
  }
  console.log(`name ${name} line ${97}`); //logs Jesus->It's also in the function scope
}
sayMyName();
console.log(`name ${name} line ${100}`);//logs Judas ->It's in the global scope