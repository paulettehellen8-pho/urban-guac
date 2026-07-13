/*
   Arrays are just specialized objects
   The difference between an array and an object is that the keys are sequential<0 to n> based on values

   When accessing array elements you use only bracket notation
   => because the keys are numbers -> they are not provided
   <[value1, value2, xxxx]>
*/

let array1 = [
   "BMW i3",
   "2026, Neue Klasse",
   200,
   "Red",
   {
      cylinder: "none",
      type: "Fully electric",
      motors: "Dual electric motors",
      tech: "Sixth-generation",
      battery: 108.7,
   },
   {
      name: "Bayerische Motoren Werke",
      aka: "Bavarian Motor Works",
      country: "Germany",
   },

   "It's only a preview of the next-generation, eighth-gen BMW 3 Series, just in fully electric form first.",
   false,
   function () {
      alert(
         `This ${car.name} is a ${this.model} model and \n Fun fact: ${car["fun fact"]}`,
      );
   },
   [10, 22, 26, 54],
];

/*
   Access array elements using the index
*/

console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);
console.log(array1[6]);
console.log(array1[7]);
console.log(array1[8]);

console.table(array1);
console.log(array1.length); //size of the array
array1[7](); //call the alert function

console.log(array1[4][4]);
console.log(array1[5][2]);
console.log(array1[4][1]);
console.log(array1[5][1]);

/*
   You can use loops to access all the elements in an arrays
   arrays start at [0]
*/
for (let i = 0; i < array1.length; i++) {
   console.log("i is", i);
   console.log(array1[i]);
}

/*
   Aray methods <in-built functions>
   -push -> add element
   -pop -> remove the last element
*/

