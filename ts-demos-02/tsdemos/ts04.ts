function listAll(header:string,...values:any[]):void{
    console.log(header);
    for(var value of values){
        console.log(value);
    }
    console.log('------------');
}
  
listAll('First 4 Primes',2,3,5,7);
listAll('Next 4 Primes',11,13,17,19);

listAll('Few Indian Leaders','Mahatma Gandhi','Bhagat Singh');

