function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}



//reverse function
function reverse(str) {
   let reversed = '';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }

   return reversed;
}

//readable ex.
function isPalindrome(str) {

   let reversed = '';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }

   return reversed === str;
}

//While the variable name reversed is descriptive, giving us a sense of what is going on with the for loop, the function becomes even more readable when we break out the reversing behavior into a separate function.

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

function isPalindrome(str) {
    return reverse(str) === str;
}
