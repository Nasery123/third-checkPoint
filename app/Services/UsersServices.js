import { appState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"
class UsersServices {
    verifyUser(input) {
        let people = appState.people

        for (const person in people) {
            if (people[person] == input) {
                Pop.toast('you are good to go')

                appState.user = person
                //console.log('here')
                return

            }
        } Pop.error('please enter the right persone');
    }
}





export const usersServices = new UsersServices()
