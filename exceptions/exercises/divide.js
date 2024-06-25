// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
const input = require("readline-sync");

let numerator = Number(input.question("Enter a number for a numerator "));
let denominator = Number(input.question("Enter a number for a denominator "));

console.log(divide(numerator, denominator));

function divide(numerator, denominator) {
  if (denominator === 0) {
    throw Error("You cannot divide by zero");
  }
  return numerator / denominator;
}
