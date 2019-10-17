//implicit user defined type

type Name={
    firstName:String;
    middleName?:String;
    lastName:String;
}


interface Human{
    name:Name | String;
    email:String;
    age?:number;  //? implies optional
};

//explicit defintion
let humans:Human[]=[

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

for(let human of humans){
    if(typeof(human.name)==='string')
        console.log(`${human.name} ${human.email} ${human.age}`);
    else{
        let name:Name=<Name> human.name;
        console.log(`${name.firstName} ${name.lastName} ${human.email} ${human.age}`);
    }
     
}


