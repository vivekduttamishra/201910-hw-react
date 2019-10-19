import { Note } from "../model/note";
import * as Modes from './modes';
import * as ActionTypes from './action-types';



export const notesReducer=(previousState:Note[]=[], action:any)=>{

    
    switch(action.type){
        case ActionTypes.ACTION_NOTES_FETCH_ALL:
            //console.log('refetching content from the source', action);
            return action.payload; //this will repalce the old state

        case ActionTypes.ACTION_NOTE_ADDED:
            return [...previousState,action.note];

        

        case ActionTypes.ACTION_NOTE_DELETE:
            return previousState.filter((note:Note)=>note.id!==action.id);
            break;


        default:
            return previousState;
    }
};

export const currentNoteReducer=(previousState:Note|null=null, action:any)=>{
    switch(action.type){
        case ActionTypes.ACTION_NOTE_DELETE:
            return null;
        case ActionTypes.ACTION_NOTES_FETCH_ALL:
            if(action.payload.length>0)
                return action.payload[0]; //this is now the current note
            break;
        
        
        case ActionTypes.ACTION_NOTE_ADDED:
        case ActionTypes.ACTION_NOTE_BY_ID:
            return action.payload;
        default:
            return previousState;
    }

    return previousState;
};

export const currentUserReducer=(previousState:string|null=null, action:any)=>{
    switch(action.type){
        case ActionTypes.ACTION_USER_SIGNIN:
            if(action.status)
                return action.username;
            else
                return null;
        case ActionTypes.ACTION_USER_SIGNOUT:
            return null;
        default:
            return previousState;
    }
};

export const modeReducer=(previousState=Modes.MODE_CREATE, action:any)=>{
    switch(action.type){
        case ActionTypes.ACTION_SELECT_MODE:
            return action.selectedMode;

        case ActionTypes.ACTION_NOTE_DELETE:
            return Modes.MODE_CREATE;

        case ActionTypes.ACTION_NOTES_FETCH_ALL:
            if(action.payload.length>0)
                return Modes.MODE_EDIT;

        case ActionTypes.ACTION_NOTE_BY_ID:
            return Modes.MODE_VIEW;
        case ActionTypes.ACTION_NOTE_ADDED:
            return Modes.MODE_VIEW;
        default:
            return previousState;
    }
};