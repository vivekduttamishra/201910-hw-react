import { Note } from "./note";


export class NotesService{
    private notes:Note[]=[];
    private lastId=0;

    constructor(){

        this.addNote({id:0, title:'Mahatma Gandhi Quotes', text:'Freedom is meaningless if it does not include freedom to make mistakes', tags:'quotes, mahatma gandhi, freedom'});
        this.addNote({id:0, title:'Mahatma Gandhi Quotes 2', text:'First they ignore you, then they laugh at you, then they fight you, then you win!', tags:'quotes, mahatma gandhi, fight'});
        this.addNote({id:0, title:'Compare Redux and Mobx', text:'we need to compare mobx and redux for our project', tags:'todo, project, office'});
    }

    public addNote(note:Note):number{
        note.id=++this.lastId;
        this.notes.push(note);
        return note.id;
    }

    public getAll():Note[]{
        return this.notes;
    }

    public searchTags(tag:string):Note[]{
        tag=tag.toLowerCase();
        return this.notes.filter(n=>n.tags.toLowerCase().indexOf(tag)>=0);
    }

    public getById(id:number):Note|null{
        let note= this.notes.find(n=>n.id===id);
        if (note)
            return note;
        else
            return null;
    }

    public remove(id:number):void{
        this.notes=this.notes.filter(n=>n.id!==id);
    }

}