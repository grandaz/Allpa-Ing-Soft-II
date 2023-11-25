import OrderTO from "./OrderTO";
import UserTO from "./UserTO";
import ProductTO from "./ProductTO";

export default class OrderParticipantTO {
    id?: number;
    idOrder?: number;
    idUser?: number;
    idProduct?: number;
    ammount?: number;
    createdAt?: string;
    updatedAt?: string;
    order?: OrderTO;
    user?: UserTO;
    product?: ProductTO;

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
        this.id = id;
        this.ammount = ammount;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.idOrder = idOrder;
        this.idUser = idUser;
        this.idProduct = idProduct;
        this.order = order;
        this.user = user;
        this.product = product;
    }

}