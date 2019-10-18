
class Person{
    constructor(name){
        this.name=name;
    }
    info(){
        return `Person ${this.name}`;
    }
};


p1=new Person('Vivek');
console.log(p1.info());

let info=p1.info; //now info is a separte entity not part of p1

//console.log(info());  //this is undefined now


p1.info=p1.info.bind(p1);

let x=p1.info; //this is a bounded version
console.log(x());


class Department{
    constructor(name){
        this.name=name;
    }
    info=()=>{
        return `Department ${this.name}`;
    }
};

var d=new Department("Accounts");
var i=d.info;

console.log(i());
