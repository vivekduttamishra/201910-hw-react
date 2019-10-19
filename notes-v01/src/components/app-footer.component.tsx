import React from 'react';


const _component=(props:any)=>{
    return (
    <footer>
        &copy; 
        <a href={props.copyrightUrl}>{props.copyrightText}</a>
    </footer>);
};

export default _component;