  var library = [
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      id: 1254
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      id: 4264
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      id: 3245
  }];
var i,j,temp;
var n=library.length;

for(j=0;j<n-1;j++)
 {
   for(i=0;i<n-j-1;i++)
     {
       if(library[i].id < library[i+1].id)
         {
           temp=library[i+1];
           library[i+1]=library[i];
           library[i]=temp;
         }
     }
 }
console.log(library);

