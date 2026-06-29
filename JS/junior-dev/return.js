/*
    Return is used to:
        Exit code
        Return any required date

*/

function sayMyName() {

    //   return 26;
    //   return true;
    let y=Math.min();//function inside a function
  let first_name = "Paulette"; //statement 1
  console.log(`First Name ${first_name}`); //statement 2
  //   return;
  
  let second_name = "Obimbo"; //statement 3
  console.log(`Second Name ${second_name}`); //statement 4
  //   return;
  //   return `I am Kenyan`
  let full_name = `${first_name} ${second_name}`; //statement 5
  //   return;
  console.log(`Full Name is  ${full_name}`); //statement 6
}

let sayMyNameValue = sayMyName();
// console.log(`Function returned ${sayMyName}`);
console.log(`Function returned ${sayMyNameValue} its type ${typeof sayMyNameValue}`);

/*
    Scenario 1:
    Leave it as is and look at the results
*/
//It logs first name last name and function returned undefined

/*
    Scenario 2:
    After the second statement inside the function put a return
*/
//returns first name and function returned undefined

/*
    Scenario 3:
    After the 4th statement inside the function put a return
*/
//returns first name and second name and function returned undefined

/*
    Scenario 4:
    Put a return statement anywhere inside your function and return a string of your choice
*/
//return statement after the 4th statement logs first name, second name and function returned the string I am Kenyan

/*
    Scenario 5:
    Put a return statement anywhere inside your function and return a number of your choice
*/
//function returned 26

/*
    Scenario 5:
    Put a return statement anywhere inside your function and return a boolean of your choice
*/
//function returned true
