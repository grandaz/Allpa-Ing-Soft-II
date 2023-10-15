import Base from './base'

class ProductoAPI {

    private endpoint: string;

    constructor() {
        this.endpoint = 'product';
    }

    async create(request: string) {
        return await Base.post(this.endpoint, request);
    }

    
    async findAll() {
        return await Base.get(this.endpoint);
    }

    async findOne(id: string) {
        const newEndpoint = this.endpoint.concat('/',id);
        return await Base.get(newEndpoint);
    };

    async update(request: string){
        return await Base.post(this.endpoint,request);
        // return await Base.put(this.endpoint,request);
    } 

    async remove(id: string) {
        const newEndpoint = this.endpoint.concat('/',id);
        return await Base.remove(newEndpoint);
    }


}

export default ProductoAPI;
