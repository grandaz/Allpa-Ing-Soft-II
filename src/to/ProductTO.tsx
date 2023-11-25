export default class ProductTO {
    id?: number;
    name?: string;
    image?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(
        id?: number, 
        name?: string, 
        image?: string, 
        description?: string,
        createdAt?: string, 
        updatedAt?: string
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}