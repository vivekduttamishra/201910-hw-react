import React from 'react';
import {connect} from 'react-redux';
import {} from '../store/action-creators';
import { NotesStore } from '../model/notes-store';


const _component=(props:any)=>{
    return (<div>
        note list
    </div>);
};

const mapStateToProps=(state:NotesStore)=>{
    return {

    };
};

const dispathcers={

};

export default connect(mapStateToProps,dispathcers)( _component);