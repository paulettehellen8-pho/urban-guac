/*
    Prompt("")

    Check if its a number
    1. isNaN
    2. Number
    3. +<>
*/

//Stay here until the correct gross is entered
let grossMonthlySalary = null;
while (true) {
  // let gross = Number(prompt("Enter you gross salary"));
  // if (gross && gross > 0) {
  //   grossMonthlySalary = gross;
  //   break;

  // }
  let gross = Number(prompt("Enter you gross salary"));
  if (isNaN(gross) === false) {
    gross = Number(gross);
    if (gross > 0) {
      grossMonthlySalary = gross;
      break;
    }
  }
  //   let gross = prompt("Enter you gross salary");
  //   if (!isNaN(gross)) {
  //     gross = Number(gross);
  //     if (gross > 0) {
  //       grossMonthlySalary = gross;
  //       break;
  //     }
  //   }
  alert(`Invalid amount entered.
    Ensure you enter a number greater than 0 `);
}
console.log(
  `Gross salary is, ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`,
);

//Calculate Paye

let paye = null;
let tier = null;
if (grossMonthlySalary < 24000) {
  paye = gross * 0.1; // (10/100)
  tier = "0-24000";
}
if (grossMonthlySalary > 24001 && grossMonthlySalary <= 32333) {
  paye = grossMonthlySalary * 0.25;
  tier = "240001-32333";
}
if (grossMonthlySalary > 32334 && grossMonthlySalary <= 50000) {
  paye = grossMonthlySalary * 0.3;
  tier = "32334-50000";
}
if (grossMonthlySalary > 50001 && grossMonthlySalary <= 80000) {
  paye = grossMonthlySalary * 0.325;
  tier = "50000-80000";
}
if (grossMonthlySalary > 800000) {
  paye = grossMonthlySalary * 0.35;
  tier = "80000-infinity";
}

alert(`Paye for tier level ${tier} is ${paye}`);
