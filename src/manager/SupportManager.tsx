import SupportDAO from "../dao/SupportDAO";
import SupportTO from "../to/SupportTO";

class SupportManager {

    supportDAO: SupportDAO

    constructor() {
        this.supportDAO = new SupportDAO()
    }

    create(obj: SupportTO) {
        return this.supportDAO.create(obj)
    }

    findAll() { 
        return this.supportDAO.findAll()
    }

    findOne(id: number) {
        return this.supportDAO.findOne(id.toString())
    }

    update(obj: SupportTO) {
        return this.supportDAO.update(obj)
    }

    remove(id: number) {
        return this.supportDAO.remove(id.toString())
    }

}

export default SupportManager