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
            //const data = response.data
            //const id = data.idOrder
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

                orderTO.idOrder = item.idOrder
                orderTO.idUser = item.idUser
                orderTO.title = item.title
                orderTO.description = item.description
                orderTO.deliveryDate = item.deliveryDate
                orderTO.address = item.address
                orderTO.fgState = item.fgState
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

            orderTO.idOrder = response.data.idOrder
            orderTO.idUser = response.data.idUser
            orderTO.title = response.data.title
            orderTO.description = response.data.description
            orderTO.deliveryDate = response.data.deliveryDate
            orderTO.address = response.data.address
            orderTO.fgState = response.data.fgState
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