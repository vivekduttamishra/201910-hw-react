import React from 'react';
import AppHeader from './app-header.component';
import AppFooter from './app-footer.component';
import NoteApp from './note-app.component';
import NoteEditor from './note-editor.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {MODE_CREATE} from '../store/modes';
import '../style.css';
import { connect } from 'react-redux';
import { getAllNotes } from '../store/action-creators';
import { NotesStore } from '../model/notes-store';
import UserSignIn from './user-signin.component';
import NoteList from './note-list.component';
import NoteView from './note-view.component';



class _component extends React.Component<any> {

    componentDidMount = () => {
        this.props.getAllNotes();
    };



    render = () => {
        return (
            <BrowserRouter>
                <div>
                    <AppHeader
                        siteTitle='Simple Notes'
                    />
                    <div className='body content'>
                    <Switch>
                        <Route path='/' exact  ><NoteList/></Route>
                        <Route path='/note/add'   ><NoteEditor mode={MODE_CREATE} /></Route>
                        <Route path='/note/info' ><NoteView /></Route>
                        <Route path='/user/signin'  ><UserSignIn/></Route>                        
                    </Switch>
                    </div>
                    <AppFooter
                        copyrightText='Concept Architect'
                        copyrightUrl='http://www.conceptarchitect.in'
                    />
                </div>
            </BrowserRouter>
        );
    };
};

const mapStateToProps = (state: NotesStore) => {
    return {

    }
};

const dispatchers = {
    getAllNotes
}

export default connect(mapStateToProps, dispatchers)(_component);
