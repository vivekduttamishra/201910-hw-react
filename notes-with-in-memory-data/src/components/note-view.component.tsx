import React from 'react';
import {connect} from 'react-redux';
import { NotesStore } from '../model/notes-store';
import {changeMode} from '../store/action-creators';
import {MODE_EDIT} from '../store/modes';


const NoteView=(props:any)=>{
    return (
        <div className='container info'>
            <h1>{props.currentNote.title}</h1>
            <div className='info-text'>
                {props.currentNote.text}
            </div>
            <div className='info-tags'>
                {props.currentNote.tags}
            </div>
            <div className='info-options'>
                <button className='btn btn-primary'
                    onClick={()=>props.changeMode(MODE_EDIT)}
                ><i className="fa fa-edit"></i> Note</button> 
                <button className='btn btn-danger'><i className="fa fa-trash"></i> Note</button>
            </div>
        </div>
    );
};

const _component=(props:any)=>{
    if(props.currentNote)
        return <NoteView {...props} />
    else
        return <div>Please wait or press download button...</div>
};

const mapStateToProps=({currentNote}:NotesStore)=>{
    return {
        currentNote
    }
}
const dispatchers={
    changeMode
};

export default connect(mapStateToProps,dispatchers)(_component);