import React from 'react';
import NoteList from './note-list.component';
import NoteView from './note-view.component';
import NoteEditor from './note-editor.component';
import UserSignIn from './user-signin.component';

const _component=(props:any)=>{
    return (
    <div className='row container'>
        <div className='col-md-3'>
            <NoteList displayRefreshButton={true} />
        </div>
        <div className='col-md-9 note-details'>
            <NoteView/>
        </div>
    </div>);
};

export default _component;