import ParticipationDAO from "../dao/ParticipationDAO";
import ParticipationTO from "../to/ParticipationTO";

class ParticipationManager {

    participationDAO: ParticipationDAO

    constructor() {
        this.participationDAO = new ParticipationDAO()
    }

    create(obj: ParticipationTO) {
        return this.participationDAO.create(obj)
    }

    findAll() { 
        return this.participationDAO.findAll()
    }

    findOne(id: number) {
        return this.participationDAO.findOne(id.toString())
    }

    update(obj: ParticipationTO) {
        return this.participationDAO.update(obj)
    }

    remove(id: number) {
        return this.participationDAO.remove(id.toString())
    }

}

export default ParticipationManager