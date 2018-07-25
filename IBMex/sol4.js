

//defining an object with the help of a contructor
//we can use initial capital letter to name a constructor
function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}
//as the function was declared in the constructor part 
//we need to use the prototype to add a fuction to cylinder function
Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * 3.14 * radius * radius;
};

var cyl = new Cylinder(7,9);
console.log('volume =', cyl.Volume().toFixed(4));
