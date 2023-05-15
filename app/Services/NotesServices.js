import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { saveState } from "../Utils/Store.js";

function _saveNotes() {
    saveState(('notes', appState.notes))
}
class NotesService {
    CreateNote(formData) {
        console.log(formData.name)
        //appState.userName.push(formData.name)
        let newNote = new Note(formData)
        appState.notes.push(newNote)
        _saveNotes()
        newNote.unlocked = true;
        appState.activeNote = newNote
        appState.emit('notes')
    }


    // saveNote(noteBody) {

    //     let activeNote = appState.activeNote
    //     activeNote.noteBody = noteBody
    //     console.log('here is your note body', activeNote)
    //     //activeNote.unlock = false;
    //     appState.emit('activeNote')
    //     _saveNotes()
    // }



    // setActive(noteID) {
    //     let foundNote = appState.notes.find(n => n.id == noteID)
    //     console.log('here is your active note', foundNote)
    //     appState.activeNote = foundNote;
    //     console.log('appstate AN', appState.activeNote)
    // }


    deleteNote(noteId) {
        let noteToDelete = appState.notes.find(n => n.id == noteId)
        console.log('delete THAT Note', carToDelete)

        appState.notes = appState.notes.filter(n => n.id != noteId)
        _saveNotes()
    }

}
export const notesService = new NotesService
