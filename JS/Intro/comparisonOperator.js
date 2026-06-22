/*
    Equality ==
    Strict Equality ===
    Inequality !=
    Strict Inequality !==
*/

let numb1="23"
let numb2=23
//string===number => false - a string cannot be equal to a number
//numb==numb2 ->type conversion to check equality
let strictEqual=numb1===numb2//Boolean because the operators only return true or false
console.log(`numb1=${numb1}===numb2=${numb2} Ans ${strictEqual}
    and its type is ${typeof strictEqual}`)
let nonStrictEquality=numb1==numb2
console.log(`numb1=${numb1}==numb2=${numb2} Ans ${nonStrictEquality}
    and its type is ${typeof nonStrictEquality}`)


let num1="Hi"
let num2=23
let strictEqualy=num1===num2//Boolean because the operators only return true or false
console.log(`num1=${num1}===num2=${num2} Ans ${strictEqualy}
    and its type is ${typeof strictEqualy}`)
let nonnStrictEquality=num1==num2
console.log(`num1=${num1}==num2=${num2} Ans ${nonnStrictEquality}
    and its type is ${typeof nonnStrictEquality}`)


//
let val1="30"
let val2=30
let strictInequality=val1!==val2
console.log(`val1=${val1}!==val2=${val2} Ans ${strictInequality}
    its type is ${typeof strictInequality}`)
let Inequality=val1!=val2
console.log(`val1=${val1}!=val2=${val2} Ans ${Inequality}
    its type is ${typeof Inequality}`)


let value1="Excellent"
let value2="Very Good"
let strictInequalityy=value1!==value2
console.log(`value1=${value1}!==value2=${value2} Ans ${strictInequalityy}
    its type is ${typeof strictInequalityy}`)
let Inequalityy=value1!=value2
console.log(`value1=${value1}!=value2=${value2} Ans ${Inequalityy}
    its type is ${typeof Inequalityy}`)



/*
    greater than > || greater than or equal to >=
    less than < || less than or 

*/

// let numb3=20;
// let numb4=10;
let numb3=20.2;
let numb4=20.1;
console.log(`numb3= ${numb3} and numb4= ${numb4}`)
console.log(`numb3>numb4 ${numb3>numb4}`);

// let str1="a";
// let str2="b";
let str1="a";
let str2="A";
console.log(`str1= ${str1} and str2= ${str2}`)
console.log(`str1>str2 ${str1>str2}`);

console.log(`numb3>=numb4 ${numb3>=numb4}`);
console.log(`str1>=str2 ${str1>=str2}`);

console.log(`numb4<numb3 ${numb4<numb3}`);
console.log(`str2<str1 ${str2<str1}`);

console.log(`numb4<=numb3 ${numb4<=numb3}`);
console.log(`str2<=str1 ${str2<=str1}`);
