import React from 'react';
import TicTacToeBoard from './tic-tac-toe-board.component';
import MessageBar from './message-bar.component';
import {GameStatus,checkGameSatus} from '../model/tic-tac-toe.service';

interface GameState{
    cells:string[];
    next:string;
    message:string;
    gameStatus:GameStatus|null;
}

class _component extends React.Component<any> {
    state:GameState={
        cells:['_','_','_','_','_','_','_','_','_'], 
        next:'O',
        message:'Next : O',
        gameStatus:null
    };

    componentDidMount(){
        
        //this.state.gameStatus=checkGameSatus(this.state.cells);
        //set state doesn't replace current state, it merges changes in the state
        this.setState({gameStatus:checkGameSatus(this.state.cells)});
    }

    handleCellClick=(id:number)=>{
        console.log('handleCellClick gameStatus',this.state.gameStatus);
        if(this.state.gameStatus && this.state.gameStatus.gameOver)
            return ; //game is over. nothing more to do

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

        let gameStatus=checkGameSatus(cells);

        let message=`Next : ${next}`;

        if(gameStatus.winner){
            message=`${gameStatus.winner} Wins`;
        } else if(gameStatus.gameOver){
            message='Game Ends a Draw'
        };

        this.setState({cells, next,gameStatus,message});
        
        
    }


    render = () => {
        console.log('render gameStatus',this.state.gameStatus);
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