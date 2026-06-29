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
  alert(`time stamp: ${date.toISOString()}`);
}
// call a function using the function name then ();
timeAlert();
