import ProductDAO from "../dao/ProductDAO";
import ProductTO from "../to/ProductTO";

class ProductManager {

    productDAO: ProductDAO

    constructor() {
        this.productDAO = new ProductDAO()
    }

    create(obj: ProductTO) {
        return this.productDAO.create(obj)
    }

    findAll() { 
        return this.productDAO.findAll()
    }

    findOne(id: number) {
        return this.productDAO.findOne(id.toString())
    }

    update(obj: ProductTO) {
        return this.productDAO.update(obj)
    }

    remove(id: number) {
        return this.productDAO.remove(id.toString())
    }

}

export default ProductManager