function destroyer(arr) {
  // Remove all the values
  for(var i=1; i<arguments.length; i++){
    var compareItem = arguments[i];
    arr = arr.filter(function(e){
      return e!==compareItem;
    });
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);