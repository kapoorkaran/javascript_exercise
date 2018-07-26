/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var a=[0,1,2,3,4,5];
var n=a.length;
var i;
var sq;
var total=0;
for(i=0;i<n;i++)
  {
    sq=a[i] * a[i];
    total=total+sq;
  }
console.log(total);
  