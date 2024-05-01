// Run this sample code as-is and examine the output. 
// exercise instructions
/* Imagine we are running a space station. Your job is to evaluate the station’s code and fix any errors. The lives of the crew rest squarely upon your shoulders.

Your directions from superiors:

Launch the shuttle only if the fuel, crew and computer all check out OK.
If a check fails, print that information to the console and scrub the launch.
If all checks are successful, print a countdown to launch in the console.*/


/*$ node debugginglogicerrors1
WARNING: Insufficient fuel!
Crew & computer cleared.
10, 9, 8, 7, 6, 5, 4, 3, 2, 1...
Liftoff! */
// Should the shuttle have launched? //no
// Did it? //yes
// Do not worry about fixing the code yet, we will do that in the next series of exercises.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}