import OrderTO from "./OrderTO";
import ProductTO from "./ProductTO";
import MeasureTO from "./MeasureTO";

export default class OrderItemTO {
    private _id?: number;
    private _idOrder?: number;
    private _idProduct?: number;
    private _ammount?: number;
    private _idMeasure?: number;
    private _price?: number;
    private _createdAt?: string;
    private _updatedAt?: string;
    private _order?: OrderTO;
    private _product?: ProductTO;
    private _measure?: MeasureTO;

    constructor(
        id?: number,
        idOrder?: number,
        idProduct?: number,
        ammount?: number,
        idMeasure?: number,
        price?: number,
        createdAt?: string,
        updatedAt?: string,
        order?: OrderTO,
        product?: ProductTO,
        measure?: MeasureTO
    ) {
        this._id = id;
        this._idOrder = idOrder;
        this._idProduct = idProduct;
        this._ammount = ammount;
        this._idMeasure = idMeasure;
        this._price = price;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._order = order;
        this._product = product;
        this._measure = measure;
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get idOrder(): number | undefined {
        return this._idOrder;
    }

    set idOrder(idOrder: number) {
        this._idOrder = idOrder;
    }

    get idProduct(): number | undefined {
        return this._idProduct;
    }

    set idProduct(idProduct: number) {
        this._idProduct = idProduct;
    }

    get ammount(): number | undefined {
        return this._ammount;
    }

    set ammount(ammount: number) {
        this._ammount = ammount;
    }

    get idMeasure(): number | undefined {
        return this._idMeasure;
    }

    set idMeasure(idMeasure: number) {
        this._idMeasure = idMeasure;
    }

    get price(): number | undefined {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
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

    get order(): OrderTO | undefined {
        return this._order;
    }

    set order(order: OrderTO) {
        this._order = order;
    }

    get product(): ProductTO | undefined {
        return this._product;
    }

    set product(product: ProductTO) {
        this._product = product;
    }

    get measure(): MeasureTO | undefined {
        return this._measure;
    }

    set measure(measure: MeasureTO) {
        this._measure = measure;
    }
}