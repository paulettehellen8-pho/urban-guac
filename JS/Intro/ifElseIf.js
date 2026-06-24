/*
    If and else if is a chain
    It will exit on the first truth
*/

// let age = Number(prompt("Enter your age"));
let age = Number(prompt("Enter your age"));

// console.log(`age is ${age} typeof ${typeof age}`);
alert(`You enterd ${age}`);

// if (age > 10) {
//   alert("You are a baby");
// } else if (age > 16) {
//   alert("You are a teen");
// } else if (age > 18) {
//   alert("You can legally drink and smoke");
//   // console.log("But should you?")
// } else if (age > 27) {
//   alert("Best age for marriage");
//   // console.log("Get married")
// } else if (age > 45) {
//   alert("Best age for retirement");
//   // console.log("Get a second wife")
// } else if (age > 50) {
//   // console.log("You are expired")
//   alert("You are an ancestor");
// }

// //Flip
// if (age > 50) {
//   // console.log("You are expired")
//   alert("You are an ancestor");
// } else if (age > 45) {
//   alert("Best age for retirement");
//   // console.log("Get a second wife")
// } else if (age > 27) {
//   alert("Best age for marriage");
//   // console.log("Get married")
// } else if (age > 18) {
//   alert("You can legally drink and smoke");
//   // console.log("But should you?")
// } else if (age > 16) {
//   alert("You are a teen");
// } else if (age > 10) {
//   alert("You are a baby");
// }

//Using < 
if (age < 10) {
  alert("You are a baby");
} else if (age < 16) {
  alert("You are a teen");
} else if (age < 18) {
  alert("You can legally drink and smoke");
  // console.log("But should you?")
} else if (age > 27) {
  alert("Best age for marriage");
  // console.log("Get married")
} else if (age > 45) {
  alert("Best age for retirement");
  // console.log("Get a second wife")
} else if (age > 50) {
  // console.log("You are expired")
  alert("You are an ancestor");
}
