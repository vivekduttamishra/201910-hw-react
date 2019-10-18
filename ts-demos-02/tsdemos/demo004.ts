

class Human{

    /*
    private name:string;
    private email:string;

    constructor(name:string,email:string){
        this.name=name;
        this.email=email;
    }
    */

    constructor(private _name:string,private _email:string){

    }

    get name():string{
        return this._name
    }

    set name(value:string){
        this._name=value;
    }

    get email():string {
        return this._email;
    }

    set email(value:string){
        if (value.indexOf("@")!==-1)
            this._email=value
    }


    toString():string{
        return `Human [Name=${this.name},Email=${this.email}]`;
    }

    work():void{
        console.log(`${this.name} works!!!`);
    }

}

let h1=new Human('Vivek','vivek@conceptarchitect.in');

console.log(h1);

console.log(h1.name);  //internally calls h1.name() get function

h1.email='vivek' //calls h1.set name('vivek') function

console.log(h1);

h1.email='@vivek'; //should allows adding this text

console.log(h1);



