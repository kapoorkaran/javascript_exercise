var a1 = [null, 0,'' , false, undefined];

function fun(arr){
  var a = [], j = 0;
  for(var i = 0;i < arr.length;i++){
    if((a1.indexOf(arr[i]) == -1) && !isNaN(arr[i])){
      a[j] = arr[i];
      j++;
    }
  }
  return a;
}

console.log(fun([NaN, 0, 15, false, -22, '',undefined, 47, null]));