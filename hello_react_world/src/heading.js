import React from 'react';

let headingStyle={
    color:'red',
    textShadow:'-5px -5px 5px black'
};

export default function(props){
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