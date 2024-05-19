function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}

//isPanlindrom fucntion
//Recall that our approach will be to take the string argument, 
//reverse it, and then compare the reversed string to the original string.

let str = "Money"
function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}
console.log(isPalindrome(str));
//output false

//functions should do one thing
//This principle is easier to state than to put into practice. For example, what if we had written isPalindrome without breaking out the reverse code into a separate function?

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return reversed === str;
}

// l
function makeSandwich( /*parameters*/ ) {
   // make the sandwich
}

function pourDrink( /*parameters*/ ) {
   // pour the drink
}

function makeLunch( /*parameters*/ ) {
   makeSandwich( /*parameters*/ );
   pourDrink( /*parameters*/ );
}
