import API from "./API";
import ProblemTypeTO from "../to/ProblemTypeTO";

class ProblemTypeDAO {

    endpoint: string

    constructor(){
        this.endpoint = '/problemType'
    }

    async create(obj: ProblemTypeTO) {
        try {
            const response = await API.post(this.endpoint, obj);
            //console.log('POST Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error creando PROBLEM_TYPE:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const problemTypeTO = new ProblemTypeTO();

                problemTypeTO.idProblemType = item.idProblemType
                problemTypeTO.name = item.name
                problemTypeTO.createdAt = item.createdAt
                problemTypeTO.updatedAt = item.updatedAt

                return problemTypeTO
            })

            return list;
        } catch (error) {
            console.error('Error listando PROBLEM_TYPEs:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const problemTypeTO = new ProblemTypeTO()

            problemTypeTO.idProblemType = response.data.idProblemType
            problemTypeTO.name = response.data.name
            problemTypeTO.createdAt = response.data.createdAt
            problemTypeTO.updatedAt = response.data.updatedAt

            return problemTypeTO;
        } catch (error) {
            console.error('Error buscando al PROBLEM_TYPE:', error);
            throw error;
        }
    }

    async update(obj: ProblemTypeTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al PROBLEM_TYPE:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al PROBLEM_TYPE:', error);
            throw error;
        }
    }

}

export default ProblemTypeDAO