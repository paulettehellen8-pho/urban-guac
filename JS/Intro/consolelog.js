/*
console.log  is for debugging and printing
             write in a way that is helpful to figure out the issue

*/

const salaryGross=50000;
console.log("Gross salary is ",salaryGross);

//Tax calculations
const payee=salaryGross*0.16;
console.log("For gross salary of ",salaryGross,"Payee is ",payee);

const nhif=2500;
console.log("Nhif deduction ",nhif);
const sha=2500;
console.log("SHA is ",sha);
const totalDeductions=payee+nhif+sha;
console.log("Total deduction are ",totalDeductions);
const netSalary=salaryGross-totalDeductions;
console.log("Your net salary is ",netSalary);

