let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear];

//part 2 function example 1

   function crewReports(arr){
      for (let i=0; i < arr.length; i++) {
         const item = arr[i];
      console.log(`${item.name} is a ${item.species}. They are ${item.age} years old and ${item.mass}. Their ID is ${item.astronautID}.`);
   }
   }
   crewReports(crew);

//part 2 function example 2

   function crewReportsTwo(animal){
      return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass}kg. Their ID is ${animal.astronautID}.`;
   }
      for (let i=0; i < crew.length; i++) {
      console.log(crewReportsTwo(crew[i]));
   }

//part 3 

function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }

  console.log(fitnessTest(crew));