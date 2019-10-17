

let a=10 ; //x is implicitly a number

//a='hello'; //can't be assigned a string

let b:number;  //explcit number. not yet assigned

b=20;

//b='hello'; //can't assign string

let c;  //implicitly assumed to be 'any' type

c=10; //works. c can be 'any' thing
c='hello' //works c can be 'any' thing

let d:any=10; //d can by anything, currently a number

d='hello world';  //works a d can be anything

