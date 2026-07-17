/*
    inbuilt js api - handles http requests
    fetch (@param1,@param2)=> response on object with function then()
                           => response.catch
            @param1 -> url: <http address>
            @param2 -> configuration <headers, method,body>

*/

// const requestOptions = {
//    method: "GET",
//    redirect: "follow",
// };

// fetch("https://api.github.com/users", requestOptions)
//    .then((response) => response.json() /*response.text()*/)
//    .then((result) => {
//       console.log("type of result", typeof result);
//       console.log(result);
//    })
//    .catch((error) => console.error(error));

/*
   let users = []
   users = getUsers()//github 
      <uncertainties -> time /It can fail>
         -> Promise
*/

/*
   Code without a promise
   1. Create a variable
   2. console.log the value of the variable
   3. Create and call a function that modifies this var
   4. console.log the value of the variable
*/

let flow = "This is flow";
console.log("40:", flow);
//function testfunc() {
let result = fetch("https://api.github.com/users" /*requestOptions*/)
   .then((response) => response.json() /*response.text()*/)
   .then((result) => {
      // console.log("line 44");
      // flow = "Updated flow";
      // console.log("type of result", typeof result);
      // console.log(result);
   })
   .catch((error) => console.error(error));

// }
// testfunc();
// console.log("53:", flow);
console.log(result);
