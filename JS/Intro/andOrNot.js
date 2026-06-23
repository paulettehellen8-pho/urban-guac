/*
    And -> &&
    Truth table -> All possible combinations
    All statements have to be true for it to be true
*/

let val1=true;
let val2=false;
let result1=val1&&val2
console.log(`val1=${val1} val2=${val2} val1&&val2=${val1&&val2}`);

// let mercy_age=20;
let mercy_age=16;
let mercy_balance=50000;
// let mercy_balance=19999;
let is_greater_than_18=mercy_age>18;
console.log(`Is Mercy's age greater than 18 ${is_greater_than_18}`);
let has_more_than_20k=mercy_balance>20000;
console.log(`Mercy has more than 20K ${has_more_than_20k}`);
console.log(`Mercy's age is greater than 18
    and has more than 20K in her account
    ${is_greater_than_18 && has_more_than_20k}`);

let simplified=mercy_age>18&&mercy_balance>20000;
console.log(`simplified ${simplified}`);
console.log(`further simplificatlion is ${mercy_age>18&&mercy_balance>20000}`);


/*
    true || false || false || true = true
    false || false = false
    Atleast one statement has to be true for the whole statement to be true
*/

// let accountBalance = 50000;
// let is_handsome = true;
// console.log(`${accountBalance >=1000000 || is_handsome}`);

console.log(`Mercy's age is greater than 18
    or has more than 20K in her account
    ${is_greater_than_18 || has_more_than_20k}`);

let simplifiedd=mercy_age>18 || mercy_balance>20000;
console.log(`simplifiedd ${simplifiedd}`);
console.log(`further simplificatlion is ${mercy_age>18 || mercy_balance>20000}`);


/*
    Not flips the result !true = false,  !false = true
    In a statement with && and ||, && is evaluated first then ||
        false || true || true && false && false.
    If you want || to be evaluated first you put it in ()
        (false || true || true) && false && false
*/
let is_handsome = !true
console.log(is_handsome);

console.log(`This is not true = ${!true}`);
console.log(`This is not false = ${!false}`);