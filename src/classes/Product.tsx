export default class Product {
    private _product_id: number;
    private _name: string;
    private _image: string;
    private _createdAt: string;
    private _updatedAt: string;

    constructor(
        product_id: number, 
        name: string, 
        image: string, 
        createdAt: string, 
        updatedAt: string
    ) {
        this._product_id = product_id;
        this._name = name;
        this._image = image;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get product_id(): number {
        return this._product_id;
    }

    set product_id(product_id: number) {
        this._product_id = product_id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get image(): string {
        return this._image;
    }

    set image(image: string) {
        this._image = image;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    set createdAt(createdAt: string) {
        this._createdAt = createdAt;
    }

    get updatedAt(): string {
        return this._updatedAt;
    }

    set updatedAt(updatedAt: string) {
        this._updatedAt = updatedAt;
    }
}