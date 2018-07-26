/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var str="HEllO.hOW are You";
var arr=Array.from(str);
n=arr.length;
var a=[];
var i;
for(i=0;i<n;i++)
  {
    var temp=arr[i];
    if(temp==temp.toUpperCase())
     {
       a[i]=temp.toLowerCase();
     }
    else
      a[i]=temp.toUpperCase();
  }
var b=a.toString();
console.log(b);
