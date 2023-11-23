import Base from './base'

class OrderAPI {

    private static endpoint: string = '/order';
    /*
    static async create(request: string) {
        return await Base.post(this.endpoint, request);
    }
    */
    
    static async create(orderDetailObj: any) {
        try {
            // Ensure that orderDetailObj matches the expected structure of your API and database
            const response = await Base.post(this.endpoint, orderDetailObj);
            console.log('POST Response:', response); // Log the response for debugging
            return response.data;
        } catch (error) {
            console.error('Error creating order detail:', error);
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

export default OrderAPI;
