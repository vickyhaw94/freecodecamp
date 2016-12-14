/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
*/


function sumAll(arr) {
  var mxx = Math.max.apply(null,arr);
  var mnn = Math.min.apply(null,arr);
  var tArr = [];
  for(var i = mnn; i <= mxx ; i++){
    tArr.push(i);
  }
  console.log(tArr);
  var ans = tArr.reduce(function(a,b){return a + b; },0);
  return ans;
}

sumAll([1, 4]);
