/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


var radius=4;
function calcGeometry(radius) {
  var circumference = 3.14* 2*radius;
  console.log("The circumference is" + circumference);
  var area = 3.14 * radius*radius;
  console.log("The area is" + area);
}
calcGeometry(radius);
