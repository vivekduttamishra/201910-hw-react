import React from 'react';
import Heading from './heading';
import Body from './body';

export default ()=> (
        <div>
            <Heading 
                text='Welcome To ReactJS'
                size={3}
                color='blue'
                
                />
            <Body/>
        </div>
);