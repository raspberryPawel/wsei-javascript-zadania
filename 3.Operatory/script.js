// #### Zadanie 1

const firstBoolean = true;
const secondBoolean = false;

console.log(firstBoolean == secondBoolean);

// #### Zadanie 2

const firstNumber = 23;
const secondNumber = 44;
let moduloResult = 0;

moduloResult = firstNumber % secondNumber;
console.log("moduloResult:", moduloResult);

// #### Zadanie 3

const firstString = "lorem";
const secondString = "ipsum";
let stringsResult = "";
stringsResult = firstString + secondString;
console.log("stringsResult: ", stringsResult);

// #### Zadanie 4

const someNumber = 425;
const someString = "425";

console.log(someNumber == someString); //true bo nie porównujemy typów
console.log(someNumber === someString); //false bo porównujemy typy

// #### Zadanie 5

let counter = 30;

console.log(counter);

counter++;
console.log(counter);

counter--;
console.log(counter);

// #### Zadanie 6

const variableOne = 30;
const variableTwo = 20;
let result = null;

result = variableOne > variableTwo;
console.log(result);
