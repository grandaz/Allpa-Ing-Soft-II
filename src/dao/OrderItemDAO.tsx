import API from "./API";
import OrderItemTO from "../to/OrderItemTO";

class OrderItemDAO {

    endpoint: string

    constructor(){
        this.endpoint = '/orderItem'
    }

    async create(obj: OrderItemTO) {
        try {
            const response = await API.post(this.endpoint, obj);
            //console.log('POST Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error creando ORDER_ITEM:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const orderItemTO = new OrderItemTO();

                orderItemTO.idOrderItem = item.idOrderItem
                orderItemTO.idOrder = item.idOrder
                orderItemTO.idProduct = item.idProduct
                orderItemTO.ammount = item.ammount
                orderItemTO.idMeasure = item.idMeasure
                orderItemTO.createdAt = item.createdAt
                orderItemTO.updatedAt = item.updatedAt

                return orderItemTO
            })

            return list;
        } catch (error) {
            console.error('Error listando ORDER_ITEMs:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const orderItemTO = new OrderItemTO()

            orderItemTO.idOrderItem = response.data.idOrderItem
            orderItemTO.idOrder = response.data.idOrder
            orderItemTO.idProduct = response.data.idProduct
            orderItemTO.ammount = response.data.ammount
            orderItemTO.idMeasure = response.data.idMeasure
            orderItemTO.createdAt = response.data.createdAt
            orderItemTO.updatedAt = response.data.updatedAt

            return orderItemTO;
        } catch (error) {
            console.error('Error buscando al ORDER_ITEM:', error);
            throw error;
        }
    }

    async update(obj: OrderItemTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al ORDER_ITEM:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al ORDER_ITEM:', error);
            throw error;
        }
    }

}

export default OrderItemDAO