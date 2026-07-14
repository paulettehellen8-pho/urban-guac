/*
   DOM Access using
   1.querySelector
   2.documentGet<...> 

   1.getElementById:
      -create a variable assign to the dom element with id<div1>
      -console.Log this element :view in your browser
      -in browser console you should be able hover over the element

   2.getElementByClass
      -create a variable assign to the dom element with with class<list-item>
      -console.Log this element :view in your browser
      -in browser console you should be able hover over the element>

   3.querySelector:
      1.for the id: hint use # for id
         -create a variable assign to the dom element with id<div1>
         -console.Log this element :view in your browser
         -in browser console you should be able hover over the element
      2.<use querySelector>for the class: hint use <.>
         -create a variable assign to the dom element with class<list-item>
         -console.Log this element :view in your browser
         -in browser console you should be able hover over the element
         -Note you only get the first list item.
      3.<use querySelectorAll>for the class: hint use <.>
         -create a variable assign to the dom element with class<list-item>
         -console.Log this element :view in your browser
         -in browser console you should be able hover over the element
         -Note you get the array.
         -use a for Loop or while to go through the array elements
               and print each element.


*/
const d1 = document.getElementById("div1");
console.log(d1);

const c1 = document.getElementsByClassName("list-item");
console.log(c1);

const q1 = document.querySelector("#div1");
console.log(q1);

const q2 = document.querySelector(".list-item");
console.log(q2);

const qAll = document.querySelectorAll(".list-item");
console.log(qAll);

for (let q = 0; q < qAll.length; q++) {
   console.log(qAll[q]);
}

/*
   Update DOM elements
   -innerHtml<replaces the HTML>
   -innerText<replaces the innertext>

   Create 3 buttons
   1. Original content
   2. Updating Content
   3. Update the inner text
*/

const otherFruits = ["Kiwi", "Banana", "Mango"];
const originalDiv = document.getElementById("div2").innerHTML;

console.log(originalDiv);

function original() {
   console.log("Original clicked");
   //reset the div to its original value
   document.getElementById("div2").innerHTML = originalDiv;
}

function replace() {
   console.log("Replace clicked");
   //replace some html
   const newHTML = `
    
         <h3>Chore List</h3>
         <ul>
            <li class="list">Clean Bathroom</li>
            <li class="list">Clean Kitchen</li>
            <li class="list">Fetch water</li>
         </ul>
      
   `;
   document.querySelector("#div2").innerHTML = newHTML;
}

function updateFruits() {
   console.log("Update Fruits clicked");
   //innerText and loop<fruits>
   //querySelectorAll. Only Replace the fruits using innerText
   document.querySelector("#div2 h3").textContent = "Fruits"; //If I don't want to go back to original then replace
   const fruitList = document.querySelectorAll("#div2 .list"); //document.querySelector("#div1").querySelectorAll(".fruits");
   for (let f = 0; f < fruitList.length; f++) {
      fruitList[f].innerText = otherFruits[f];
   }
}
