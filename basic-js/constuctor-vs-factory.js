//constructor
function Person(name){
    this.name=name;
}
//factory
function createDepartment(name){
    var d=new Object();
    d.name=name;
    return d;
}
var p=new Person('Vivek'); //created using 'new Person()'
var d= createDepartment('L&D'); //created using 'new Object()'

console.log(p);
console.log(d);
