import { appState } from "../AppState.js";
import { usersServices } from "../Services/UsersServices.js";
import { Pop } from "../Utils/Pop.js";





export class UsersController {
    constructor() {
        //console.log('hello from user controller')
        this.verifyUser()

    }

    async verifyUser() {
        let input = await Pop.prompt('please enter your name')
        usersServices.verifyUser(input)
        //console.log('here end of verifying')
    }
}
