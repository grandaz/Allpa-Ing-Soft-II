import API from "./API";
import MeasureTO from "../to/MeasureTO";

class MeasureDAO {

    endpoint: string

    constructor(){
        this.endpoint = '/measure'
    }

    async create(obj: MeasureTO) {
        try {
            const response = await API.post(this.endpoint, obj);
            //console.log('POST Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error creando MEASURE:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const measureTO = new MeasureTO();

                measureTO.idMeasure = item.idMeasure
                measureTO.name = item.name
                measureTO.createdAt = item.createdAt
                measureTO.updatedAt = item.updatedAt

                return measureTO
            })

            return list;
        } catch (error) {
            console.error('Error listando MEASUREs:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const measureTO = new MeasureTO()

            measureTO.idMeasure = response.data.idMeasure
            measureTO.name = response.data.name
            measureTO.createdAt = response.data.createdAt
            measureTO.updatedAt = response.data.updatedAt

            return measureTO;
        } catch (error) {
            console.error('Error buscando al MEASURE:', error);
            throw error;
        }
    }

    async update(obj: MeasureTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al MEASURE:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al MEASURE:', error);
            throw error;
        }
    }

}

export default MeasureDAO