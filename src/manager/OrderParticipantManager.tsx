import OrderParticipantDAO from "../dao/OrderParticipantDAO";
import OrderParticipantTO from "../to/OrderParticipantTO";

class OrderParticipantManager {

    orderParticipantDAO: OrderParticipantDAO

    constructor() {
        this.orderParticipantDAO = new OrderParticipantDAO()
    }

    create(obj: OrderParticipantTO) {
        return this.orderParticipantDAO.create(obj)
    }

    findAll() { 
        return this.orderParticipantDAO.findAll()
    }

    findOne(id: number) {
        return this.orderParticipantDAO.findOne(id.toString())
    }

    update(obj: OrderParticipantTO) {
        return this.orderParticipantDAO.update(obj)
    }

    remove(id: number) {
        return this.orderParticipantDAO.remove(id.toString())
    }

}

export default OrderParticipantManager