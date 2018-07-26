function swap(arr, x, y){
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function myFunction(arr){
  var l = Object.keys(arr).length;
  for(var i = 0;i < l-1;i++){
    for(var j = 0;j < l-i-1;j++){
      if(arr[j].title > arr[j+1].title)
        swap(arr, j, j+1);
    }
  }
  return arr;
}

var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

console.log(myFunction(library));