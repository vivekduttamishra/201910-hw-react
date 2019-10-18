
class Point{
    
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    slope(){
        return this.y/this.x;
    }

    toString(){
        return `Point(${this.x},${this.y})`;
    }

    distance(p2){
        let dx=p2.x-this.x;
        let dy=p2.y-this.y;
        return Math.sqrt(dx*dx+dy*dy);
    }
}

var p1=new Point(5,5);

console.log( `p1 is ${p1}`);

var origin=new Point(0,0);

//Point.prototype.toString= function(){return  `Point ${this.x} ${this.y}`;};

console.log(`distance between ${p1} and ${origin} is ${p1.distance(origin)}`);
