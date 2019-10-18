
//lets create a type called Person
//Person is an alias for type defined here!!!

type Name={
    firstName:string;
    lastName?:string;  //optional   
};



type Employee={
    name:Name|string, //name can be either string or of type Name
    email:string,
    phone?:string  //phone is optional
};



//p1 is an object
var e1:Employee={
    name:'Vivek',
    email:'vivek@conceptarchitect.in'
}; 

var e2:Employee={
    name:{firstName:'Sanjay'},
    email:'san@yahoo.com'
};

var e3:Employee={
    name:{firstName:'Shivanshi',lastName:'Mishra'},
    email:'shivanshi@gmail.com',
    phone:'93939393900'
};

//p3.phone='99399393'; //doesn't work as p3 doesn't have phone

//console.log('phone',person.phone);

function printEmployeeInfo(...people:Employee[]):void{
    
    for(let person of people){
        var name:string;
        //which of the possible value name contains? string or Name
        if(typeof(person.name)==='string')
            name=person.name;
        else
            name=`${person.name.firstName} ${person.name.lastName?person.name.lastName:''}`;
        console.log(`${name}\t${person.email}\t${person.phone}`);
    }
}

printEmployeeInfo(e1,e2,e3);
