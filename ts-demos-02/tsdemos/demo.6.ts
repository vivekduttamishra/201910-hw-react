
interface HasLength{
    length:number;    
}

var rect={
    length:20,
    width:40
};

var road={
    length:160,
    endPoint1:'Bangalore',
    endPoint2:'Mysore'
};

var person={
    name:'Vivek'
};

function printLength(obj:HasLength){
    console.log(`length of ${obj} is ${obj.length}`);
}

class Movie implements HasLength{
    length:number;
    constructor(private title:string, length:number){
        this.length=length;
    }

    toString():string{
        return `Movie[${this.title}]`;
    }

}


(function(){

    printLength(rect);
    printLength(road);
    //printLength(person); //not lengthy
    printLength('Hello World');
    printLength(new Movie('Harry Potter 1',132));
  


})();