/*
   Events -> If sth happens I want to be notified
      Callbacks -> is a DOM element
   Sensor -> 

   Event => Click, Hover, type

   **Before attaching an event you must be able to access the element
   querySelector, getElementById

   
*/

function clickAlert(e) {
   console.log(e);
   alert("Hey the Event Checker Button was clicked");
}
document
   .querySelector("#btn-event-checker")
   .addEventListener("click", clickAlert);

function mouseOverAlert(event) {
   console.log(event);
   console.log("Mouse over", new Date());
}
document
   .querySelector("#mouse-over")
   .addEventListener("mouseover", mouseOverAlert);

/*
   Attach an event to the window<active tab>
   for on mouseMove and print out the coordinates of the mouse
*/
// Print te x and y on the screen
// function printXY(e) {
//    const coordinates = `
//  <h1>X direction <span id="x">0</span>
//  Y direction <span id="y">0</span></h1>
//  `;
//    document.querySelector("#x").innerText = e.clientX;
//    document.querySelector("#y").innerText = e.clientY;
// }

window.addEventListener("mousemove", (e) => {
   console.log("x direction", e.clientX);
   console.log("y direction", e.clientY);
   // printXY(e);

   document.getElementById("x").innerText = e.clientX;
   document.getElementById("y").innerText = e.clientY;
});
