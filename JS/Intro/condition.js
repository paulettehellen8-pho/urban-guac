/*
    Conditions help you to control outcomes

    condition operators ->
    if, else if and else

    Syntax:
    if you want to use if 
    if(<condition goes here>)
    Golden Rule -> if the condition is truthy then it will execute the code in /{}/
                   if the condition is falsey then it will not execute the code in /{}/


*/

/*
    Scenario 1:
    Declare a variable > assign it a truthy value
    Create an if statement and put the variable inside the if statement condition
    Inside the if statement and console.log("Scenario 1 it run")
*/
const fact="I am rich";

if (fact){
    console.log("Scenario 1 it run");
}

/*
    Scenario 2:
    Declare a variable > assign it a truthy value
    Create an if statement and put the variable inside the if statement
    Inside the if statement and console.log("Scenario 2 it run")
*/

let accountBalance= 0;
if (accountBalance){
    console.log("Scenario 2 it run");
}

/*
    Scenario 3:
    Create an if statement
    Inside the if statement have true
    Inside the block ({}) console.log("Scenario 3 it run")
*/
if (true){
    console.log("Scenario 3 it run");
}

/*
    Scenario 4:
    Create an if statement
    Inside the if statement have false
    Inside the block ({}) console.log("Scenario 4 it run")
*/
if (false){
    console.log("Scenario 4 it run");
}

/*
    Scenario 5:
    Create an if statement
    Inside the if statement have 10>20
    Inside the block ({}) console.log("Scenario 5 it run")
*/
if (10>20){
    console.log("Scenario 5 it run");
}

/*
    Scenario 6:
    Create an if statement
    Inside the if statement have 20>10
    Inside the block ({}) console.log("Scenario 6 it run")
*/
if (20>10){
    console.log("Scenario 6 it run");
}