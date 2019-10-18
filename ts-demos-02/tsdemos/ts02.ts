
//you can specify the type
function avg(x:number,y:number){
    return (x+y)/2;
}

console.log('avg(2,3)',avg(2,3));

//typescript will indicate mistakes
//if you pass wrong parameter.
var result=avg(4,'Hello');

console.log(result);

var result2=avg(2,3,4);

console.log(result2);