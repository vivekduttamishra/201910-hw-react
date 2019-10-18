
class Person{               //ES2015
    private name:string;    //Typescript
    private email:string;   //Typescript
    private phone:string;   //Typescript

    constructor(name:string,email:string="",phone:string=""){
        this.name=name;
        this.email=email;
        this.phone=phone;
    }

    //return is available in TYPESCRIPT not in ES2015
    toString():string{
        return `Person[${this.name},${this.email},${this.phone}]`; //ES2015
    }

    //... is available in ES2015
    // static and void is part of Typescript
    static printList(...people:Person[]):void{
    
        //for-of is part of ES2015
        for(let person of people){
            console.log(`${person.name}\t${person.email}\t${person.phone}`);
        }
    }

}

(function (){

    var p1=new Person("Vivek","vivek@conceptarchitect.in","9036084835");
    var p2=new Person("Sanjay","san@gmail.com");
    var p3=new Person('Shivanshi','',"999393939");

    Person.printList(p1,p2,p3);

})();


