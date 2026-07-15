/*
   How to work with forms
   "onsubmit"=><default> **You have to prevent the default
   "onclick"
*/

document.getElementById("form1").addEventListener("submit", submitForm);

document.getElementById("form1input1").addEventListener("input", (e) => {
   console.log(e.target.value);
});

function submitForm(e) {
   e.preventDefault(); // stop the form from making an auto submission when the button is pressed

   const inputList = document.querySelector("#form").querySelectorAll("input");

   const input1 = inputList[0];
   const input2 = inputList[1];
   console.log("input 1", input1.value);
   console.log("input 2", input2.value);
   console.log("f1 input1", document.getElementById("form1input1"));
   console.log("f1 input2", document.getElementById("form1input2"));
   input1.value = "Simi";
}

//closes the window
//temporarily prevent user from exiting -> gives an alert
window.addEventListener("beforeunload", (e) => {
   console.log("Page is closed");
   e.preventDefault();
   e.returnValue = "";
});

/*
   Create a html form -> 2 inputs and submit button
   Attach the submit event listener
   Prevent default behavior
   Print out the values of the form inputs
*/
document.getElementById("Insta").addEventListener("submit", submitInstaForm);
document.getElementById("Insta").addEventListener("input", (e) => {
   console.log(e.target.value);
});

function submitInstaForm(e) {
   e.preventDefault();
   const instaInput = document
      .querySelector("#Insta")
      .querySelectorAll("input");
   const i1 = instaInput[0];
   const i2 = instaInput[1];
   const i3 = instaInput[2];
   console.log("i1", i1.value);
   console.log("i2", i2.value);
   console.log("i3", i3.value);
}

//When you have two ids -> one on div and another on button()
//Event capturing => e.stopPropagation();
//Event bubbling  => Add true to the parent event listener/ e.target.c
