/*
   DOM<Document Object Model>
      -Link HTML to JS
      -DOM only works in js for browsers.
   DOM properties and DOM methods
   -> Accessing elements
      1. getElementById
      2. getElementByClass
      3. querySelector<single element>
      4. querySelectorAll<array>
            id:#
            class:.
            tag: p
   --->Update the DOM
      1. inner html<>
      2. inner text<>
   --->Event Listeners
*/

/*
   DOM property
      getElementById
      getElementByClassName
*/
const div1 = document.getElementById("div1");
const div2 = document.querySelector("#div1");
console.log(div1);
console.log(div2);

const listItems = document.getElementsByClassName("list-items");
const queryListItems = document.querySelector(".list-items");
const queryListItemsAll = document.querySelectorAll(".list-items");
console.log(listItems);
listItem[0].innertext = "updated list by innertext";
listItem[2].textContent = "updated list by textContent";

/*
   querySelector<JACK OF ALL TRADES>
   - by tag <p>
   - by id
   - by class 
*/
