/*
    Create our own callback function
    Shapes
        circle
        rectangle
        triangle

        1. for each shape create a function to calculate the areas and ensure it takes the required parameters
        Test the functions
*/

// Circle: area = π * r * r
// function areaCircle(r) {
//   const areaC = 3.142 * r * r;
//   console.log(`The area of the circle is ${areaC}`);
// }
// areaCircle(5);
// // const areaCircle =(r) => 3.142 * r * r;
// // const areaCircle =(r) => 3.142 * Math.pow(r,2);
// // const areaCircle =(r) => 3.142 * r **2;

// // Rectangle: area = length * width
// const areaRectangle = function (length, width) {
//   return `The area of the Rectangle is ${length * width}`;
// };
// console.log(areaRectangle(8, 3));
// // const areaRectangle = (base, height) => 0.5 * length * width;

// // Triangle: area = 0.5 * base * height
// const areaTriangle = (base, height) => {
//   const areaT = 0.5 * base * height;
//   console.log(`The area of the Triangle is ${areaT}`);
// };
// areaTriangle(10, 5);
// // const areaTriangle = (base, height) => 0.5 * base * height;

/*
    Create a super function called shape
        param1 -> function <correct shape> required
        param2 -> shape name <string>
        param3 -> s1 <required>
        param4 -> s2 <optional>
        param5 -> s3 <optional>
        1. inside your function shape.
            console each of the parameters and their types.
        2. for each of your function i.e for areaCircle,
            areaRectangle, and areaTriangle
            call the shape function and pass the required params.

        example for areaCircle
        - shape(areaCircle, "Circle", 10) -> for areaCircle. test 
        - shape(areaRectangle, "Rectangle", 10, 5) -> for areaRectangle. 
*/

const areaCircle = (r) => 3.142 * r ** 2;
const areaRectangle = (length, width) => length * width;
const areaTriangle = (base, height) => 0.5 * base * height;

function shape(shapeFunction, shapeName, s1, s2, s3) {
    if (typeof shapeFunction !== "function") {
        console.error("Ensure you pass a ")
    }
  console.log(`
        shapeFunction: ${shapeFunction} -> type: ${typeof shapeFunction}
        shapeName: ${shapeName} -> type: ${typeof shapeName}
        s1: ${s1} -> type: ${typeof s1}
        s2: ${s2} -> type: ${typeof s2}
        s3: ${s3} -> type: ${typeof s3}
        `);

  // Step 3: Create result variable and call the shape function
  const result = shapeFunction(s1, s2, s3);

  // Step 4: Log the shape name and the result
  console.log(`For the ${shapeName} shape Area is ${result}`);
  return result;
}

shape(areaCircle, "Circle", 15);
shape(areaRectangle, "Rectangle", 13, 6);
shape(areaTriangle, "Triangle", 12, 5);

shape( function (a, b, h) {
    return 0.5 * (a + b) * h;
}, "Trapezium", 10, 20, 30);


/*
    Promises, callback hell
    block of code => a, b -> payment <from safaricom>, c, d
        Promises -> skips b and continues to c and d
        callback hell -> waits for b before going to c, d
    
    //callbacks are used a lot during events
*/