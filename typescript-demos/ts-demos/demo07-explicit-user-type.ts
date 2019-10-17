//implicit user defined type

type Name={
    firstName:String;
    middleName?:String;
    lastName:String;
}


type Employee={
    name:Name | String;
    email:String;
    age?:number;  //? implies optional
};

//explicit defintion
let employees:Employee[]=[

    {
        name:{firstName:'Vivek',middleName:'Dutta',lastName:'Mishra'},
        email:'vivek@conceptarchitect.in'
    },

    {
        name:{firstName:'Sanjay',lastName:'Mall'},
        email:'sanjay@conceptarchitect.in'
    },

    {
        name:'Shivanshi Mishra',
        email:'shivanshi@conceptarchitect.in'
    }
    

];

for(let employee of employees){
    if(typeof(employee.name)==='string')
        console.log(`${employee.name} ${employee.email} ${employee.age}`);
    else{
        let name:Name=<Name> employee.name;
        console.log(`${name.firstName} ${name.lastName} ${employee.email} ${employee.age}`);
    }
     
}


