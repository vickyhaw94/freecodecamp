/* Instruction
Modify the function checkObj to test myObj for checkProp. 
If the property is found, return that property's value. If not, return "Not Found".

return myObj[checkProp] - take from the object myObj property with name which we store in checkProp variable and return its value.
Square brackets - because this is the way how you can get access to the property of an object or element of an array or array-like structure.
Although JS has dot notation as alternative to bracket notation, but it don't work in this case. Because dot notation require real name property but not string in variable (which we have here). Yoy can't use parenthesis in this case at all.

*/


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
	  
	// cant use return myObj.checkProp it will return nothing because dot notation require real name to
	// access the element but not string in variable 
  }else{
    return "Not Found";
  }
 
}

// Test your code by modifying these values
checkObj("gift");
console.log(myObj.gift);
