import * as ActionTypes from './action-types';
import * as Modes from './modes';
import { Note } from '../model/note';
import {NotesService} from '../model/notes-service';

//external source
let service=new NotesService();

export const getAllNotes=()=>{
    //Todo: your logic here
    // go and get the notes from the server
    let promise= service.getAll() ; //you WILL get a data in future. I Promise

    //you dont get notes, you get a promise that you will get note in future
    console.log('now returning ACTION with', promise);
    return{
        type:ActionTypes.ACTION_NOTES_FETCH_ALL,
        payload:promise
    };
};

export const getNoteById=(id:number)=>{
    //Todo: your logic here
    // go and get the notes from the service
    let note= service.getById(id);
    // create action for the reducer
    return{
        type:ActionTypes.ACTION_NOTE_BY_ID,
        payload:note
    };
};
//let lastId=3;

export const addNote=(note:Note)=>{
    //Todo: your logic here
    service.addNote(note);
    //note.id=++lastId;
    return{
        type:ActionTypes.ACTION_NOTE_ADDED,
        note
    };
};

export const removeNote=(id:number)=>{
    //Todo: your logic here
    service.remove(id);
    return{
        type:ActionTypes.ACTION_NOTE_DELETE,
        id
    };
};

export const updateNote=(note:Note)=>{
    //Todo: your logic here
    
    return{
        type:ActionTypes.ACTION_NOTE_EDIT,
        note
    };
};

export const login=(username:string,password:string)=>{
    //Todo: your logic here
    
    return{
        type:ActionTypes.ACTION_USER_SIGNIN,
        username,
        status: username.length===password.length && username!==password    
    };
};

export const logout=()=>{
    //Todo: your logic here
    
    return{
        type:ActionTypes.ACTION_USER_SIGNOUT        
    };
};


export const changeMode=(mode:string)=>{
    //Mr Reducer please change the mode to what I supply in your store
    return {
        type: ActionTypes.ACTION_SELECT_MODE,
        selectedMode:mode 
    };
}