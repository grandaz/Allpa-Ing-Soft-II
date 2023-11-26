import ParticipationDAO from "../dao/ParticipationDAO";
import ParticipationTO from "../to/ParticipationTO";
import OrderParticipantManager from "./OrderParticipantManager";
import OrderItemManager from "./OrderItemManager";
import OrderManager from "./OrderManager";
import OrderParticipantTO from "../to/OrderParticipantTO";
import OrderTO from "../to/OrderTO";

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

    async findAllComplete(): Promise<ParticipationTO[]> {
        
        const orderParticipantManager = new OrderParticipantManager()

        return Promise.all([
            this.participationDAO.findAll(),
            orderParticipantManager.findAllComplete()
        ])
        .then(([participationsData, orderParticipants]) => {
            const orders = participationsData.map((item: ParticipationTO) => {
                return {
                  ...item,
                  orderParticipants: orderParticipants.filter((x: OrderParticipantTO) => x.id === item.idOrderParticipant),
                }
              })
            console.log("Todas las promesas se han resuelto:", orders);
            return orders
        })
        .catch((error) => {
            console.error("Al menos una promesa ha fallado:", error);
            throw error
          });
        

    }

    async findAllAndOrderXUser(iduser: number): Promise<ParticipationTO[]> {
        
        const orderManager = new OrderManager()

        return Promise.all([
            this.participationDAO.findAll(),
            orderManager.findAllComplete()
        ])
        .then(([participationsData, ordersData]) => {
            console.log("ordenes completas:", participationsData);

            const ordenesDelUser = participationsData.filter((x: ParticipationTO) => x.idUser === iduser)
            console.log("ordenes user:", ordenesDelUser);
            const ordenesFiltradas = ordenesDelUser.filter((part: ParticipationTO, index: number, self: ParticipationTO[]) => {
                console.log(index)
                return index === self.findIndex((o: ParticipationTO) => o.idOrder === part.idOrder)
            })


            console.log("ordenes filtradas:", ordenesFiltradas);
            const orders = ordenesFiltradas.map((item: ParticipationTO) => {
                return {
                  ...item,
                  order: ordersData.find((x: OrderTO) => x.id === item.idOrder),
                }
              })
            console.log("Todas las promesas se han resuelto:", orders);
            return orders
        })
        .catch((error) => {
            console.error("Al menos una promesa ha fallado:", error);
            throw error
          });
        

    }

}

export default ParticipationManager