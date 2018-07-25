/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


function celtoFah(celsius) {
  var celsiusnew = (celsius*9)/5 + 32;
  console.log(celsius + '°C is ' + celsiusnew + '°F');
}

function fahtoCel(fahrenheit) {
  var fahrenheitnew = ((fahrenheit - 32)*5)/9;
  console.log(fahrenheit + '°F is ' + fahrenheitnew + '°C');
}
fahtoCel(100);
celtoFah(50);

/*
Exception: ReferenceError: celsius is not defined
celtoFah@Scratchpad/1:12:7
@Scratchpad/1:21:1
*/