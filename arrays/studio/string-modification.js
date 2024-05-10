const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

const newArray = str.split('');

const firstThreeLetters = newArray.slice(0,3);
console.log(newArray);
console.log(firstThreeLetters);

const stringWithoutFirstThreeChar = newArray.slice(3);
console.log(stringWithoutFirstThreeChar);
const modifiedString = stringWithoutFirstThreeChar + firstThreeLetters;
console.log(modifiedString);

output = modifiedString.join('');
console.log(output);
//const output = (stringWithoutFirstThreeChar,firstThreeLetters).join("");
//nsole.log(output);
//modifiedString.join();
//console.log(modifiedString);


//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.


//terminal commands exercises
/*
pwd to check your location.
touch my_first_file.txt
mkdir 
cp my_first_file.txt ../my_first_copy.txt
mv my_first_copy.txt my_first_directory/
cat my_first_copy.txt //print contents of file
rm -r my_first_directory/ //removes 
*/