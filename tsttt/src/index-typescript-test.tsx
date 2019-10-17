import React from 'react';
import ReactDOM from 'react-dom';
import { logicalExpression } from '@babel/types';
import { summarizers } from 'istanbul-lib-report';

console.log('hello world');


let a=10; // a is a reference of type number

//a='hello'; //can't assign string to number

let b:any; //b can be of anytype


function average(...numbers:number[]):number{
    let sum=0;
    for(let number of numbers)
        sum+=number;
    return sum/numbers.length;
};

let result=average(20,40);

console.log('result',result);

//result=average('hello','world'); //must pass a number

result=average(20,30,400);

console.log(result);



let App=()=>(
    <h1>Hello World</h1>
);

ReactDOM.render(<App/>, document.getElementById('root'));

