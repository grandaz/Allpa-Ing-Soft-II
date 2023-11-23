import API from "./API";
import SupportTO from "../to/SupportTO";

class SupportDAO {

    endpoint: string

    constructor(){
        this.endpoint = '/support'
    }

    async create(obj: SupportTO) {
        try {
            const response = await API.post(this.endpoint, obj);
            //console.log('POST Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error creando SUPPORT:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const supportTO = new SupportTO();

                supportTO.id = item.ID_SUPPORT
                supportTO.firstName = item.FIRST_NAME
                supportTO.lastName = item.LAST_NAME
                supportTO.idProblemType = item.FK_ID_PROBLEM_TYPE
                supportTO.description = item.DESCRIPTION
                supportTO.fgPresential = item.FG_PRESENTIAL
                supportTO.createdAt = item.createdAt
                supportTO.updatedAt = item.updatedAt

                return supportTO
            })

            return list;
        } catch (error) {
            console.error('Error listando SUPPORTs:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const supportTO = new SupportTO()

            supportTO.id = response.data.ID_SUPPORT
            supportTO.firstName = response.data.FIRST_NAME
            supportTO.lastName = response.data.LAST_NAME
            supportTO.idProblemType = response.data.FK_ID_PROBLEM_TYPE
            supportTO.description = response.data.DESCRIPTION
            supportTO.fgPresential = response.data.FG_PRESENTIAL
            supportTO.createdAt = response.data.createdAt
            supportTO.updatedAt = response.data.updatedAt

            return supportTO;
        } catch (error) {
            console.error('Error buscando al SUPPORT:', error);
            throw error;
        }
    }

    async update(obj: SupportTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al SUPPORT:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al SUPPORT:', error);
            throw error;
        }
    }

}

export default SupportDAO