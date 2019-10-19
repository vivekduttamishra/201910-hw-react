import React from 'react';
import {connect} from 'react-redux';
import {getAllNotes} from '../store/action-creators';
import {Note} from '../model/note';

const _component=(props:any)=>{

    const handleGetAll=()=>{
    // props.dispatch(getAllNotes());
    };

    const renderGetAllButton=()=>{
        if(props.notes.length===0)
            return (<button 
                className='btn btn-primary'
                onClick={handleGetAll}
            >GetAll</button>);
        else
            return null;
    }

    const renderNotes=()=>{
        return  props.notes.map((note:any)=>(
            <li className='list-group-item list-group-item-action'>{note.title}</li>
        ));
    }

    console.log('note-list props',props);
    return (
    <div style={{minHeight:400,paddingRight:5}}>
       
        <ul className='list-group note-list'>
            {renderNotes()}
        </ul>
    </div>);
};


//tell which redux properties this component needs

const mapReduxStateToProps=(reduxState:any)=>{
    return{
        notes: reduxState.notes
    };
}



let connector= connect(mapReduxStateToProps);  //now connector know what states are required by my react component
//console.log('connect returns ', connector);
//fn can take a react component and return a provided react component

export default connector(_component); //now wrap my component into a provide that will indjext notes as props

//export default _component;