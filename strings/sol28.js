function longest_common_starting_substring(s, str){
  if(str.length > s.length){
    if(str.indexOf(s) != -1)
      return s;
  }
  else{
    if(s.indexOf(str) != -1)
      return str;
  }
}

console.log(longest_common_starting_substring('go', 'google'));
console.log(longest_common_starting_substring('SQL', 'SQLInjection'));