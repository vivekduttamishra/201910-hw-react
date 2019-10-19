import React from 'react';
import AppHeader from './app-header.component';
import AppFooter from './app-footer.component';
import NoteApp from './note-app.component';
import '../style.css';
import { connect } from 'react-redux';
import { getAllNotes } from '../store/action-creators';
import { NotesStore } from '../model/notes-store';
import UserSignIn from './user-signin.component';
import {MODE_SIGNIN} from '../store/modes';


class _component extends React.Component<any> {

    componentDidMount=()=>{
        this.props.getAllNotes();
    };

    selectView=()=>{
        if(this.props.mode===MODE_SIGNIN)
            return <UserSignIn/>;
        else
            return <NoteApp/>;
    }

    render = () => {
        return (
            <div>
                <AppHeader
                    siteTitle='Simple Notes'
                />
                <div className='body content'>
                    {this.selectView()}
                </div>
                <AppFooter
                    copyrightText='Concept Architect'
                    copyrightUrl='http://www.conceptarchitect.in'
                />
            </div>
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
