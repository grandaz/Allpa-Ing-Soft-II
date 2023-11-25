export default class SupportTO {
    id?: number;
    firstName?: string;
    lastName?: string;
    idProblemType?: number;
    description?: string;
    fgPresential?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(
        id?: number,
        firstName?: string,
        lastName?: string,
        idProblemType?: number,
        description?: string,
        fgPresential?: string,
        createdAt?: string,
        updatedAt?: string,
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.idProblemType = idProblemType;
        this.description = description;
        this.fgPresential = fgPresential;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}