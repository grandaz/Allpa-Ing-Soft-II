import API from "./API";
import ParticipationTO from "../to/ParticipationTO";

class ParticipationDAO {

    endpoint: string

    constructor(){
        this.endpoint = '/participation'
    }

    async create(obj: ParticipationTO) {
        try {
            const response = await API.post(this.endpoint, obj);
            //console.log('POST Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error creando PARTICIPATION:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const participationTO = new ParticipationTO();

                participationTO.id = item.ID_PARTICIPATION
                participationTO.idUser = item.FK_ID_USER
                participationTO.idOrderParticipant = item.FK_ID_ORDER_PARTICIPANT
                participationTO.createdAt = item.createdAt
                participationTO.updatedAt = item.updatedAt

                return participationTO
            })

            return list;
        } catch (error) {
            console.error('Error listando PARTICIPATIONs:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const participationTO = new ParticipationTO()

            participationTO.id = response.data.ID_PARTICIPATION
            participationTO.idUser = response.data.FK_ID_USER
            participationTO.idOrderParticipant = response.data.FK_ID_ORDER_PARTICIPANT
            participationTO.createdAt = response.data.createdAt
            participationTO.updatedAt = response.data.updatedAt

            return participationTO;
        } catch (error) {
            console.error('Error buscando al PARTICIPATION:', error);
            throw error;
        }
    }

    async update(obj: ParticipationTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al PARTICIPATION:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al PARTICIPATION:', error);
            throw error;
        }
    }

}

export default ParticipationDAO