export default class DocTypeTO {

    idDocType?: number;
    name?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(
        idDocType?: number, 
        name?: string, 
        createdAt?: string, 
        updatedAt?: string
    ) {
        this.idDocType = idDocType;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}