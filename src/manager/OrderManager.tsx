import OrderDAO from "../dao/OrderDAO";
import OrderTO from "../to/OrderTO";
import UserManager from "./UserManager";
import OrderItemManager from "./OrderItemManager";
import OrderParticipantManager from "./OrderParticipantManager";
import UserTO from "../to/UserTO";
import OrderItemTO from "../to/OrderItemTO";
import OrderParticipantTO from "../to/OrderParticipantTO";

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

    async findAllComplete(): Promise<OrderTO[]> {
        
        const userManager = new UserManager()
        const orderItemManager = new OrderItemManager()
        const orderParticipantManager = new OrderParticipantManager()

        return Promise.all([
            this.orderDAO.findAll(),
            userManager.findAll(),
            orderItemManager.findAll(),
            orderParticipantManager.findAll()
        ])
        .then(([ordersData, users, orderItems, orderParticipants]) => {

            const orders = ordersData.map((item: OrderTO) => {
                return {
                  ...item,
                  user: users.find((x: UserTO) => x.idUser === item.idUser),
                  orderItems: orderItems.filter((x: OrderItemTO) => x.idOrder === item.idOrder),
                  orderParticipants: orderParticipants.filter((x: OrderParticipantTO) => x.idOrder === item.idOrder),
                }
              })
            //console.log("Todas las promesas se han resuelto:", orders);
            return orders
        })
        .catch((error) => {
            console.error("Al menos una promesa ha fallado:", error);
            throw error
          });
        

    }

    async findAllXProductXUser(idProduct: number, name: string): Promise<OrderTO[]> {
        console.log(name)
        return this.findAllComplete()
            .then((orders: OrderTO[]) => {
                let finalList
                if (idProduct == 0 && name != '') {
                    console.log('filtrar solo por nombre')
                    finalList = orders.filter((order: OrderTO) => order.user?.firstName === name);
                } else if (idProduct != 0 && name == '') {
                    // filtrar solo por producto
                    console.log('filtrar solo por producto')
                    finalList = orders.filter((order: OrderTO) => {
                        return order.orderItems?.some((item: OrderItemTO) => item.idProduct === idProduct);
                      });
                } else if (idProduct != 0 && name != '') {
                    console.log('filtrar por ambos')
                    const tmpList = orders.filter((order: OrderTO) => order.user?.firstName === name);
                    finalList = tmpList.filter((order: OrderTO) => {
                        return order.orderItems?.some((item: OrderItemTO) => item.idProduct === idProduct);
                    });
                    //filtrar por ambos
                } else {
                    console.log('sin filtro')
                    finalList = orders
                }
                console.log(finalList)
                return finalList
            })
            .catch((error) => {
                console.error("Al menos una promesa ha fallado:", error);
                throw error
              });
    }

}

export default OrderManager