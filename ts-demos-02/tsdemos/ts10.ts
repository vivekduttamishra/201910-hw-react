
//lets create a type called Person
//Person is an alias for type defined here!!!
type Person={
    name:string,
    email:string,
    phone?:string  //phone is optional
};
type int = number; //int is an alias for number



//p1 is an object
var p1:Person={
    name:'Vivek',
    email:'vivek@conceptarchitect.in'
}; 

//the type of p1  only supports name and email
//it doesn't support phone
//p1.phone='9036084835';

var p2:any={
    name:"Sanjay",
    email:'san@yahoo.com'
};

p2.phone='93939393'; //works because p2 is of type any

var p3:Person={
    name:'Shivanshi',
    email:'shivanshi@gmail.com',
    phone:'939393939'
}

//p3.phone='99399393'; //doesn't work as p3 doesn't have phone

//console.log('phone',person.phone);

function printPeopleInfo(...people:Person[]):void{
    for(let person of people){
        console.log(`${person.name}\t${person.email}\t${person.phone}`);
    }
}

printPeopleInfo(p1,p2,p3);
