import * as ActionTypes from './action-types';
import * as Modes from './modes';
import { Note } from '../model/note';
import {NotesService} from '../model/notes-service';

//external source
let service=new NotesService();

export const getAllNotes=()=>{
    //Todo: your logic here
    // go and get the notes from the service
    let notes= service.getAll()
    // create action for the reducer
    return{
        type:ActionTypes.ACTION_NOTES_FETCH_ALL,
        notes
    };
};

export const getNoteById=(id:number)=>{
    //Todo: your logic here
    // go and get the notes from the service
    let note= service.getById(id);
    // create action for the reducer
    return{
        type:ActionTypes.ACTION_NOTE_BY_ID,
        note
    };
};


export const changeMode=(mode:string)=>{
    //Mr Reducer please change the mode to what I supply in your store
    return {
        type: ActionTypes.ACTION_SELECT_MODE,
        selectedMode:mode 
    };
}