import Base from './base'


class UserAPI {
    static endpoint: string = '/user';

    static async create(request: string) {
        return await Base.post(UserAPI.endpoint, request);
    } 

    static async findAll() {
        await Base.get(UserAPI.endpoint);
    }

    static async findOne(id: string) {
        const newEndpoint = UserAPI.endpoint.concat('/', id);
        
        return await Base.get(newEndpoint);
    };

    static async update(request: string) {
        return await Base.post(UserAPI.endpoint, request);
    } 

    static async remove(id: string) {
        const newEndpoint = UserAPI.endpoint.concat('/',id);
    
        return await Base.remove(newEndpoint);
    }
    
}

export default UserAPI;
