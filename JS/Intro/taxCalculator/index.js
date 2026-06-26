/*
    Prompt("")

    Check if its a number
    1. isNaN
    2. Number
    3. +<>
*/

//Stay here until the correct gross is entered
let grossMonthlySalary = null;
const personalRelief = 2400;
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

//Calculating NSSF
let employeeNssf = 0;

let tier1 = 9000 * 0.06;
let tier2 = (grossMonthlySalary - 9000) * 0.06;

if (grossMonthlySalary <= 9000) {
  employeeNssf = tier1;
} else if (grossMonthlySalary <= 108000) {
  employeeNssf = tier1 + tier2;
} else {
  employeeNssf = 6480;
}
let employerNssf = employeeNssf;
let totalNssf = employeeNssf + employerNssf;
alert(`NSSF is ${totalNssf}`);

/*
  Calculating SHIF
  SHIF is 2.75 of Gross
*/
const shif = grossMonthlySalary * (2.75 / 100);

// let shif = Math.max(grossMonthlySalary * 0.0275, 300);

/*

  Calculating Housing Levy

*/

const employeeHl = grossMonthlySalary * (1.5 / 100);
const employerHl = employeeHl;
const totalHl = employeeHl + employerHl;
// alert(`Housing Levy is ${totalHl}`);

let taxableIncome = grossMonthlySalary - (employeeNssf + shif + employeeHl);

//Calculate Paye
/*
  0-24k -> 24000*10 => 2400
  24 and 32000 -> 32333-24000 -> 
*/

let paye = 0;
let currentTier = null;
let payeTier = "";
if (taxableIncome <= 24000) {
  currentTier = 1;
  payeTier = "0 - 24,000";
} else if (taxableIncome <= 32333) {
  currentTier = 2;
  payeTier = "24,001 - 32,333";
} else if (taxableIncome <= 500000) {
  currentTier = 3;
  payeTier = "32,334 - 500,000";
} else if (taxableIncome <= 800000) {
  currentTier = 4;
  payeTier = "500,001 - 800,000";
} else {
  currentTier = 5;
  payeTier = "800,000 - Infinity";
}

if (currentTier === 1) {
  paye = taxableIncome * 0.1;
} else if (currentTier === 2) {
  let tier1 = 24000 * 0.1;
  let rem = taxableIncome - 24000;
  paye = tier1 + rem * 0.25;
} else if (currentTier === 3) {
  let tier1 = 24000 * 0.1;
  let tier2 = (32333 - 24000) * 0.25;
  let rem = taxableIncome - 32333;
  paye = tier1 + tier2 + rem * 0.3;
} else if (currentTier === 4) {
  let tier1 = 24000 * 0.1;
  let tier2 = (32333 - 24000) * 0.25;
  let tier3 = (500000 - 32333) * 0.3;
  let rem = taxableIncome - 500000;
  paye = tier1 + tier2 + tier3 + rem * 0.325;
} else if (currentTier === 5) {
  let tier1 = 24000 * 0.1;
  let tier2 = (32333 - 24000) * 0.25;
  let tier3 = (500000 - 32333) * 0.3;
  let tier4 = (800000 - 500000) * 0.325;
  let rem = taxableIncome - 800000;
  paye = tier1 + tier2 + tier3 + tier4 + rem * 0.35;
}

const final_paye = Math.max(0, paye - 2400);
console.log("Taxable Income is ", taxableIncome);
console.log("Paye is ", paye);
alert(`Paye for tier level ${payeTier} is ${paye}`);

//TEDDS WAY
// if ((grossMonthlySalary = 9000)) {
//   employeeNssf = 9000 * 0.06;
//   if (grossMonthlySalary > 108000) {
//     employeeNssf = 6480;
//   } else {
//     employeeNssf= (grossMonthlySalary - 9000) * 0.06;
//   }
// }
// let employerNssf = employeeNssf;
// let totalNssf = employeeNssf + employerNssf;
// alert(`NSSF is ${totalNssf}`);

/*
  TEDDS PAYE SOLUTION


    const bracket1 = 24000;
    const bracket2 = 32333;
    const bracket3 = 500000;
    const bracket4 = 800000;

    const band1 = bracket1 * 0.1;
    const band2 = (bracket2 - bracket1) * 0.25;
    const band3 = (bracket3 - bracket2) * 0.3;
    const band4 = (bracket4 - bracket3) * 0.325;

    const personal_relief = 2400;

    let paye = 0;
    let currentTier = null;

    if (taxableIncome <= 24000) {
      paye = taxableIncome * 0.1;
      currentTier = "Paye 0 - 24,000";
    } else if (taxableIncome <= 32333) {
      let diff = taxableIncome - 24000;
      let tax = diff * 0.25;
      paye = tax + band1;
      currentTier = "Paye 24,000 - 32333 KES";
    } else if (taxableIncome <= 500000) {
      let diff = taxableIncome - 32333;
      let tax = diff * 0.3;
      paye = tax + band1 + band2;
      currentTier = "Paye 32333 - 500000 KES";
    } else if (taxableIncome <= 800000) {
      let diff = taxableIncome - 500000;
      let tax = diff * 0.325;
      paye = tax + band1 + band2 + band3;
      currentTier = "Paye 500000 - 800000 KES";
    } else {
      let diff = taxableIncome - 800000;
      let tax = diff * 0.35;
      paye = tax + band1 + band2 + band3 + band4;
      currentTier = "Paye 800000 to Infinity";
    }

    const final_paye = Math.max(0, paye - personal_relief);
    // alert(`Taxable Income ${taxableIncome}
    //       Paye ${paye}
    //       Personal Relief ${personal_relief}
    //       Final Paye ${final_paye}
    //       Tier ${currentTier}
    // `);
*/

//TEACHERS WAY
// let employeeNssf = 0;
// let nssfTier = "null";

// if ((grossMonthlySalary <= 9000)) {
//   employeeNssf = grossMonthlySalary * 0.06
//   nssftier = " nssf tier 1 below 9,000ksh";

// } else if (grossMonthlySalary <= 108000) {
//   let rem = grossMonthlySalary - 9000;
//   let tier1 = 9000 * 0.06;
//   let tier2 = rem * 0.06;
//   employeeNssf = tier1 + tier2;
//   nssftier = " nssf tier 2 between 9,000ksh - 108,000";

// } else {
//   employeeNssf = 6480;
//   nssftier = " nssf tier above 108,000ksh";
// }
// console.log("nssf contribution ", employeeNssf);
// alert(`nssf if ${employeeNssf} and tier level is ${nssfTier}`);

const totalDeductions = final_paye + totalNssf + shif + totalHl;
const netSalary = grossMonthlySalary - totalDeductions;
alert(`
      Gross salary is ${grossMonthlySalary}
      NSSF ${totalNssf} 
      Taxable Income ${taxableIncome}
      Paye ${final_paye} tier ${currentTier}
      SHIF ${shif}
      Housing Levy ${totalHl}
      Total Deductions ${totalDeductions}
      Take Away ${netSalary}
`);
