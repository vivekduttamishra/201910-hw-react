
interface IStack<T>{
    push(object:T):void;
    pop():T;
    isEmpty():boolean;
    isFull():boolean;
}


class FixedStack<T> implements IStack<T>{
    private values:T[]=[];

    push(obj: T): void {
        this.values.push(obj);

    }   
     pop(): T {
        if (this.isEmpty())
            throw Error('Stack UnderFlow');
        return <T> this.values.pop();
    }
    isEmpty(): boolean {
        return values.length===0;
    }
    isFull(): boolean {
        return false;
    }


}