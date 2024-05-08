let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold[5] = 'space tether';
console.log(cargoHold);
//this is the other way not bracket lol for exercise 3 console.log(cargoHold.splice(5, 1, "space tether"));
//console.log(cargoHold);
//2) Remove the last item from the array with pop. Print the element removed and the updated array.
console.log(cargoHold.pop());
console.log(cargoHold);

//3) Remove the first item from the array with shift. Print the element removed and the updated array.
console.log(cargoHold.shift());
console.log(cargoHold);
//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
console.log(cargoHold.push("20 meters"));
console.log(cargoHold.unshift(1138));
console.log(cargoHold);
//5) Use a template literal to print the final array and its length.
console.log(cargoHold,cargoHold.length);
//also can do this way if wanting as a sentence.
console.log(`The array ${cargoHold} has a length of ${cargoHold.length}.`);



//array methods examples notes
//+ sort, slice, split and join
/*
//.sort examples
arrayName.sort();
let letters = ['f', 'c', 'B', 'X', 'a'];

letters.sort();
console.log(letters); //[ 'B', 'X', 'a', 'c', 'f' ]

//
let mixed = ['a', 'A', 20, 40];

mixed.sort();
console.log(mixed); //[ 20, 40, 'A', 'a' ]

//
let numbers = [2, 8, 10, 400, 30];

numbers.sort();
console.log(numbers); //[ 10, 2, 30, 400, 8 ] -1,2,3,4,8 converts to strings
*/
//.slice
//arrayName.slice(starting index, ending index)
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));

console.log(arr.slice(1,4));

console.log(arr);
//output [ 'c', 'd', 'e' ]
//[ 'b', 'c', 'd' ]
//['a', 'b', 'c', 'd', 'e']
*/
/*
//.split stringName.split('delimiter')
let numbers = "1,2,3,4";
let word = "Rutabaga";
let phrase = "Bookkeeper of balloons."
let arr = [];

arr = numbers.split(',');  //split the string at each comma.
console.log(arr);

arr = phrase.split(' ');   //split the string at each space.
console.log(arr);

arr = word.split('');      //split the string at each character.
console.log(arr);
// output ['1', '2', '3', '4']
['Bookkeeper', 'of', 'balloons.']
['R', 'u', 't', 'a', 'b', 'a', 'g', 'a'] */

//join... arrayName.join('connector')
/*
let arr = [1, 2, 3, 4];
let words = ['hello', 'world', '!'];
let newString = '';

newString = arr.join("+");
console.log(newString);

newString = words.join("");
console.log(newString);

newString = words.join("_");
console.log(newString);
//output 
/*
1+2+3+4
helloworld!
hello_world_! */


/*
//questions
let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles); //output [23, 350, 47, 'Tech', 'coder']

/*
Which statement converts the string str = 'LaunchCode students rock!' into the array ['LaunchCode', 'students', 'rock!']?

str.join(" ");
str.split(" "); this
str.join("");
str.split("");
*/
/*
let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);
//output [ 'chips', 'cucumbers', 'edamame' ]
*/