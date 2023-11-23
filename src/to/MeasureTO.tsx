export default class MeasureTO {
    private _id?: number;
    private _name?: string;
    private _createdAt?: string;
    private _updatedAt?: string;

    constructor(
        id?: number, 
        name?: string, 
        createdAt?: string, 
        updatedAt?: string
    ) {
        this._id = id;
        this._name = name;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
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