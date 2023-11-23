import API from "./API";
import OrderTO from "../to/OrderTO";

class OrderDAO {

    endpoint: string

    constructor(){
        this.endpoint = '/order'
    }

    async create(obj: OrderTO) {
        try {
            const response = await API.post(this.endpoint, obj);
            //console.log('POST Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error creando ORDER:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const orderTO = new OrderTO();

                orderTO.id = item.ID_ORDER
                orderTO.idUser = item.FK_ID_USER
                orderTO.title = item.TITLE
                orderTO.description = item.DESCRIPTION
                orderTO.deliveryDate = item.DELIVERY_DATE
                orderTO.address = item.ADDRESS
                orderTO.fgState = item.FG_STATE
                orderTO.createdAt = item.createdAt
                orderTO.updatedAt = item.updatedAt

                return orderTO
            })

            return list;
        } catch (error) {
            console.error('Error listando ORDERs:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const orderTO = new OrderTO()

            orderTO.id = response.data.ID_ORDER
            orderTO.idUser = response.data.FK_ID_USER
            orderTO.title = response.data.TITLE
            orderTO.description = response.data.DESCRIPTION
            orderTO.deliveryDate = response.data.DELIVERY_DATE
            orderTO.address = response.data.ADDRESS
            orderTO.fgState = response.data.FG_STATE
            orderTO.createdAt = response.data.createdAt
            orderTO.updatedAt = response.data.updatedAt

            return orderTO;
        } catch (error) {
            console.error('Error buscando al ORDER:', error);
            throw error;
        }
    }

    async update(obj: OrderTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al ORDER:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al ORDER:', error);
            throw error;
        }
    }

}

export default OrderDAO