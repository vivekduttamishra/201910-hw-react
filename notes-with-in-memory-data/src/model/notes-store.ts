import { Note } from "./note";

export interface NotesStore{
	notes: Note[],
	currentNote: Note|null;
    currentUser:string|null;
    mode:string
};