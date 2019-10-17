function average(...params:number[]){

    let sum=0;
    for(let number of params){
        sum+=number;
    }
    return sum/params.length;
}

let values=[1,2,3,4,5];

let result=average(...values);

console.log(`average of ${values} is ${result}`);