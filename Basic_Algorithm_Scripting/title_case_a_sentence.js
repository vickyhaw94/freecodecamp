/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
*/


function titleCase(str) {
  var arr = str.split(" ");
  var combineArr = [];
  var resultArr = [];
  for(var i = 0; i<arr.length; i++){
    var upperArr = [];
    var lowerArr = [];  
    for(var j = 0; j < arr[i].length; j++){      
      if(j === 0){
        upperArr.push(arr[i][j].toUpperCase()); 
      }else{
        lowerArr.push(arr[i][j].toLowerCase());  
      }       
       combineArr = upperArr.concat(lowerArr).join(""); 
    }
    resultArr.push(combineArr);
  }
  return resultArr.join(" ");  
}

titleCase("I'm a little tea pot");
