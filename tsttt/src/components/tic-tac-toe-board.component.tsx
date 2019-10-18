import React from 'react';
import Cell from './cell.component';

class _component extends React.Component<any>{
    
    state={cells:['_','_','_','_','_','_','_','_','_'], next:'O'}

    handleCellClick=(id:number)=>{
        let currentCellValue= this.state.cells[id];
        if(currentCellValue!='_')
            return ;
        let current=this.state.next;
        let next= current=='O'?'X':'O';

        this.state.cells[id]=current;
        //you shouldn't mutate current state values
        //if a state changes, it should be assigned a new object
        //note the modified current object

        let cells=[... this.state.cells];
        cells[id]=current;

        this.setState({cells, next});
        
        
    }

    render = () => {
        return (
            <div>
                <div className='container' >
                    <div className='row'>
                        <Cell id={0} value={this.state.cells[0]} 
                                    onCellClick={this.handleCellClick} />

                        <Cell id={1} value={this.state.cells[1]} onCellClick={this.handleCellClick}/>
                        <Cell id={2} value={this.state.cells[2]} onCellClick={this.handleCellClick}/>
                    </div>
                    <div className='row'>
                        <Cell id={3} value={this.state.cells[3]} onCellClick={this.handleCellClick}/>
                        <Cell id={4} value={this.state.cells[4]} onCellClick={this.handleCellClick}/>
                        <Cell id={5} value={this.state.cells[5]} onCellClick={this.handleCellClick}/>
                    </div>
                    <div className='row'>
                        <Cell id={6} value={this.state.cells[6]} onCellClick={this.handleCellClick}/>
                        <Cell id={7} value={this.state.cells[7]} onCellClick={this.handleCellClick}/>
                        <Cell id={8} value={this.state.cells[8]} onCellClick={this.handleCellClick}/>
                    </div>
                </div>
                <h2>Next Move : {this.state.next}</h2>
            </div>
        );
    }; //render
} //class closed

export default _component;