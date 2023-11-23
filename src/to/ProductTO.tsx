export default class ProductTO {
    private _id?: number;
    private _name?: string;
    private _image?: string;
    private _description?: string;
    private _createdAt?: string;
    private _updatedAt?: string;

    constructor(
        id?: number, 
        name?: string, 
        image?: string, 
        description?: string,
        createdAt?: string, 
        updatedAt?: string
    ) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._description = description;
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

    get image(): string | undefined {
        return this._image;
    }

    set image(image: string) {
        this._image = image;
    }

    get description(): string | undefined {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
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