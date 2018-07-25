var a=[9,4,1,6,8,2,7];
var temp;
var i,j;
var n=a.length;

for(j=0;j<n;j++)
  {
    for(i=0;i<n-1;i++)
      {
        if(a[i]>a[[i+1]])
          {
            temp=a[i+1];
            a[i+1]=a[i];
            a[i]=temp;
          }
      }
  }
console.log("after sort")
for(i=0;i<n;i++)
  {
    console.log(a[i]);
  }
