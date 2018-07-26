                      
function newarray(array, n) {
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return array;
    else
    return array.slice(0, n);
  };

console.log(newarray([7, 9, 0, -2]),);
console.log(newarray([],3));
console.log(newarray([7, 9, 0, 1,7,8],-3));
console.log(newarray([7, 9, 0, -2],6));