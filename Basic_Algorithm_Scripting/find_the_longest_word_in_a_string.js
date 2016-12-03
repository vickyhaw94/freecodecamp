/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/


function findLongestWord(str) {
  var max = 0;
  var strArr = str.split(" ");
  for(var i = 0; i < strArr.length; i ++){
     if(strArr[i].length > max){
       max = strArr[i].length;
     }   
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
