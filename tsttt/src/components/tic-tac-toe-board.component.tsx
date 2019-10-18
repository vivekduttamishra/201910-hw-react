import React from 'react';
import Cell from './cell.component';

const _component = () => {

    return (
        <div className='container' >
            <div className='row'>
                <Cell  id={0} value='X' />
                <Cell id={1} />
                <Cell id={2} value='O'/>
            </div>
            <div className='row'>
                <Cell id={3} value=''/>
                <Cell id={4} value='O'/>
                <Cell id={5} value='X'/>
            </div>
            <div className='row'>
                <Cell id={6} value='O'/>
                <Cell id={7}  value='*'/>
                <Cell id={8} value='X'/>
            </div>

        </div>
    );
};

export default _component;