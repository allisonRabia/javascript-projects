/*let message = "Hello, World!";

function printMessage() {
   console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();

//Ch 10 functions are at your beck and Call
//ex. 1
//let num = Number("42");
console.log("The variable num is of type", typeof num, "and has value", num);
//output The variable num is of type number and has value 42

//ex 2
//Many array and string methods also return values. This program uses the string method split to break a string into separate components.

let commaSeparatedValues = "Smith,Jane,100 Cherry Blossom Lane";
let values = commaSeparatedValues.split(',');
console.log(values);
// Console Output

// [ 'Smith', 'Jane', '100 Cherry Blossom Lane' ]
//generic function
//functionName(argument1, argument2,...,argumentN);

//example 3
// A return value may be stored in a variable.

let stringVal = String(42);
//It may also be used in other ways. For example, here we use the return value as the input argument to console.log without storing it.

console.log(String(42));
// Console Output

// 42

//example 5 
let returnVal = console.log("LaunchCode");
console.log(returnVal);
//output 
// LaunchCode
// undefined


function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);
//ouput 10
*/
//quiz question 4
// function repeater(str) {
//    let repeated = str + str;
//    //console.log(repeated);
// }

// console.log(repeater('Bob')); 
// //output BobBob
//returns undefined


//quiz question 5
/*
let num = 42;

function isEven (num) {
   return num % 2 === 0;
}

console.log(isEven(43)); */
 //returns false from boolean statement becaseu 43 is odd so 43 mod 2 is not 0

//function input and ouput
//return someVal;

function sumToN(n) {
   let sum = 0;
   for (let i = 0; i <= n; i++) {
       sum += i;
       console.log(sum);
   }
   return sum;
}

console.log(sumToN(3));

//This is an empty function
function doNothing() {}

//A function without a return statement returns the special value undefined.
function doNothing() {}

let returnVal = doNothing();
console.log(returnVal);
//output undefined


//Ex. This console.log statement in this function never executes, since the function returns before it is reached.
function pastThePointOfReturn() {
   return "I'm done!";
   console.log("This will not be printed");
}

console.log(pastThePointOfReturn());
//output I'm done!

//This function prints out the integers 1…n using an infinite while loop, which nonetheless terminates when the return statement is executed.

function countToN(n) {
    let count = 1;
    while (true) {
        if (count > n) {
            return;
        }
        console.log(count);
        count++;
    }
}
countToN(5);
//output prints 1-5 on separate lines.

//A function that returns a boolean value is known as a boolean function. Perhaps the simplest such function is one that tests an integer to determine if it is even.
function isEven(n) {
   if (n % 2 === 0) {
       return true;
   } else {
       return false;
   }
}

console.log(isEven(4));
console.log(isEven(7));

//output true false

//Since return terminates the function, we can leave out the else clause and have the same effect. This is because if n is even, the return statement in the if block will execute and the function will end. If n is odd, the if block will be skipped and the second return statement will execute.
function isEven(n) {
   if (n % 2 === 0) {
       return true;
   }
   return false;
}
console.log(isEven(4));
console.log(isEven(7));
//This updated version works exactly the same as our initial function.

//function returns true when n % 2 === 0 returns true, and it returns false when n % 2 === 0 returns false. In other words, the return value is exactly the same as the value of n % 2 === 0. This means that we can simplify the function even further by returning the value of this expression.
function isEven(n) {
   return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));


//arguments and parameters
//ex. 1
//The function hello takes a single value, which we expect to be a person’s name, and returns a message that greets that person.
function hello(name) {
   return `Hello, ${name}!`;
}

console.log(hello("Lamar"));

//OP Hello, Lamar!
//name is parameter that acts like variable exist only in function
//is an argument. It is a specific value that is used during the function call.

//arguments are optional
function hello(name) {
   return `Hello, ${name}!`;
}

console.log(hello());
//OP Hello, undefined!
//Arguments are optional when calling a function. When a function is called without specifying a full set of arguments, any parameters that are left without values will have the value undefined.

//default value if function wont work wtihout parameter
function hello(name = "World") {
   return `Hello, ${name}!`;
}

console.log(hello());
console.log(hello("Lamar"));
//op Hello, World!
//Hello, Lamar!

// returns "Launch"
"LaunchCode".slice(0, 6);

// returns "Code"
"LaunchCode".slice(6);

// also returns "Code"
"LaunchCode".slice(6, 10);

//This example calls hello with two arguments, even though it is defined with only one parameter.


function hello(name = "World") {
    return `Hello, ${name}!`;
}

console.log(hello("Jim", "McKelvey"));
//Console Output

//Hello, Jim!


//check understanding 1
function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);
//10

//check 2 
function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

console.log(repeater('Bob'));
//returns undefined since no return statement
//op Bob


//function writing process
function makeSandwich(breadType, fillingType, condiments) {

   // TODO: make a sandwich with the given ingredients

}

//parameters and variables function scope

// function removeHyphens(str) {
//    let strWithoutHyphens = '' //when variable declared inside function only can be used in there

//    for (let i = 0; i < str.length; i++) {
//    if (str[i] !== '-') {
//        strWithoutHyphens += str[i];
//    }
//    }

//    return strWithoutHyphens;
// }

// let launchCodePhone = "314-254-0107";
// console.log(removeHyphens(launchCodePhone));
// console.log(strWithoutHyphens);

//op 
// 3142540107
// ReferenceError: strWithoutHyphens is not defined
// (rest of error message omitted)

//variable shadowing
//In some cases, a variable defined outside of a function may be visible within the function.

// let message = "Hello, World!";

// function printMessage() {
//     console.log(message);
// }

// printMessage();
// Console Output

// Hello, World!   


// let message = "Hello, World!";

// function printMessage() {
//     console.log(message);
// }

// printMessage();
// message = "Goodbye";
// printMessage();
//output- Hello World!, Goodbye

//An interesting thing happens when a function parameter has the same name as a variable that is in-scope.

 //Example
//  let message = "Hello, World!";
 
//  function printMessage(message) {
//      console.log(message);
//  }
 
//  printMessage("Goodbye");
//  Console Output
 
//  Goodbye

//check umderstanding

let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));
//output false

//naming function: cmael case, verb/noun combo, descriptive names, is/has for boolean

const astronautCount = 7;
const fuelTempCelsius = -225;
let isReady = false;

const astronautCount = 7;
const fuelTempCelsius = -225;
let isReady = false;  --boolean

convertCelsiusToFahrenheit
isValidLaunchCode
updateMissionControl


//Which is the BEST name for the following function?

function myFunc(radius) {
   let area = Math.PI * radius**2;
   return area;
}
//calculateAreaOfCircle
