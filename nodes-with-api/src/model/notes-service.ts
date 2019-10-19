import { Note } from "./note";
import * as config from '../config';


export class NotesService{
   
    getUrl(id:any=''){
        return `${config.NOTES_BASE_URL}/${id}?key=${config.NOTES_API_KEY}`;
    }

    constructor(){

        
    }

    private convertToNotes(list:any[]){
        return list.map(data=>({id:data.id, title:data.title, text:data.content, tags:data.categories}));
    }

    public addNote(note:Note):number{
        return 0;
    }

    public getAll():Promise<any>{
        let url=this.getUrl();
        return fetch(url)
                .then(httpResponse=> httpResponse.json()) //you get json in format {id, title, content,categories}
                .then(this.convertToNotes) ;

    }

    public searchTags(tag:string):Note[]{
        return [];
    }

    public getById(id:number):Promise<any>{
        const url=this.getUrl(id);
        return fetch(url)
                  .then(response=>response.json())
                  .then(data=>({id:data.id, title:data.title, text:data.content, tags:data.categories}));
    }

    public remove(id:number):void{
        
    }

}