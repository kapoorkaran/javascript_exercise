/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var a=[9,4,1,6,8,-3,2,7];
var temp;
var i,j;
var n=a.length;

for(j=0;j<n;j++)
  {
    for(i=0;i<n;i++)
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

