

let v1:number=10; //explicit type definition

//v1='hello world'; //number type can't hold string

let v2=20; //implictly v2 is also a number


//v2='hello world'; //can't assign number to string


let v3:any=10; //v3 can hold any value. currently holding 10

v3='hello';

let v4={
    name:'Vivek',
    email:'vivek@email.com'

};

//what is the type of v4?

console.log(v4);

//v4.phone='93939499393';

let v5:any={
    name:'Vivek',
    email:'vivek@email.com'

};


v5.phone='94949494949';