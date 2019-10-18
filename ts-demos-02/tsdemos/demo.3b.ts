

function average(...numbers:number[]):number{

    let sum=0;

    for(let number of numbers){
        sum+=number;
    }

    return sum/numbers.length
}

console.log('average(1,2,3,4)',average(1,2,3,4));