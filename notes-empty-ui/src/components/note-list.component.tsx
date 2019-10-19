import React from 'react';


const _component=(props:any)=>{
    return (
    <div style={{minHeight:400,paddingRight:5}}>
        <ul className='list-group note-list'>
            <li className='list-group-item list-group-item-action'>One</li>
            <li className='list-group-item list-group-item-action'>Two</li>
            <li className='list-group-item list-group-item-action'>Three</li>
        </ul>
    </div>);
};

export default _component;