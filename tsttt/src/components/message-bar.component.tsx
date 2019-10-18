import React from 'react';
import '../style.css';

interface MessageBarProps{
    message:string
};

const _component = ({message}:MessageBarProps) => {

    return (
        <div className='message-bar'>
            {message}
        </div>
    );
}

export default _component;