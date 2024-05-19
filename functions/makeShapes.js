//

//console.log('Hellow World!');

function makeLine(size) {
    let line = '';
for (let i = 0; i < size; i++) {
    line += '#';
}
return line;  
}
console.log(makeLine(5));
//#####

function makeSpaces(size) {
    let line = '';
for (let i = 0; i < size; i++) {
    line += ' ';
}
return line;  
}
console.log(makeLine(5));

function makeSquare(size) {
    let square = '';

    for (let i = 0; i < size; i++) {
        square += makeLine(size) + '\n';
        ;
   }
   return square;
}

console.log(makeSquare(5));
// #####
//  #####
//  #####
//  #####
//  #####

function makeRectangle(width, height) {
    let rectangle = '';

    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle;//.slice(0,-1);
}
console.log(makeRectangle(5,3));
// output
// #####
// #####
// #####


function makeDownwardStairs(height) {
    let stairs = ''; 
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1) + '\n');
    }
    return stairs;
}
console.log(makeDownwardStairs(5));
// output
// #
// ##
// ###
// ####
// #####

function makeSpaceLine(numSpaces, numChars) {

    let spaceLine = '';
    //for (let i = 0; i < (numSpaces.length + numChars.length); i++); {
    spaceLine += makeSpaces(numSpaces) + makeLine(numChars) + makeSpaces(numSpaces);
    
    return spaceLine;
}

console.log(makeSpaceLine(3, 5));


function makeIsoscelesTriangle(height) {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle.slice(0, -1);
  
}
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    makeIsoscelesTriangle(height);
    let diamond = '';
    for (let i = 0; i <height; i++) {
        function reverse(makeIsoscelesTriangle) {
            let lettersArray = makeIsoscelesTriangle.split('');
            let reversedLettersArray = lettersArray.reverse();
            return reversedLettersArray.join('');
            
        }
        reverse(makeIsoscelesTriangle);
        
    } diamond += reversedLettersArray;

}

console.log(makeDiamond(5));





//Now, go back and rewrite makeSquare to use makeRectangle.??
// function makeSquare(width,height) {
//     let square = '';

//     for (let i = 0; i < height; i++) {
//         square += (makeLine(width) + '\n');
//         ;
//    }
//    return square;
// }

// console.log(makeSquare(5,5));

