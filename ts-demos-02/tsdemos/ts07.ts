
//p1 is an object of a new type
//defined here
var p1:{name:string,email:string}={
    name:'Vivek',
    email:'vivek@conceptarchitect.in'
}; 

//the type of p1  only supports name and email
//it doesn't support phone
//p1.phone='9036084835';

var p2:any={
    name:"Sanjay",
    Email:'san@yahoo.com'
};
p2.phone='93939393'; //works because p2 is of type any

var p3={
    name:'Shivanshi',
    Email:'shivanshi@gmail.com',
    phone:'93939393'
}

//p3.phone='99399393'; //doesn't work as p3 doesn't have phone

//console.log('phone',person.phone);

function printPeopleInfo2(...people:{name:string,email:string}[]):void{
    for(let person of people){
        console.log(`${person.name}\t${person.email}`);
    }
}

printPeopleInfo2(p1,p2,p3);
