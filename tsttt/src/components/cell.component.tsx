import React from 'react';
import '../style.css';

// const style={
//     width:50,
//     height:50,
//     background:'white',
//     border:'1px solid black'
// };

const _component = (props:any) => {

    return (
        <button className='cell'>
        {props.value}
        </button>
    );
};

export default _component;