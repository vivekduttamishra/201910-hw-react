import rd from 'react-dom';
import React from 'react';
import './style.css';

let headingStyle={
    color:'red',
    textShadow:'-5px -5px 5px black'
};

let Heading = function(props){
    console.log('x',props);
    let style={
        ...headingStyle,
        fontSize:`${props.size}em`
    };
    console.log('style',style);
    
    return <h1 style={style} >
                {props.text}
            </h1>;
} 



let Body= ()=> (
        <div>
            <p className='info'  >Welcome to React JSX</p>
            <p>This is the Body compoent</p>
        </div>
);

let Page =()=> (
        <div>
            <Heading 
                text='Welcome To ReactJS'
                size={3}
                color='blue'
                
                />
            <Body/>
        </div>
);

rd.render(<Page/>, document.getElementById('root'));