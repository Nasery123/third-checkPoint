import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Note {
  constructor(data) {
    this.id = data.id || generateId()
    this.user = data.user
    this.noteBody = data.noteBody
    this.title = data.title
    // this.createdAt = data.createdAt || new Date()
    // this.updatedAt = data.updatedAt || new Date()
    this.date = data.date ? new Date(data.date) : new Date()
    this.for = data.for
    this.unlocked = false
    this.color = data.color
  }

  static Addtemplate() {
    return `
      <h3>CREATE NOTE</h3>
      <form onsubmit="app.notesController.CreateNote()">
        <input required minlength="3" maxlength="15" class="form-control" name="title" type="text" placeholder="Title should be 3-15 Character"></input>
        <button type="submit" class="btn btn-success px-1 my-1">CREAT NOTE</button>
      </form>`
  }


  get NotesTemplate() {
    return `

        <div class="col-12">
          <div>
            <p class="total btn" onclick="app.notesController.setActive('${this.id}')">${this.title.toUpperCase()}
            </p>

          </div>

        </div>
        `
  }

  get ActiveNoteTemplate() {
    // <form onsubmit="app.notesController.CreateNote()">
    // <input type="text" name="title" class="form-control">
    // <button type="submit" class="btn btn-secondary">+</button>
    //   </form>
    return `
    <hr>
    <div class="col-md-4 total">


            <div class="row">

              <div class="col-4">
                <p>${this.title}</p>
                <p>created: ${this.ComputedDate}</p>
                <p style="color:${this.color}"> note Color: </p>

                </div>

                <form action="" onsubmit="app.notesController.saveNote()" class="col-8">
                <textarea class="noteBody" type="text" name="noteBody" id="noteBody" cols="50" rows="25" class=" inp form-control-lg my-1" placeholder="create your note here" style="color:${this.color}">${this.noteBody}
                </textarea>
                <input type="color" name="color">
                <div class="d-flex justify-content-between">
                <button class="btn btn-success"  type="submit">SUBMIT</button>
              <button type="button" class="btn btn-danger" onclick="app.notesController.deleteNote('${this.id}')"><i class="mdi mdi-delete"></i></button>
              </div>
              </form>

            </div>
          </div>
  `
  }



  get ComputedDate() {
    let date = this.date
    console.log(date, 'computed date is here')
    return (date.getMonth() + 1) + '/' + (date.getDate())
      + '/' + (date.getFullYear())
  }
}
