import React from 'react';
import { connect } from 'react-redux';
import { addNote} from '../store/action-creators';
import { NotesStore } from '../model/notes-store';
import * as Modes from '../store/modes';
import { Note } from '../model/note';


class _component extends React.Component<any,Note>{

    constructor(props:any){
        super(props);

        let note=this.getNote(props); 

        this.state={...note};

        console.log('note-editor-props', this.props);
        console.log('note-editor-state', this.state);
    };

    getNote=(props:any)=>{
        let note:any=null;
        
        if(props.mode === Modes.MODE_EDIT){
         
            note={...props.currentNote};
        }
        else {
            note={id:0, title:'', text:'', tags:'' };
        }

        return note;
    }

    
    componentWillReceiveProps=(props:any)=>{
        let note=this.getNote(props);
        this.setState({...note});
    };

    handleTitleChange = (e: any) => {
        this.setState({title:e.target.value});
        
    };

    handleTextChange=(e:any)=>{
        let name=e.target.name;
        let value=e.target.value;

        let newState:any={...this.state};
        newState[name]=value;

        console.log(newState);
        this.setState(newState);

    }

    render = () => {
        if (!this.props.currentNote)
            return <div>Loading...</div>;

        return (
            <div className='container editor'>
                Mode: {this.props.mode}
                <h1><input 
                        name='title'
                        onChange={this.handleTextChange} 
                        placeholder='Note Title' 
                        value={this.state.title}
                        /></h1>
                <div className='editor-div'>
                    <textarea 
                    onChange={this.handleTextChange}
                    name='text'
                    placeholder='Your actual note goes here' className='editor-text' value={this.state.text}>
                        
                    </textarea>
                </div>
                <div className='editor-tags'>
                    <input
                    onChange={this.handleTextChange}
                     name='tags'
                     placeholder='add category for the notes' value={this.state.tags} />
                </div>
                <div className='editor-options'>
                    <button 
                    className='btn btn-primary'
                    onClick={()=>this.props.addNote(this.state)}
                    
                    ><i className="fa fa-save"></i> Note</button>
                    <button className='btn btn-danger'><i className="fa fa-trash"></i> Note</button>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state: NotesStore) => {
    return {
        currentNote: state.currentNote,
        mode: state.mode
    };
};

const dispathcers = {
    addNote
};

export default connect(mapStateToProps, dispathcers)(_component);