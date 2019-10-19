import React from 'react';
import NoteList from './note-list.component';
import NoteView from './note-view.component';
import NoteEditor from './note-editor.component';
import {connect} from 'react-redux';
import * as Modes from '../store/modes';
import { NotesStore } from '../model/notes-store';

const _component=(props:any)=>{
    console.log('note-app',props);
    const selectView=()=>{
        if(props.mode==Modes.MODE_VIEW)
            return <NoteView/>;
        else if(props.mode==Modes.MODE_EDIT || props.mode==Modes.MODE_CREATE)
            return <NoteEditor/>;
    }

    return (
    <div className='row container'>
        <div className='col-md-3'>
            <NoteList displayRefreshButton={true} />
        </div>
        <div className='col-md-9 note-details'>
            {selectView()}            
        </div>
    </div>);
};

const mapStateToProps=({mode}:NotesStore) =>({mode});

export default connect(mapStateToProps)(_component);

