import r from 'react';
import reactDom from 'react-dom';
import './style.css';


//<h1>Hello React World</h1>

//react virtual DOM element
let heading= r.createElement('h1',{
    style:{
        color:'red',
        textShadow:'-5px -5px 5px black'
    },
},'Hello React World');

let body=r.createElement('div',{
    className:'info'
}, 'Welcome to React Programming');

let reactLink=r.createElement('a',{
    href:'http://reactjs.org'
},'Learn React Here!');

let page=r.createElement('div',{
    className:'page'
},heading,body,reactLink)
//javascript DOM element
let root= document.getElementById('root');

//root.innerHTML='<h1>Hi</h1>';

//Goal: put react element in browser DOM
reactDom.render(page,root);

