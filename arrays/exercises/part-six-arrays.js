//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1);
console.log(table);
table.push(element2);
console.log(table);
table.push(element26);
console.log(table);
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[0]);
console.log(table[1][2]);
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let gift1 = ['notepad', 'multi colored pen', 'sticky notes'];
let gift2 = ['bookmark', 'stretchy book cover', 'thum book holder'];
let gift3 = ['lotion', 'body spray', 'scented handmade soap'];

let surpriseGiftBox = [];
surpriseGiftBox.push(gift1);
console.log(surpriseGiftBox);
surpriseGiftBox.push(gift2);
console.log(surpriseGiftBox);
surpriseGiftBox.push(gift3);
console.log(surpriseGiftBox);

console.log("Your surprise gift box includes:")
console.log(surpriseGiftBox[0][2]);
console.log(surpriseGiftBox[1][0]);
console.log(surpriseGiftBox[2][1]);

//Multidimensional arrays notes and examples
/*
let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

console.log(shuttleCrews[0][2]); //Mae Jemison
console.log(shuttleCrews[1][1]); //Ellen Ochoa
console.log(shuttleCrews[2][1]); //Winston Scott

shuttleCrews.push("dance"); //adds dance to bottom, adds a row
shuttleCrews[0].push("dance"); //add dance to end of array at [0,3]
shuttleCrews[1].unshift("Holmes"); // adds Holmes to start of array at [1,0]
console.log(shuttleCrews);

//indeces are for Jones on quiz is school[1][0]

*/