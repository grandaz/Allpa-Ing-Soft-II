import DocTypeDAO from "../dao/DocTypeDAO";
import DocTypeTO from "../to/DocTypeTO";

class DocTypeManager {

    docTypeDAO: DocTypeDAO

    constructor() {
        this.docTypeDAO = new DocTypeDAO()
    }

    create(obj: DocTypeTO) {
        return this.docTypeDAO.create(obj)
    }

    findAll() { 
        return this.docTypeDAO.findAll()
    }

    findOne(id: number) {
        return this.docTypeDAO.findOne(id.toString())
    }

    update(obj: DocTypeTO) {
        return this.docTypeDAO.update(obj)
    }

    remove(id: number) {
        return this.docTypeDAO.remove(id.toString())
    }

}

export default DocTypeManager