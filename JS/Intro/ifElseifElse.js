/*
    If can be used on its own
    If is independent -> One statement does not depend on another.
*/

let age =Number(prompt("Enter your age"));

// console.log(`age is ${age} typeof ${typeof age}`);
alert(`You enterd ${age}`)

// if (isNaN(age)){//You can also use Number or +age

    if (age>10){
        alert('You are a baby');
    }

    if (age>16){
        alert('You are a teen');
    }

    if (age>18){
        alert("You can legally drink and smoke");
        // console.log("But should you?")
    }

    if (age>27){
        alert("Best age for marriage")
        // console.log("Get married")
    }

    if (age>45){
        alert("Best age for retirement")
        // console.log("Get a second wife")
    }

    if (age>50){
        // console.log("You are expired")
        alert("You are an ancestor")
    }
// } else {
//     alert("Please enter a number")
// }