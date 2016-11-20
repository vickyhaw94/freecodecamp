//Instructions
//Here is an example of a simple reverse alphabet lookup:

/*
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"

Convert the switch statement into a lookup table called lookup. Use it to lookup val and assign the associated string to the result variable.
*/


// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
 
  var lookup = {
  "alpha" : "Adams",
  "bravo" : "Boston",
  "charlie" : "Chicago",
  "delta" : "Denver",
  "echo" : "Easy",
  "foxtrot" : "Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
