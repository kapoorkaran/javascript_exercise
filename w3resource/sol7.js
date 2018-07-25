
 var subset = "donkey";
var subs =[];
 var len = subset.length;
console.log(len);
  for (var m = 0; m < len; m++) 
  {
    for (var n = m+1; n<length+1; n++) 
    {
      subs.push(subset.substring(m,n));
    }
  }
console.log(subs);

