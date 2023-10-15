import Base from './base'

class ProductoAPI {

    private static endpoint: string = '/product';

    static async create(request: string) {
        return await Base.post(this.endpoint, request);
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

export default ProductoAPI;
