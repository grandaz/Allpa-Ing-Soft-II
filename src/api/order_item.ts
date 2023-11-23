import Base from './base'

class OrderItemAPI {
    static endpoint = '/orderItem';

    static async create(orderItemsObj: any) {
        try {
            // Ensure that orderItemsObj matches the expected structure of your API and database
            const response = await Base.post(this.endpoint, orderItemsObj);
            console.log('POST Response:', response); // Log the response for debugging
            return response.data;
        } catch (error) {
            console.error('Error creating order items:', error);
            throw error;
        }
    }

    static async findAll() {
        return await Base.get(this.endpoint);
    }

    static async findOne(id: string) {
        const newEndpoint = this.endpoint.concat('/',id);
        return await Base.get(newEndpoint);
    };

    static async update(request: string){
        return await Base.post(this.endpoint,request);
    } 

    static async remove(id: string) {
        const newEndpoint = this.endpoint.concat('/',id);
        return await Base.remove(newEndpoint);
    }
}

export default OrderItemAPI;