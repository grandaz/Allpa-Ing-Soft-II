export default class ProductTO {
    idProduct?: number;
    name?: string;
    image?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(
        idProduct?: number, 
        name?: string, 
        image?: string, 
        description?: string,
        createdAt?: string, 
        updatedAt?: string
    ) {
        this.idProduct = idProduct;
        this.name = name;
        this.image = image;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}