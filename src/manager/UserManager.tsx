import UserDAO from "../dao/UserDAO";
import UserTO from "../to/UserTO";

class UserManager {

    userDAO: UserDAO

    constructor() {
        this.userDAO = new UserDAO()
    }

    create(obj: UserTO) {
        return this.userDAO.create(obj)
    }

    findAll() { 
        return this.userDAO.findAll()
    }

    findOne(id: number) {
        return this.userDAO.findOne(id.toString())
    }

    update(obj: UserTO) {
        return this.userDAO.update(obj)
    }

    remove(id: number) {
        return this.userDAO.remove(id.toString())
    }

    

}

export default UserManager