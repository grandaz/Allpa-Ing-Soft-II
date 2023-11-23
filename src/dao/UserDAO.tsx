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

                userTO.id = item.ID_USER
                userTO.firstName = item.FIRST_NAME
                userTO.lastName = item.LAST_NAME
                userTO.idDocType = item.FK_ID_DOC_TYPE
                userTO.noDoc = item.NO_DOC
                userTO.telephone = item.TELEPHONE
                userTO.email = item.EMAIL
                userTO.password = item.PASSWORD
                userTO.profileImage = item.PROFILE_IMAGE
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

            userTO.id = response.data.ID_USER
            userTO.firstName = response.data.FIRST_NAME
            userTO.lastName = response.data.LAST_NAME
            userTO.idDocType = response.data.FK_ID_DOC_TYPE
            userTO.noDoc = response.data.NO_DOC
            userTO.telephone = response.data.TELEPHONE
            userTO.email = response.data.EMAIL
            userTO.password = response.data.PASSWORD
            userTO.profileImage = response.data.PROFILE_IMAGE
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