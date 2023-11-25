export default class ProblemTypeTO {
    id?: number;
    name?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(id?: number, 
        name?: string, 
        createdAt?: string, 
        updatedAt?: string
    ) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}