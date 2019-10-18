
class Point2D{
    
    x:number;
    y:number;
}
//a class can also be considered as an interface
//with given feature set
interface IPoint3D extends Point2D{
    z:number;
}

class CanvasPoint extends Point2D{
    //this class treats Point2D as a class so it inherits the
    //x and y field from the Point2D class
}

class VirtualPoint implements Point2D{
    //this class treats Point2D as an interface (not as class)
    //it doesn't inherit x and y field.
    //it needs to define those fields here
    x:number;
    y:number;
}
