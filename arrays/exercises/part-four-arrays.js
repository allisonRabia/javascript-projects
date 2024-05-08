let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? NO Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1.concat(holdCabinet2)); /* //'duct tape', 'gum',
3.14,        false,
6.022e+23,   'orange drink',
'nerf toys', 'camera',
42,          'parsnip' */
console.log(holdCabinet1); // 'duct tape', 'gum', 3.14, false, 6.022e+23 
//2) Print a slice of two elements from each array. Does slice alter the original arrays? NO
console.log(holdCabinet1.slice(0,2)); //'duct tape', 'gum' 
console.log(holdCabinet1); //duct tape', 'gum', 3.14, false, 6.022e+23 
console.log(holdCabinet2.slice(1,3)); // 'nerf toys', 'camera'
console.log(holdCabinet2); //orange drink', 'nerf toys', 'camera', 42, 'parsnip'

//3) reverse the first array, and sort the second. What is the difference between these two methods? reverse in order regardless of type. sort dependent on ascii table. Do the methods alter the original arrays?

holdCabinet1.reverse(); // 6.022e+23, false, 3.14, 'gum', 'duct tape'
holdCabinet2.sort(); //42, 'camera', 'nerf toys', 'orange drink', 'parsnip'
console.log(holdCabinet1); // see above it changes it
console.log(holdCabinet2); //same