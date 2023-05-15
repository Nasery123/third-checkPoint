import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Note } from "./Models/Note.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])


  /** @type {import('./Models/Note').Note[]} */
  // notes = [
  //   new Note({
  //     user: "Nasery",
  //     noteBody: 'first day of school was good getting introduced with new friends and talking with people  ',
  //     title: 'school Memory',
  //     for: '💻',
  //   }),
  //   new Note({
  //     user: "Rauof",
  //     noteBody: 'we had two tests during the year that some of them were good but some i had been struggling for the whole year',
  //     title: 'school struggles',
  //     for: '📱',
  //   }),
  //   new Note({
  //     user: "Abdul",
  //     noteBody: 'the first tim i went comping with my parents was so great beein out in the dark night',
  //     title: 'comping Memory',
  //     for: '🏠',
  //   }),
  //   new Note({
  //     user: "Abdul",
  //     noteBody: 'this note is just to remind me that every thing takes time to learn ',
  //     title: 'learning new thing',
  //     for: '🏠',
  //   }),
  //   new Note({
  //     user: "Nasery",
  //     noteBody: 'the first time I went out side of the country was amazing trip with my parents,',
  //     title: 'first trip',
  //     for: '🏠',
  //   })
  // ]

  /** @type {import('./Models/Note').Note[]} */
  notes = loadState('notes', [Note])

  /** @type {import('./Models/Note.js').Note|null} */
  activeNote = null;

  user = ''
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
