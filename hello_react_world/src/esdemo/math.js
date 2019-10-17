var isDivisibleBy=function(divisor){
    function test(number){
        return number%divisor==0;
    }
    
    return test;
};


var isPrime=function(n){
    if(n<2)
        return false;
    for(let i=2;i<n;i++)
            if(n%i==0)
                    return false;

    return true;

};


var isEven=function(n){return n%2===0;};


export default {
    isDivisibleBy,
    isPrime,
    isEven
};