/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var color=["blue",'red',"yellow"];
var pos=["st","nd","rd"];
n=color.length;
var pos1,j,pos2,pos3;
var l=color.length;
for(i=0;i<n;i++)
  {
    if(i==0)
      {
        for(j=0;j<l;j++)
          {
            if(pos[j]=="st")
              {
                pos1=pos[j];
              }
          }
         console.log("1"+pos1+" is "+color[i])
       }
    
    if(i==1)
      {
        for(j=0;j<l;j++)
          {
            if(pos[j]=="nd")
              {
                pos2=pos[j];
              }
          }
         console.log("2"+pos2+" is "+color[i])
      }
    if(i==2)
      {
        for(j=0;j<l;j++)
          {
            if(pos[j]=="rd")
              {
                pos3=pos[j];
              }
          }
         console.log("3"+pos3+" is "+color[i])
      }
    
  }