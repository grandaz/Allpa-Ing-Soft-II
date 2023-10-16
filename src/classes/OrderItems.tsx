export default class OrderItems {
    private _oritems_id: number;
    private _order_id: number;
    private _product_id: number;
    private _cuantity: number;
    private _measure_id: number;
    private _price: number;
    private _createdAt: string;
    private _updatedAt: string;

    constructor(
        oritems_id: number,
        order_id: number,
        product_id: number,
        cuantity: number,
        measure_id: number,
        price: number,
        createdAt: string,
        updatedAt: string
    ) {
        this._oritems_id = oritems_id;
        this._order_id = order_id;
        this._product_id = product_id;
        this._cuantity = cuantity;
        this._measure_id = measure_id;
        this._price = price;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get oritems_id(): number {
        return this._oritems_id;
    }

    set oritems_id(oritems_id: number) {
        this._oritems_id = oritems_id;
    }

    get order_id(): number {
        return this._order_id;
    }

    set order_id(order_id: number) {
        this._order_id = order_id;
    }

    get product_id(): number {
        return this._product_id;
    }

    set product_id(product_id: number) {
        this._product_id = product_id;
    }

    get cuantity(): number {
        return this._cuantity;
    }

    set cuantity(cuantity: number) {
        this._cuantity = cuantity;
    }

    get measure_id(): number {
        return this._measure_id;
    }

    set measure_id(measure_id: number) {
        this._measure_id = measure_id;
    }

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
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