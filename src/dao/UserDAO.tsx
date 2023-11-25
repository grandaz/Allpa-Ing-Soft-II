import API from "./API";
import UserTO from "../to/UserTO";

class UserDAO {

    endpoint: string

    constructor(){
        this.endpoint = '/user'
    }

    async create(obj: UserTO) {
        try {
            const response = await API.post(this.endpoint, obj);
            //console.log('POST Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error creando USER:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const userTO = new UserTO();

                userTO.id = item.id
                userTO.firstName = item.firstName
                userTO.lastName = item.lastName
                userTO.idDocType = item.idDocType
                userTO.noDoc = item.noDoc
                userTO.telephone = item.telephone
                userTO.email = item.email
                userTO.password = item.password
                userTO.profileImage = item.profileImage
                userTO.createdAt = item.createdAt
                userTO.updatedAt = item.updatedAt

                return userTO
            })

            return list;
        } catch (error) {
            console.error('Error listando USERs:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const userTO = new UserTO()

            userTO.id = response.data.id
            userTO.firstName = response.data.firstName
            userTO.lastName = response.data.lastName
            userTO.idDocType = response.data.idDocType
            userTO.noDoc = response.data.noDoc
            userTO.telephone = response.data.telephone
            userTO.email = response.data.email
            userTO.password = response.data.password
            userTO.profileImage = response.data.profileImage
            userTO.createdAt = response.data.createdAt
            userTO.updatedAt = response.data.updatedAt

            return userTO;
        } catch (error) {
            console.error('Error buscando al USER:', error);
            throw error;
        }
    }

    async update(obj: UserTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al USER:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al USER:', error);
            throw error;
        }
    }

}

export default UserDAO