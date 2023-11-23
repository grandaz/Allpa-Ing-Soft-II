import MeasureDAO from "../dao/MeasureDAO";
import MeasureTO from "../to/MeasureTO";

class MeasureManager {

    measureDAO: MeasureDAO

    constructor() {
        this.measureDAO = new MeasureDAO()
    }

    create(obj: MeasureTO) {
        return this.measureDAO.create(obj)
    }

    findAll() { 
        return this.measureDAO.findAll()
    }

    findOne(id: number) {
        return this.measureDAO.findOne(id.toString())
    }

    update(obj: MeasureTO) {
        return this.measureDAO.update(obj)
    }

    remove(id: number) {
        return this.measureDAO.remove(id.toString())
    }

}

export default MeasureManager