import OrderTO from "./OrderTO";
import UserTO from "./UserTO";
import ProductTO from "./ProductTO";

export default class OrderParticipantTO {
    private _id?: number;
    private _idOrder?: number;
    private _idUser?: number;
    private _idProduct?: number;
    private _ammount?: number;
    private _createdAt?: string;
    private _updatedAt?: string;
    private _order?: OrderTO;
    private _user?: UserTO;
    private _product?: ProductTO;

    constructor(
        id?: number, 
        idOrder?: number,
        idUser?: number,
        idProduct?: number,
        ammount?: number, 
        createdAt?: string, 
        updatedAt?: string,
        order?: OrderTO,
        user?: UserTO,
        product?: ProductTO

    ) {
        this._id = id;
        this._ammount = ammount;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._idOrder = idOrder;
        this._idUser = idUser;
        this._idProduct = idProduct;
        this._order = order;
        this._user = user;
        this._product = product;
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

    get idUser(): number | undefined {
        return this._idUser;
    }

    set idUser(idUser: number) {
        this._idUser = idUser;
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

    get user(): UserTO | undefined {
        return this._user;
    }

    set user(user: UserTO) {
        this._user = user;
    }

    get product(): ProductTO | undefined {
        return this._product;
    }

    set product(product: ProductTO) {
        this._product = product;
    }

}