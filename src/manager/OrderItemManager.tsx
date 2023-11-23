import OrderItemDAO from "../dao/OrderItemDAO";
import OrderItemTO from "../to/OrderItemTO";

class OrderItemManager {

    orderItemDAO: OrderItemDAO

    constructor() {
        this.orderItemDAO = new OrderItemDAO()
    }

    create(obj: OrderItemTO) {
        return this.orderItemDAO.create(obj)
    }

    findAll() { 
        return this.orderItemDAO.findAll()
    }

    findOne(id: number) {
        return this.orderItemDAO.findOne(id.toString())
    }

    update(obj: OrderItemTO) {
        return this.orderItemDAO.update(obj)
    }

    remove(id: number) {
        return this.orderItemDAO.remove(id.toString())
    }

}

export default OrderItemManager