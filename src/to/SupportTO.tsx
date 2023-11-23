export default class SupportTO {
    idSupport?: number;
    firstName?: string;
    lastName?: string;
    idProblemType?: number;
    description?: string;
    fgPresential?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(
        idSupport?: number,
        firstName?: string,
        lastName?: string,
        idProblemType?: number,
        description?: string,
        fgPresential?: string,
        createdAt?: string,
        updatedAt?: string,
    ) {
        this.idSupport = idSupport;
        this.firstName = firstName;
        this.lastName = lastName;
        this.idProblemType = idProblemType;
        this.description = description;
        this.fgPresential = fgPresential;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}