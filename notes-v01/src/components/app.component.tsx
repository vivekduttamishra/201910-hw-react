import React from 'react';

import '../styles.css';

import AppHeader from './app-header.component';
import AppFooter from './app-footer.component';
import NotesApp from './notes-app.component';

const _component=(props:any)=>{
    return (
    <div>
        <AppHeader siteTitle='Quick Notes' />
        <NotesApp/>
        <AppFooter 
            copyrightText='Concept Architect' 
            copyrightUrl='http://www.conceptarchitect.in' 
            />
    </div>);
};

export default _component;