import React from 'react';


const _component=({copyrightText,copyrightUrl}:any)=>{
    return (<div className='footer'>
        <a href={copyrightUrl} >
            &copy;{copyrightText}
        </a>
    </div>);
};


export default _component;