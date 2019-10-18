import React from 'react';
import Cell from './cell.component';

export interface BoardProps{
    cells:string[],
    onCellClick: (id:number)=>void
};

const _component = (props:BoardProps) => {
    
    return (
        <div>
            <div className='container' >
                <div className='row'>
                    <Cell id={0} value={props.cells[0]}
                        onCellClick={props.onCellClick} />

                    <Cell id={1} value={props.cells[1]} onCellClick={props.onCellClick} />
                    <Cell id={2} value={props.cells[2]} onCellClick={props.onCellClick} />
                </div>
                <div className='row'>
                    <Cell id={3} value={props.cells[3]} onCellClick={props.onCellClick} />
                    <Cell id={4} value={props.cells[4]} onCellClick={props.onCellClick} />
                    <Cell id={5} value={props.cells[5]} onCellClick={props.onCellClick} />
                </div>
                <div className='row'>
                    <Cell id={6} value={props.cells[6]} onCellClick={props.onCellClick} />
                    <Cell id={7} value={props.cells[7]} onCellClick={props.onCellClick} />
                    <Cell id={8} value={props.cells[8]} onCellClick={props.onCellClick} />
                </div>
            </div>

        </div>
    );
};


export default _component;