/*
1)receive from the prompt the two values and display on the console the values.

2) display the results of the four operations ( + - * /) with the two numbers on the console.

3) write instructions on the index.html about how to use you calculator and the copyrights. Use a good CSS design to display it.
*/

let numOne = prompt("Enter the first number:");
console.log(`Number one is: ${numOne}`);
let numTwo = prompt("Enter the second number:");
console.log(`Number two is: ${numTwo}`);

if(isNaN(numOne) === true || isNaN(numTwo) === true){
    console.log(`Error: Check to be sure you're not using letters`);
    document.getElementById("add").innerHTML = `ERROR! Either ${numOne} or ${numTwo} is not an integer.`;
}else{

document.getElementById("result").innerHTML = `The results of ${numOne} and ${numTwo}:`

//document.getElementById("numberOne").innerHTML = `Number one is ${numOne}`;
//document.getElementById("numberTwo").innerHTML = `Number two is ${numTwo}`;

function addition(a, b) {
    sum = a + b;
    console.log(`${a} plus ${b} equals ${sum}`);
    document.getElementById("add").innerHTML = `${a} + ${b} = ${sum}`;
}

function subtraction(a, b) {
    dif = a - b;
    console.log(`${a} minus ${b} equals ${dif}`);
    document.getElementById("subtract").innerHTML = `${a} - ${b} = ${dif}`;
}

function multiplication(a, b) {
    prod = a * b;
    console.log(`${a} times ${b} equals ${prod}`);
    document.getElementById("multiply").innerHTML = `${a} x ${b} = ${prod}`;
}

function division(a, b) {
    if(numTwo === 0){
        console.log("Divide by zero error");
        document.getElementById("divide").innerHTML = `Divide by zero error`;
    }else{
        quot = a / b;
        console.log(`${a} divided by ${b} equals ${quot}`);
        document.getElementById("divide").innerHTML = `${a} / ${b} = ${quot}`;
    }   
}



addition(numOne,numTwo);
subtraction(numOne,numTwo);
multiplication(numOne,numTwo);
division(numOne,numTwo);

}



// create a function to take input and reassign variables
// then try to link it with HTML to not have to reload and 
// use prompts
