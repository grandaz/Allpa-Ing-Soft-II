export default class ProblemTypeTO {
    idProblemType?: number;
    name?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(idProblemType?: number, 
        name?: string, 
        createdAt?: string, 
        updatedAt?: string
    ) {
        this.idProblemType = idProblemType;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}