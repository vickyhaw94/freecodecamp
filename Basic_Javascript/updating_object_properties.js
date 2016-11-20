// Instruction
//Here's how we update his object's name property:

//ourDog.name = "Happy Camper"; or

//ourDog["name"] = "Happy Camper";

//Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper".


//Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.


// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
//Method One
myDog.name = "Happy Coder";

//Method Two
console.log(myDog["name"] = "Happy Coder");

