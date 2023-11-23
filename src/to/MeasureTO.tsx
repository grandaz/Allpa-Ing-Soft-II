export default class MeasureTO {
    idMeasure?: number;
    name?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(
        idMeasure?: number, 
        name?: string, 
        createdAt?: string, 
        updatedAt?: string
    ) {
        this.idMeasure = idMeasure;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}