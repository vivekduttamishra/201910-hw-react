import React from 'react';
import TicTacToeBoard from './tic-tac-toe-board.component';
import MessageBar from './message-bar.component';


class _component extends React.Component<any> {
    state={cells:['_','_','_','_','_','_','_','_','_'], next:'O',message:'Next : O'}

    handleCellClick=(id:number)=>{
        let currentCellValue= this.state.cells[id];
        if(currentCellValue!='_')
            return ;

        let current=this.state.next;
        let next= current=='O'?'X':'O';

        //this.props.cells[id]=current;
        //you shouldn't mutate current state values
        //if a state changes, it should be assigned a new object
        //note the modified current object

        let cells=[... this.state.cells];
        cells[id]=current;
        let message=`Next : ${next}`;

        this.setState({cells, next,message});
        
        
    }


    render = () => {

        return (
            <div>
                <h1>Tic Tac Toe</h1>
                
                <TicTacToeBoard                             
                            cells={this.state.cells} 
                            onCellClick={this.handleCellClick} />
                <MessageBar message={this.state.message}/>
            </div>
        );
    };
}

export default _component;