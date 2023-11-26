import OrderParticipantDAO from "../dao/OrderParticipantDAO";
import OrderParticipantTO from "../to/OrderParticipantTO";
import ProductManager from "./ProductManager";
import ProductTO from "../to/ProductTO";
import OrderItemManager from "./OrderItemManager";
import OrderItemTO from "../to/OrderItemTO";

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

    async findAllComplete(): Promise<OrderParticipantTO[]> {
        
        const productManager = new ProductManager()
        const orderItemManager = new OrderItemManager()

        return Promise.all([
            this.findAll(),
            productManager.findAll(),
            orderItemManager.findAllAndOrder()
        ])
        .then(([orderParticipations, products, orderItems]) => {

            const list = orderParticipations.map((item: OrderParticipantTO) => {
                return {
                  ...item,
                  product: products.find((x: ProductTO) => x.id === item.idProduct),
                  orderItem: orderItems.find((x: OrderItemTO) => x.id === item.idOrderItem)
                }
              })
            console.log("Todas las promesas se han resuelto orderItem:", list);
            return list
        })
        .catch((error) => {
            console.error("Al menos una promesa ha fallado:", error);
            throw error
          });

    }

    async findAllAndProduct(): Promise<ProductTO[]> {
        
        const productManager = new ProductManager()

        return Promise.all([
            this.findAll(),
            productManager.findAll(),
        ])
        .then(([orderParticipations, products]) => {

            const list = orderParticipations.map((item: OrderParticipantTO) => {
                return {
                  ...item,
                  product: products.find((x: ProductTO) => x.id === item.idProduct)
                }
              })
            console.log("Todas las promesas se han resuelto:", list);
            return list
        })
        .catch((error) => {
            console.error("Al menos una promesa ha fallado:", error);
            throw error
          });

    }

}

export default OrderParticipantManager