import { appState } from "../AppState.js"
import { notesService } from "../Services/NotesServices.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawaddNoteTemplate() {
    setHTML('addtemplate', appState.activeNote?.Addtemplate)
}

function _drawNotesTemplate() {
    // window.event.preventDefault()
    //console.log('not connected')
    let notes = appState.notes
    console.log('the user', appState.user)
    console.log('all notes', appState.notes)

    let template = ''
    let filterNotes = notes.filter(n => n.user == appState.user)

    filterNotes.forEach(n => template += n.NotesTemplate)

    setHTML('notes', template)
}
function _drawActiveNote() {
    let note = appState.activeNote
    if (!note) { return }
    //console.log('drawing active note function')
    // console.log('drawing active', appState.activeNote.ActiveNoteTemplate)
    setHTML('activeNote', note.ActiveNoteTemplate)
    // if(activeNote.unlocked){
    // setHTML('activeNote', Note.ActiveNoteTemplate)


}



export class NotesController {
    constructor() {
        //console.log('your controller is connected')
        appState.on('user', _drawNotesTemplate)
        //console.log('here is after draw')
        appState.on('notes', _drawNotesTemplate)
        // console.log('end of notescontroll')
        //_drawNotesTemplate()

        appState.on('activeNote', _drawActiveNote)
    }





    CreateNote() {
        // @ts-ignore
        window.event.preventDefault()
        let form = event.target
        let formData = getFormData(form)
        // @ts-ignore
        formData.user = appState.user
        // console.log('here is your use name part')
        notesService.CreateNote(formData)
        // form.removeEventListener()
        // @ts-ignore
        form.reset()
        document.querySelector('.reportBody').focus()
    }

    addNoteTemplate() {
        window.event.preventDefault()
        let form = event.target
        let formData = getFormData(form)
        formData.user = appState.userName
        notesService.CreateNote(formData)
    }


    setActive(noteID) {
        console.log('set active controller', noteID)
        notesService.setActive(noteID)
        _drawActiveNote()
    }
    saveNote() {
        window.event.preventDefault()
        let report = document.getElementById('noteBody')
        let reportBody = report.value
        notesService.saveNote(reportBody)
    }



    async deleteNote(NoteId) {

        if (await Pop.confirm("Are you sure about that?")) {
            notesService.deleteNote(NoteId)
        }
    }
}
