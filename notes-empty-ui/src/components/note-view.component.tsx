import React from 'react';


const _component=(props:any)=>{
    return (
    <div className='container info'>
        <h1>Mahatma Gandhi Quotes</h1>
        <div className='info-text'>
            Freedom is not worth having if it doesnt include the freedom to make mistakes.
            First they ignore you, then they laugh at you, then they fight you and then you win.
            An eye for an eye makes the world blind            
        </div>
        <div className='info-tags'>
            Mahatma Gandhi, Quotes, Freedom, Victory, Fight 
        </div>
        <div className='info-options'>
            <button className='btn btn-primary'><i className="fa fa-edit"></i> Note</button> 
            <button className='btn btn-danger'><i className="fa fa-trash"></i> Note</button>
        </div>
    </div>
    );
};

export default _component;