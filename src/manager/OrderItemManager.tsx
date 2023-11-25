import OrderItemDAO from "../dao/OrderItemDAO";
import OrderItemTO from "../to/OrderItemTO";
import OrderParticipantTO from "../to/OrderParticipantTO";
import ProductTO from "../to/ProductTO";
import MeasureManager from "./MeasureManager";
import OrderParticipantManager from "./OrderParticipantManager";
import ProductManager from "./ProductManager";
import MeasureTO from "../to/MeasureTO";

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

    async findAllComplete(): Promise<OrderItemTO[]> {
        
        const productManager = new ProductManager()
        const orderParticipantManager = new OrderParticipantManager()
        const measureManager = new MeasureManager()

        return Promise.all([
            this.findAll(),
            productManager.findAll(),
            orderParticipantManager.findAllAndProduct(),
            measureManager.findAll()
        ])
        .then(([ordersItemsData, products, orderParticipantsData, measures]) => {

            const orderItems = ordersItemsData.map((item: OrderItemTO) => {
                return {
                  ...item,
                  product: products.find((x: ProductTO) => x.id === item.idProduct),
                  orderParticipants: orderParticipantsData.filter((x: OrderParticipantTO) => x.idOrderItem === item.id),
                  measure: measures.find((x: MeasureTO) => x.id === item.idMeasure)
                }
              })
            console.log("Todas las promesas se han resuelto orderItem:", orderItems);
            return orderItems
        })
        .catch((error) => {
            console.error("Al menos una promesa ha fallado:", error);
            throw error
          });

    }

}

export default OrderItemManager