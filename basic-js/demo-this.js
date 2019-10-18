
function show(){
    console.log(this.info())
}

function info(){
    return `Person(Name=${this.name})`;
}

var p1={
    name:'Vivek',
    show:show, //ES5
    info  //:info assumed by ES2015
}

p1.show()// calls show and passes p1 as this because show is associated with p1
         // show calls this.info() that is also part of same p1


function displayPersonInfo(person){
    console.log('displaying', person.info());
}

displayPersonInfo(p1); //we pass p1. p1 has info()

function printInfo(infoFn){
    console.log('printing',infoFn());
};

printInfo(p1.info); 
//what happened here
/* 
 * we are passing info() not p1
 * info has been taken out of p1 (context)
 * info that is passed is an ordinary function not associated to p1
 * there is not this available here 
*/
p1.info=p1.info.bind(p1); //bind associates p1 as this for info function.

var x=p1.info;
console.log(x());

printInfo(p1.info);



