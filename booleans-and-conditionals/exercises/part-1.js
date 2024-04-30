// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerSatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:
// I predict "engines are off"
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}


/*
//practice
console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('LaunchCode'));
//output T,T,F,T,F,T
//
console.log(7 == "7");
console.log(0 == false);
console.log(0 == '');
//output t,t,t
console.log('0' == 0);
console.log(0 == '');
console.log('0' == '');// output t,t,f
//
console.log(7 === "7");
console.log(0 === false);
console.log(0 === '');//F,F,F
//
console.log(4 == "4"); // returns T
//
console.log(5*3 > 10 && 4 + 6 === 11) //returns F

//
console.log(4 < 3 || 2 < 3) //returns T

// 
console.log(3 == 4);
console.log(3 + 4 == 7); //outputs true true

//
let a = 7;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode"); //output Launch
}*/

/* //
let num = 6;

if (num % 2 === 0) {
   console.log("EVEN");
}

if (num > 0) {
   console.log("POSITIVE");
}*/
// 
/*
let num = 7;

if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd"); //runs but not prints
    }
}
*/
//
/*
let day = Wednesday;
console.log(day; //error: SyntaxError: missing ) after argument list

// 
let name = "Julie";
console.log("Hello", name);
*/
/*
//
const input = require('readline-sync');

let degreesC = input.question('Temp in degrees C: ');
degreesC = Number(degreesC);
let degreesK = degreesC + 273.15;

console.log('Degrees K:', degreesK); */
//
/*
console.log(3 == 4); //true
console.log(3 + 4); //7
console.log(3 + 4 == 7); //true
console.log("false"); //string
*/

