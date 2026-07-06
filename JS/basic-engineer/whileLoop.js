/*
    Loops: allows you to run a block of code over and over again
    you should not loop to <infinity>
    Have an exit condition

    syntax:
    while(<condition>){
        //block of code
    }

    condition is truthy => condition
    exit if condition is falsey: <false>

    **You can replace a recursive funcction with a loop
    **It is difficult to replace a loop with a recursive function
            <call stack:1734 limit>
            function recursive(){

            }
*/


//Counter 0 -> 100
let n = 0;
let condition = true;
//Itereation -> one run through
while(condition) {
    console.log("n is", n);
    n = n + 1;
    if(n > 156) {
        condition= false;//automatically exit the loop
        //break -> exit
    }
}
//Iteration 1-> 0 + 1, n > 2 => false
//Iteration 2-> 1 + 1, n > 2 => false
//Iteration 3-> 2 + 1, n > 2 => true -> exit