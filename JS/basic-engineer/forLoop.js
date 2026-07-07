/*
    for loop -> mostly meant for numbers
    It is a combination of using a while loop for numbers
    1.Starting point, 2.Condition, 3.After each iteration 4.Endpoint <in one statement>
    for(startpoint;condition;each-iteration)
    **You can write any for loop as a while loop
    **You can't write any while loop as a for loop
*/

let k = 0; //starting point

//condition:k<20
while (k < 20) {
  console.log("k", k);
  k = k + 1; //after each iteration
}

for (let k = 0; k < 20; k = k + 1) {
  console.log("k", k);
}

//Math Tables
function createMathTables() {
  let n1 = Number(prompt("Enter the first number"));
  while (isNaN(n1) || n1 <= 1) {
    n1 = Number(prompt("Invalid. Kindly enter a number greater than 1"));
  }
  let n2 = Number(prompt("Enter the second number"));
  while (isNaN(n2) || n2 <= 1) {
    n2 = Number(prompt("Invalid. Kindly enter a number greater than 1"));
  }
  tables(n1, n2);
}
createMathTables();

function tables(n1, n2) {
  if (!n1 || n1 < 1 || !n2 || n2 < 1) {
    console.error("Ensure Number 1 on number 2 are numbers greater than 0");
    return;
  }
  for (let multiple = n1; multiple >= 1; multiple--) {
    for (let multipliedBy = n2; multipliedBy >= 1; multipliedBy--) {
      console.log(`${multiple} * ${multipliedBy} = ${multiple * multipliedBy}`);
    }
  }
}
