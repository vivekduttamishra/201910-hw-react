var isPrime=function(number){
    if(number<2)
        return false;

    for(let i =2;i<number;i++)
        if(number%i==0)
            return false;
        
    return true;
}

var search=function(values){
    let result=[];
    for (let value of values){
        if(isPrime(value))
            result.push(value);
    }
    return result;
}

let values=[2,9,11,7,14,17,51];

let primes=search(values);

console.log('primes',primes);
