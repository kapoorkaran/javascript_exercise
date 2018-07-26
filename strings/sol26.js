function sumg(arr, t){
  for(var i = 0;i < arr.length;i++){
    for(var j = i+1;j < arr.length;j++){
      if((arr[i]+arr[j]) == t){
        console.log((i+1)+", "+(j+1));
      }
    }
  }
}

sumg([10,20,10,40,50,60,70], 50);