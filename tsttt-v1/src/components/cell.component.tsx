import React from 'react';
import '../style.css';

const _component = (props:any) => {

    return (
        <button
            onClick={() => props.onCellClick(props.id)}
            className='cell'>
            {props.value}
        </button>
    );
}

export default _component;