import { Note } from "../model/note";
import * as Modes from './modes';
import * as ActionTypes from './action-types';



export const notesReducer=(previousState:Note[]=[], action:any)=>{
    switch(action.type){
        case ActionTypes.ACTION_NOTES_FETCH_ALL:
            return action.notes; //this will repalce the old state
        default:
            return previousState;
    }
};

export const currentNoteReducer=(previousState:Note|null=null, action:any)=>{
    switch(action.type){
        case ActionTypes.ACTION_NOTES_FETCH_ALL:
            if(action.notes.length>0)
                return action.notes[0]; //this is now the current note
            break;
        case ActionTypes.ACTION_NOTE_BY_ID:
            return action.note;
        default:
            return previousState;
    }

    return previousState;
};

export const currentUserReducer=(previousState:string|null=null, action:any)=>{

};

export const modeReducer=(previousState=Modes.MODE_VIEW, action:any)=>{
    switch(action.type){
        case ActionTypes.ACTION_SELECT_MODE:
            return action.selectedMode;

        case ActionTypes.ACTION_NOTES_FETCH_ALL:
            if(action.notes.length>0)
                return Modes.MODE_VIEW;
        default:
            return previousState;
    }
};