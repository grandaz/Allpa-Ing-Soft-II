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
            console.error('Error creando usuario:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const orderItemTO = new OrderItemTO();

                orderItemTO.id = item.ID_ORDER_ITEM
                orderItemTO.idOrder = item.FK_ID_ORDER
                orderItemTO.idProduct = item.FK_ID_PRODUCT
                orderItemTO.ammount = item.AMMOUNT
                orderItemTO.idMeasure = item.FK_ID_MEASURE
                orderItemTO.createdAt = item.createdAt
                orderItemTO.updatedAt = item.updatedAt

                return orderItemTO
            })

            return list;
        } catch (error) {
            console.error('Error listando usuarios:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const orderItemTO = new OrderItemTO()

            orderItemTO.id = response.data.ID_ORDER_ITEM
            orderItemTO.idOrder = response.data.FK_ID_ORDER
            orderItemTO.idProduct = response.data.FK_ID_PRODUCT
            orderItemTO.ammount = response.data.AMMOUNT
            orderItemTO.idMeasure = response.data.FK_ID_MEASURE
            orderItemTO.createdAt = response.data.createdAt
            orderItemTO.updatedAt = response.data.updatedAt

            return orderItemTO;
        } catch (error) {
            console.error('Error buscando al usuario:', error);
            throw error;
        }
    }

    async update(obj: OrderItemTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al usuario:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al usuario:', error);
            throw error;
        }
    }

}

export default OrderItemDAO