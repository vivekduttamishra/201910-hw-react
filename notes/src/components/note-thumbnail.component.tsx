import React from 'react';
import { connect } from 'react-redux';
import { getNoteById } from '../store/action-creators';
import { NotesStore } from '../model/notes-store';
import { Link } from 'react-router-dom';

const _component = ({ note, getNoteById }: any) => {
    return (
        <Link to={`/note/info/${note.id}`} >
            <li className='list-group-item list-group-item-action' >{note.title}</li>
        </Link>);
};

const mapStateToProps = (state: NotesStore) => {
    return {

    };
};

const dispathcers = {
    getNoteById
};

export default connect(mapStateToProps, dispathcers)(_component);