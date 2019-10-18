import React from 'react';
import '../style.css';

// const style={
//     width:50,
//     height:50,
//     background:'white',
//     border:'1px solid black'
// };

//props passed to any component is always
//readonly by the component
//they can be changed by parent
//who passed them

class Cell extends React.Component<any>{
    
    value='*' //this is a class field or state which React DOSNT HANDLE
    state={value:'_'}; //this field will work with REACT.
    
    constructor(props:any){
        super(props);
        this.handleCellClick=this.handleCellClick.bind(this);
    }

    handleCellClick(){
            //this.props.value='X';
            //this.value='X';
            //this.state.value='X'; //REACT doesn't know you changed the state

            let value=this.state.value;
            if(value=='O')
                value='X';
            else
                value='O';

            //to let react know you changed the state
            this.setState({value}); //react assigns new value to state and know state has changed

            console.log(`value changed to ${this.state.value} in cell ${this.props.id}`);
            //console.log('cell clicked');
    };

    render(){
        
    
        return (
            <button 
                onClick={this.handleCellClick}
                className='cell'>
            {this.state.value}
            </button>
        );
    }
}

// const _component = (props:any) => {
// all logic for here moved to render() function of class component    
// };

//export default _component;

export default Cell;