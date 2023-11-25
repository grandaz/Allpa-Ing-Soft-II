import API from "./API";
import OrderParticipantTO from "../to/OrderParticipantTO";

class OrderParticipantDAO {

    endpoint: string

    constructor(){
        this.endpoint = '/orderParticipant'
    }

    async create(obj: OrderParticipantTO) {
        try {
            const response = await API.post(this.endpoint, obj);
            //console.log('POST Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error creando ORDER_PARTICIPANT:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const orderParticipantTO = new OrderParticipantTO();

                orderParticipantTO.id = item.id
                orderParticipantTO.idOrder = item.idOrder
                orderParticipantTO.idUser = item.idUser
                orderParticipantTO.idProduct = item.idProduct
                orderParticipantTO.ammount = item.ammount
                orderParticipantTO.createdAt = item.createdAt
                orderParticipantTO.updatedAt = item.updatedAt

                return orderParticipantTO
            })

            return list;
        } catch (error) {
            console.error('Error listando ORDER_PARTICIPANTs:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const orderParticipantTO = new OrderParticipantTO()

            orderParticipantTO.id = response.data.id
            orderParticipantTO.idOrder = response.data.idOrder
            orderParticipantTO.idUser = response.data.idUser
            orderParticipantTO.idProduct = response.data.idProduct
            orderParticipantTO.ammount = response.data.ammount
            orderParticipantTO.createdAt = response.data.createdAt
            orderParticipantTO.updatedAt = response.data.updatedAt

            return orderParticipantTO;
        } catch (error) {
            console.error('Error buscando al ORDER_PARTICIPANT:', error);
            throw error;
        }
    }

    async update(obj: OrderParticipantTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al ORDER_PARTICIPANT:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al ORDER_PARTICIPANT:', error);
            throw error;
        }
    }

}

export default OrderParticipantDAO