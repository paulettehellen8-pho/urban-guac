//import data
const fs = require("fs");
const data = require("./data.json");

/*
   Node js<fs>
   for each applicant create a message to inform him/her that 
   he/she did not get the job<meet qualification>
   but be on the lookout for new opportunities from us in the future
*/

/*
   1. Ensure the js file can access the data
*/
console.log(data);

/*
   2. Use a for/ while loop to go through each data point
   - print the data

   3. for each data point create a message example
   'Dear <<sir/madam><based on the gender>>........'

   4. Console.log (the message)
*/

/*
   5. Create an empty array and put the user data including the messages
*/
const updatedData = [];

for (let i = 0; i < data.length; i++) {
   const applicant = data[i];
   console.log("Document is", applicant);

   let title = "";
   if (applicant.gender === "Male") {
      title = "Mr";
   } else {
      title = "Ms.";
   }
   const message = `Dear ${title} ${applicant.first_name} ${applicant.last_name}, Thank you for applying, 
   but we've decided to move forward with another candidate — please keep an eye out for future opportunities with us.`;

   console.log(message);

   // add this applicant's data + their message to the array
   updatedData.push({
      ...applicant,
      message: message,
   });

   console.log(updatedData);
}

/*
   Write this data in a file called output.json
   Hint do JSON.stringify -> js object to json notation
   Save this data to your file  ie output.json
*/

const update = JSON.stringify(updatedData);
fs.writeFile("output.json", updatedData, (error) => {});
//fs.writeFileSync("output.json", JSON.stringify(updatedData, null, 2));

// while (i < data.length) {
//   const applicant = data[i];
// for (const applicant of data) {
//    let title = "";
//    if (applicant.gender === "Male") {
//       title = "Mr";
//    } else {
//       title = "Ms.";
//    }
//    const message = `Dear ${title} ${applicant.first_name}, Thank you for applying,
//    but we've decided to move forward with another candidate — please keep an eye out for future opportunities with us.`;

//    console.log(message);
//    //i++;
// }
