/*
    Functions allow you to write reusable bits of code
    To use Dry(Do not repeat yourself) by using code block

    /{/code block/}/
    syntax:
    fuunction <name: variable name convection> (<parameters>){
        /code block/
    }


    //Big rule
    ->A function executes only when called

    //Create a sipmle function that alerts you on current date and time
*/

function timeAlert() {
  const date = new Date();
  alert(
    `time stamp: ${date.toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })}`,
  );
}
// call a function using the function name then ();
// timeAlert();

/*
    Are of a triangle
    
*/
function areaOfTriangle(base, height) {
  //Type check -> using typeof to check if sth is a string, height:boolean
  //Type script -> function areaOfTriangle(base:number, height) {
  // if (typeof base !== "number") {
  //     console.error(`when using are of triangle ensure base is a number`);
  //     return; //exit
  // }

  // if (typeof height !== "number") {
  //     console.error(`when using are of triangle ensure height is a number`);
  //     return; //exit
  // }
  console.log(`Base is ${base} its type is ${typeof base}`);
  console.log(`Height is ${height} its type is ${typeof height}`);

  const area = 0.5 * base * height;
  console.log(
    `For triangle with base ${base} and height ${height} area is ${area}`,
  );
}

/*
    Scenario 1
        call the areaOfTriangle function dont pass any arguments.<>
*/
areaOfTriangle(); //base and height are undefined and the area is NaN

/*

    Scenario 2:
        call the function pass base of 20 and no width
        //Order matters
*/
areaOfTriangle(20); // base is 20, height is undefined and area is NaN

/*
    Scenario 3:
        call the function pass base of 20 and height of 30
*/
areaOfTriangle(20, 30); //base is 20, height is 30 and area is 300

/*
    Scenario 4:
        create a variable base1=50 and variable height1=60
        
*/
let base1 = 50;
let height1 = 60;
areaOfTriangle(base1, height1); //base is 50, height is 60 and are is 1500

/*
    Scenario 5:
        create a variable base2="hello" and variable height=60
*/
let base2 = "hello";
let height2 = 60;
areaOfTriangle(base2, height2); //base is hello type string, height is 60 and anrea is NaN
