import logger=require('./logger');

export class Greeter{

    constructor(private name:string){
    }

    greet():void{
       logger.log(`Hello ${this.name}`);
    }
}