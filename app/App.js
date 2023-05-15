import { NotesController } from "./Controllers/NotesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { UsersController } from "./Controllers/UsersController.js";

class App {
  //valuesController = new ValuesController();
  usersController = new UsersController();
  notesController = new NotesController();
}

window["app"] = new App();
