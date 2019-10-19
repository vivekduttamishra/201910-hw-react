import {combineReducers,createStore} from 'redux';
import {currentNoteReducer,notesReducer,modeReducer} from './reducers'



let storeModel= combineReducers({
    notes:notesReducer,
    currentNote:currentNoteReducer,
    modeReducer:modeReducer
});


export const configureStore=()=>{

    return createStore(storeModel);
};


