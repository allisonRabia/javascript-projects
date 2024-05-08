//Create an array called practiceFile with the following entry: 273.15
let practiceFile = [273.15];
//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
practiceFile[1] = 42
console.log(practiceFile);
practiceFile[2] = "hello"
console.log(practiceFile);
//Use a single .push() to add the following items: false, -4.6, and "87".  Print the array to confirm the changes.
practiceFile.push(false, -4.6, 87);
console.log(practiceFile);

//arrayName.push(item1, item2, ...)


// ch 8 arrays notes arrays are like strings
/*
let emptyArray = [];

let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];

let javaScriptFrameworks = [
    "React",
    "Angular",
    "Ember",
    "Vue"
]; */
/*
let emptyArray = [];
console.log(emptyArray.length);
//
let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
console.log(programmingLanguages.length);  //4

let grabBag = ["A string value", true, 99, 105.5];

let classes = ["science, computer, art"];

let teachers = ["Jones", "Willoughby", "Rhodes"];

console.log(classes.length); //3
console.log(teachers.length); //4
*/

/*
//workign with arrays bracket notations and index
let programmingLanguages = [
    "JavaScript", // index 0
    "Python",     // index 1
    "Java",       // index 2
    "C#"          // index 3
];
console.log(programmingLanguages[0]);
console.log(programmingLanguages[3]);

// What will happen when index 4 is requested?
console.log(programmingLanguages[4]);
// JavaScript
//C#
//undefined

let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
console.log(programmingLanguages[-1]); //undefined
console.log(programmingLanguages[100]); //undefined
*/
//mutable
let javaScriptFrameworks = ["React", "Angular", "Ember"];
console.log(javaScriptFrameworks); // [ 'React', 'Angular', 'Ember' ]


// Set the value of index 2 to be "Vue"
javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
console.log(javaScriptFrameworks); //[ 'React', 'Angular', 'Vue' ]
