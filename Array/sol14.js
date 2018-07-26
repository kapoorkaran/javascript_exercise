/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var arr=[10,20,30,10,20,40,50];
n=arr.length;
var i,j;
for(i=0;i<n;i++)
  {
    for(j=i+1;j<n;j++)
      {
        if(arr[i]==arr[j])
          {
            arr[i]=" ";
          }
      }
  }
console.log(arr)