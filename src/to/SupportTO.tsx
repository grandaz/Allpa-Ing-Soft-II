export default class SupportTO {
    private _id?: number;
    private _firstName?: string;
    private _lastName?: string;
    private _idProblemType?: number;
    private _description?: string;
    private _fgPresential?: string;
    private _createdAt?: string;
    private _updatedAt?: string;

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
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._idProblemType = idProblemType;
        this._description = description;
        this._fgPresential = fgPresential;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get firstName(): string | undefined {
        return this._firstName;
    }

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    get lastName(): string | undefined {
        return this._lastName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    get idProblemType(): number | undefined {
        return this._idProblemType;
    }

    set idProblemType(idProblemType: number) {
        this._idProblemType = idProblemType;
    }

    get description(): string | undefined {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get fgPresential(): string | undefined {
        return this._fgPresential;
    }

    set fgPresential(fgPresential: string) {
        this._fgPresential = fgPresential;
    }

    get createdAt(): string | undefined {
        return this._createdAt;
    }

    set createdAt(createdAt: string) {
        this._createdAt = createdAt;
    }

    get updatedAt(): string | undefined {
        return this._updatedAt;
    }

    set updatedAt(updatedAt: string) {
        this._updatedAt = updatedAt;
    }
}