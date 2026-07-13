/*
   Differences between an array and an object
   -> In an array keys are sequential
*/

/*
   Creating an object that behaves as an array
   1. Create an array with any name
      Inside the array have two digits
      0:<any digit>
      1:<any digit>

   2. Create an object
      In the object have keys
      0:<any digit>
      1:<any digit>
      Create the length key
      Have it as size of the object<key>
   3. console.table both to see that they are the same
*/

const ar = [26, 31];
const arObj = {
   0: 26,
   1: 31,
   push: function (newItem) {
      const key = this.length; //current key
      this[key] = newItem; //element added to that key
      this.length = this.length + 1; //increment the length
   },
   pop: function () {
      const key = this.length - 1;
      const removed = this[key];
      delete this[key];
      this.length = this.length - 1;
      console.log(`${removed} was deleted`);
      return removed;
   },
   length: 2,
};

console.table(ar);
console.table(arObj);

/*
   push method:
   ar.push(11)
   
   1st a new key is created at the end
   2. The element is added to that key
   3. The length of the array is incremented
*/
ar.push(11);

arObj[3] = 12;
arObj.length = arObj.length + 1;
arObj[arObj.length] = 13;
arObj.length = arObj.length + 1;

console.table(ar);
console.table(arObj);

/*
   Try to recreate the pop method 
*/
ar.pop();
arObj.pop();
console.table(ar);
console.table(arObj);

/*

   Data structures<Object, Array, Single linked list, Double linked list, Tree, Graph>
   class<using>
   class<blueprint to create object>
   ar["msg"]="Hello" -> making an array work as an object
   **Don't store non sequential keys inside an object

    *~You can create your own data structures~*
     
*/
// const node1 = {
//    location: "CBD",
// };
// const node2 = {
//    location: "Machakos",
// };
// const node3 = {
//    location: "Mombasa",
// };

// node1.nodeA = node2;
// node1.nobeB = node3;

// node2.nodeA = node1;
// node2.nobeB = node3;

// node3.nodeA = node1;
// node3.nobeB = node2;
