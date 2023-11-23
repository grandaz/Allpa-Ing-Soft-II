import API from "./API";
import DocTypeTO from "../to/DocTypeTO";

class DocTypeDAO {

    endpoint: string

    constructor(){
        this.endpoint = '/docType'
    }

    async create(obj: DocTypeTO) {
        try {
            const response = await API.post(this.endpoint, obj);
            //console.log('POST Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error creando DOC_TYPE:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const docTypeTO = new DocTypeTO();

                docTypeTO.idDocType = item.idDocType
                docTypeTO.name = item.name
                docTypeTO.createdAt = item.createdAt
                docTypeTO.updatedAt = item.updatedAt

                return docTypeTO
            })

            return list;
        } catch (error) {
            console.error('Error listando DOC_TYPEs:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const docTypeTO = new DocTypeTO()

            docTypeTO.idDocType = response.data.idDocType
            docTypeTO.name = response.data.name
            docTypeTO.createdAt = response.data.createdAt
            docTypeTO.updatedAt = response.data.updatedAt

            return docTypeTO;
        } catch (error) {
            console.error('Error buscando al DOC_TYPE:', error);
            throw error;
        }
    }

    async update(obj: DocTypeTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al DOC_TYPE:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al DOC_TYPE:', error);
            throw error;
        }
    }

}

export default DocTypeDAO