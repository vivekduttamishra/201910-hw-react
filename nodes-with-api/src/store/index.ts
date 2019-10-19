import {combineReducers,createStore,applyMiddleware} from 'redux';
import {currentNoteReducer,notesReducer,modeReducer} from './reducers'
import reduxPromise from 'redux-promise';


let storeModel= combineReducers({
    notes:notesReducer,
    currentNote:currentNoteReducer,
    mode:modeReducer
});


export const configureStore=()=>{

    return createStore(storeModel,applyMiddleware(reduxPromise));
};


