import ProblemTypeDAO from "../dao/ProblemTypeDAO";
import ProblemTypeTO from "../to/ProblemTypeTO";

class ProblemTypeManager {

    problemTypeDAO: ProblemTypeDAO

    constructor() {
        this.problemTypeDAO = new ProblemTypeDAO()
    }

    create(obj: ProblemTypeTO) {
        return this.problemTypeDAO.create(obj)
    }

    findAll() { 
        return this.problemTypeDAO.findAll()
    }

    findOne(id: number) {
        return this.problemTypeDAO.findOne(id.toString())
    }

    update(obj: ProblemTypeTO) {
        return this.problemTypeDAO.update(obj)
    }

    remove(id: number) {
        return this.problemTypeDAO.remove(id.toString())
    }

}

export default ProblemTypeManager