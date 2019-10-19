import React from 'react';
import AppHeader from './app-header.component';
import AppFooter from './app-footer.component';
import NoteApp from './note-app.component';
import '../style.css';

const _component=(props:any)=>{
    return (
    <div>
        <AppHeader
            siteTitle='Simple Notes'
        />
        <div className='body content'>
            <NoteApp/>
        </div>
        <AppFooter 
                copyrightText='Concept Architect' 
                copyrightUrl='http://www.conceptarchitect.in' 
                />
    </div>
    );
};

export default _component;