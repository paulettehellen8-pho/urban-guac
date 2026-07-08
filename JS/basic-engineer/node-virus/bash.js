const fs = require("fs");
/*
    Create an application with two loops and one for loop

    Function -> void function -> does not take any parameters
        -> Create a file -> named current date.txt
        -> Add 10k lines of code
        eg. <got you 1> <got you 2> <got you 3> -> use a for loop

    File system api -> nodejs
*/
function myFile() {
  const date = new Date().toISOString();
  const fileName = `${new Date().toISOString()}.txt`;

  for (let firstLine = 1; firstLine <= 10000; firstLine++) {
    const fileInfo = `The date today is ${date}\n`;
    fs.appendFile(fileName, fileInfo, (error) => {
      if (error) {
        console.log("creating file failed");
        console.log(error);
        return;
      }
      console.log("File created successfully");
    });
  }
}
myFile();

/*
    Step 2
    Create a new function<main>
    Calls the previous function
*/

function main() {
  for (let i = 0; i < 5; i++) {
    myFile();
  }
}
main();
