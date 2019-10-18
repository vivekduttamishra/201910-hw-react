/// <reference path="./logger.ts" />

namespace utils{
    export class Greeter{

        constructor(private name:string){
        }

        greet():void{
            log(`Hello ${this.name}`);
        }
    }
}