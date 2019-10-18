/// <reference path="./logger.ts" />

class Greeter{

    constructor(private name:string){
    }

    greet():void{
        log(`Hello ${this.name}`);
    }
}