function union(arr1, arr2){
  for(var i = 0;i < arr2.length;i++){
    if(arr1.indexOf(arr2[i]) == -1)
      arr1.push(arr2[i]);
  }
  return arr1.sort(function(a, b){return a-b});;
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));

