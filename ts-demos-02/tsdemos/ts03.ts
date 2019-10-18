
//you can specify the type
function avg(...numbers:number[]):number{
   let sum=0;
   for(let number of numbers)
    sum+=number;

    return sum/numbers.length;
}

console.log('avg(2,3)',avg(2,3));


console.log('avg(2,3,9,5)',avg(2,3,9,4));

console.log('avg(10,20,30)',avg(10,20,30));

console.log('avg("hello","world")',avg("hello","world"));
