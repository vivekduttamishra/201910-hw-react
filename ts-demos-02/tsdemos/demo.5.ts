class Lengthy{
    _length:number;
    get length(){
        return this._length;
    }
    
    set length(newLength:number){
        if(newLength>0)
            this._length=newLength;
    }

    constructor(length:number){
        this._length=length;
    }

}

class Rectangle extends Lengthy{
    width:number;
    constructor(length:number,width:number){
        super(length);
        this.width=width;
    }

    toString(){
        return `Rectangle[${this.width},${this.length}]`;
    }
}

class Road extends Lengthy{
    EndPoint1:string;
    EndPoint2:string;
    constructor(endPoint1:string,length:number,endPoint2:string){
        super(length);
        this.EndPoint1=endPoint1;
        this.EndPoint2=endPoint2;
        
    }
    toString(){
        return `${this.EndPoint1}<--${this.length}-->${this.EndPoint2}`;
    }
}



class Person{
    
    constructor(private name:string){
        
    }
    toString(){
        return `Person [ ${this.name} ]`;
    }
}

function printLengthInfo(obj:Lengthy){
    console.log(`length of ${obj} is ${obj.length}`);
}

(function(){

    var p1=new Person('Vivek');
    console.log(p1);

    var rect=new Rectangle(3,4);
    var road=new Road('Bangalore',160,'Mysore');

    printLengthInfo(rect);
    printLengthInfo(road);
    //printLengthInfo(p1); //not lengthy
    //printLengthInfo('Hello World');
  


})();