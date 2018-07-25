object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = { 
name : "Karan Kapoor", 
sclass : "full stack", 
rollno : 31 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);

