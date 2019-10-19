import React from 'react';
import {connect} from 'react-redux';
import {getNoteById} from '../store/action-creators';
import { NotesStore } from '../model/notes-store';


const _component=({note,getNoteById}:any)=>{
    return (<li 
        className='list-group-item list-group-item-action'
        onClick={()=>getNoteById(note.id)}
        >{note.title}</li>);
};

const mapStateToProps=(state:NotesStore)=>{
    return {

    };
};

const dispathcers={
    getNoteById
};

export default connect(mapStateToProps,dispathcers)( _component);