import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Note {
  constructor(data) {
    this.id = data.id || generateId()
    this.user = data.user
    this.noteBody = data.noteBody
    this.title = data.title
    this.date = data.date

    this.for = data.for
    this.unlocked = false


  }
  // get Addtemplate() {
  //     return `
  //     <h1>Create a Note</h1>
  //     <form onsubmit="app.notesController.CreateNote()">
  //       <textarea type="text"></textarea>
  //       <button type="submit" class="btn btn-success px-1 my-1">log in</button>
  //     </form>`
  // }


  get NotesTemplate() {
    return `

        <div class="col-12">
            <h3>${this.user}</h3>

          <div>
            <p onclick="app.notesController.setActive('${this.id}')">${this.noteBody}
            </p>
            <input type="color" name="color">
          </div>

        </div>`
  }
  //     get ActiveNoteTemplate() {
  //         return `
  //         <div class="col-md-4">
  //         <input class="input">
  //         <button class="btn btn-secondary">+</button>
  //           <div class="row">
  //             <h1>${this.for}</h1>
  //             <div class="col-4">
  //               <p>${this.title}</p>
  //                <input type="color" name="color">
  //             </div>

  //             <form action="" class="col-8">
  //               <textarea type="text" name="noteBody" id="noteBody" cols="30" rows="20" class=" inp form-control-lg my-1" placeholder="create your note here">${this.noteBody}
  //               </textarea>
  //               <button class="btn btn-success" onclick="app.notesController.saveNote()" type="sub
  //             ">SUBMIT</button>
  //             </form>

  //           </div>
  //         </div>
  // `
  //     }



  get ComputedDate() {
    return (date.getMonth() + 1) + '/' + (date.getDate())
      + '/' + (date.getFullYear())
  }
}
