//implicit user defined type

let p1={
    name:'Vivek',
    email:'vivek@conceptarchitect.in'
};

//what is the type of p1?

//p1=20; //p1 is not any

//typescript creates a new type by looking at initilization
//p1 is a object of type  {name:string, email:string}

//p1.phone='9036084835'; //this type doesn't have phone

let p2:any={
    name:'Vivek',
    email:'vivek@conceptarchitect.in'
};


//p2 is anything 

p2.phone='9036084835' ; //p2 can have phone. type is not sure

p2=20; //works. p2 can be anything



