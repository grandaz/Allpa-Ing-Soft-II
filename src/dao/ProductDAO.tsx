import API from "./API";
import ProductTO from "../to/ProductTO";

class ProductDAO {

    endpoint: string

    constructor(){
        this.endpoint = '/product'
    }

    async create(obj: ProductTO) {
        try {
            const response = await API.post(this.endpoint, obj);
            //console.log('POST Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error creando PRODUCT:', error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const response = await API.get(this.endpoint)

            const list = response.data.map((item: any) => {
                const productTO = new ProductTO();

                productTO.id = item.ID_PRODUCT
                productTO.name = item.NAME
                productTO.image = item.IMAGE
                productTO.description = item.DESCRIPTION
                productTO.createdAt = item.createdAt
                productTO.updatedAt = item.updatedAt

                return productTO
            })

            return list;
        } catch (error) {
            console.error('Error listando PRODUCTs:', error);
            throw error;
        }
        
    }

    async findOne(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.get(newEndpoint);

            const productTO = new ProductTO()

            productTO.id = response.data.ID_PRODUCT
            productTO.name = response.data.NAME
            productTO.image = response.data.IMAGE
            productTO.description = response.data.DESCRIPTION
            productTO.createdAt = response.data.createdAt
            productTO.updatedAt = response.data.updatedAt

            return productTO;
        } catch (error) {
            console.error('Error buscando al PRODUCT:', error);
            throw error;
        }
    }

    async update(obj: ProductTO){
        try {
            const response = await API.put(this.endpoint, obj);
            return response;
        } catch (error) {
            console.error('Error actualizando al PRODUCT:', error);
            throw error;
        }
    } 

    async remove(id: string) {
        try {
            const newEndpoint = this.endpoint.concat('/', id);
            const response = await API.remove(newEndpoint);
            return response;
        } catch (error) {
            console.error('Error eliminando al PRODUCT:', error);
            throw error;
        }
    }

}

export default ProductDAO