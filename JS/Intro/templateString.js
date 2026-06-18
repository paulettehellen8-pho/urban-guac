/*
    Template or string Interpolation is combining data and strings for output
*/

let firstName="Samuel"
let secondName="Jane"
let age =20
let address="Juja County"

//Normal string concatination
let userDetails=firstName+" "+secondName+" is "+
age+" years old."+" He stays at "+address
console.log(userDetails)
console.log("User details are ",typeof userDetails)

//Template string using back ticks
let userDetails2=`${firstName} ${secondName} is ${age} years old and he stays at ${address}`;
console.log(userDetails2)
console.log(`${typeof userDetails2} ${34+50}`)
console.log(`${firstName} ${secondName} is ${age} years old and he stays at ${address}`)

