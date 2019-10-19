import React from 'react';
import NoteList from './note-list.component';
import NoteView from './note-view.component';

const _component=(props:any)=>{
    return (
    <div className='container row'>
        <div className='col-md-3'>
            <NoteList/>
        </div>
        <div className='col-md-9'>
            <NoteView/>
        </div>
        
    </div>);
};

export default _component;