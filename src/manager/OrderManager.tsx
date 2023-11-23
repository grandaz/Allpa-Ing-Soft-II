import OrderDAO from "../dao/OrderDAO";
import OrderTO from "../to/OrderTO";

class OrderManager {

    orderDAO: OrderDAO

    constructor() {
        this.orderDAO = new OrderDAO()
    }

    create(obj: OrderTO) {
        return this.orderDAO.create(obj)
    }

    findAll() { 
        return this.orderDAO.findAll()
    }

    findOne(id: number) {
        return this.orderDAO.findOne(id.toString())
    }

    update(obj: OrderTO) {
        return this.orderDAO.update(obj)
    }

    remove(id: number) {
        return this.orderDAO.remove(id.toString())
    }

}

export default OrderManager