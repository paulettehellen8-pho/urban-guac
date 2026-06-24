/*
SHORT CIRCUIT OPERATORS -> syntatical sugar
Falsey means almost false, Truthy means almost true.
    If you know that sth is not falsey then its truthy
    List of falsey
    1. false
    2. 0
    3. -0
    4. null
    5. undefined
    6. '' ->empty string
    7. NaN -> not a number

    && and || also work with truthy and falsey

*/

let userName1 = "John Mwangi"; // truthy
let userName2 = ""; // falsey

let activeUserName = userName2 || userName1;
// activeUserName =>
console.log(activeUserName);



let bothUserNameOk = userName1 &&  userName2;
console.log(bothUserNameOk) // gives truthy and falsey value.

let y=true || false || true || false
//y=true
let z=123 ||  -34 || 50 || null
// z=truthy || falsey || truthy || falsey
console.log(z);
/* 
    || returns the first truthy value
    If there is no truthy value then it gives you the last falsey value
    
*/
let k="" || -0 || null || undefined
console.log("k is ", k);

/* 
    && gives the first falsey value that it comes accross
    if there is no falsey value then it returns the last truthy value
*/

let l=123 &&  0 && 50 && null
// z=truthy && falsey && truthy && falsey