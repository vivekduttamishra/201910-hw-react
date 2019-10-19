import {createStore, combineReducers} from 'redux';

console.log('hello redux world');

interface Note{
    id:number;
	title:string;
	body:string;
	tags:string; //| string [] //comma separted of different array element
}

interface Store{
    notes: Note[];
    currentNode:Node|null;
    currentUser:string|null;
}


//------------------   actions creators -------------------

let _notes:Note[]=[
    {id:1,title:'Learn Typescript', body:'I need to learn typescript', tags:'javascript, typescript'},
    {id:2,title:'Learn React', body:'I need to learn React', tags:'javascript, react'},
    {id:3,title:'Implement Redux in my react store', body:'replace mbox with react', tags:'redux, react,mobx'},
    {id:4,title:'Important redux links', body:'These are some important redux links', tags:'redux, links, bookmarks'}
]


const FETCH_ALL_NOTES='FETCH_ALL_NOTES';
const getAllNotes=()=>{ //action creator
    console.log('action:getAllNotes');
    return { //action
        type: FETCH_ALL_NOTES,
        notes:_notes
    }
};
const FETCH_SELECTED_NOTES='FETCH_SELECTED_NOTES';
const getNotesByTag=(tag:string)=>{ //action creator
    console.log('action:getNotesByTag');
    let selected= _notes.filter(n=> n.tags.toLowerCase().indexOf(tag.toLowerCase())>=0);
    return {
        type:FETCH_SELECTED_NOTES,
        selected
    };
};

const SELECT_NOTE='SELECT_NOTE';
const getNoteById=(id:number)=>{

    let note= _notes.find(n=>n.id===id);
    console.log('action:getNotesById');
    return {
        type:SELECT_NOTE,
        note
    };
}

const USER_LOGIN='USER_LOGIN';
const login=(username:string,password:string)=>{
    console.log('action:login');
    let success=username.length===password.length && username!==password;
    let name= success?username:null;
    return {
        type:USER_LOGIN,
        success,name
    };
}

const USER_LOGOUT='USER_LOGOUT';
const logout=()=>{
    console.log('action:logout');
    return {
        type:USER_LOGOUT    
    };
}


//---------------  REDUCERS --------------------------------

//key:notes: Note[] ---> should update notes only
//associated actions are getAllNotes, getNotesByTag
const notesReducer=(storeNotes=[], action:any)=>{
    console.log('reducer:notes', storeNotes,action);
    switch(action.type){
        case FETCH_ALL_NOTES:
            return action.notes; //sthis value will be assigned to store.notes
        case USER_LOGOUT:
            return [];
        case FETCH_SELECTED_NOTES:
            return action.selected; //this value will be assigned to store.notes

        default: //I dont handle this thing
            return storeNotes;
    }
};

//key: selected Note
const selectedNoteReducer=(selectedNote:any=null, action:any )=>{
    console.log('reducer:selectedNote', selectedNote,action);
    switch(action.type){
        case SELECT_NOTE:
            return action.note;
        default:
            return selectedNote;
    }
};

//key: currentUser
const currentUserReducer=(currentUser:any=null, action:any )=>{
    console.log('reducer:currentUser', currentUser,action);
    switch(action.type){
        case USER_LOGIN:
            if (action.success)
                return action.name;
            else
                return null;
        case USER_LOGOUT:
            return null; //currentUser will become null
        default:
            return currentUser;
    }
}

//-------------  Time for Redux Configuration

//Step 1 ---> define your store structure by mapping key:reducer

let storeModel= combineReducers({
    notes:notesReducer,
    selectedNote:selectedNoteReducer,
    currentUser:currentUserReducer
});

let store=createStore(storeModel);

//-------------- Client Call  -------------
console.clear();
console.log('client proram started');
console.log('INITIAL STORE',store.getState());

console.log('calling getAllNotes()');
getAllNotes();
console.log(store.getState());



store.dispatch(getAllNotes());
console.log(store.getState());

store.dispatch(login('vivek','vivek'));
console.log(store.getState());

store.dispatch(login('Vivek','admin'));
console.log(store.getState());

store.dispatch(logout());
console.log(store.getState());
