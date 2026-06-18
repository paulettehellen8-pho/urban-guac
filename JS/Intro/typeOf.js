/*
    typeof tells you the variable type
*/

let numb1=836
console.log("numb1 ",numb1 ,"Its type is ",typeof numb1)
let strNumb="854"
console.log("strNumb ",strNumb ,"Its type is ",typeof strNumb)
let myName="Paulette"
console.log("My name is ",myName ,"Its type is ",typeof myName)
let isMarried=true
console.log("isMarried ", isMarried ,"Its type is ",typeof isMarried)
let nullVal=null //type of <null> gives an object and is a bug
console.log("nullVal ",nullVal ,"Its type is ",typeof nullVal)
let unValue;
console.log("unValue ",unValue ,"Its type is ",typeof unValue)


//Copy of console log
const bonus="5000"
const salary=50000;
const salaryGross=bonus+salary
console.log("Gross salary is ",salaryGross , "Its type ",salaryGross);

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

