import OrderItemTO from "./OrderItemTO";
import UserTO from "./UserTO";
import ProductTO from "./ProductTO";

export default class OrderParticipantTO {
    id?: number;
    idOrderItem?: number;
    idUser?: number;
    idProduct?: number;
    ammount?: number;
    createdAt?: string;
    updatedAt?: string;
    orderItem?: OrderItemTO;
    user?: UserTO;
    product?: ProductTO;

    constructor(
        id?: number, 
        idOrderItem?: number,
        idUser?: number,
        idProduct?: number,
        ammount?: number, 
        createdAt?: string, 
        updatedAt?: string,
        orderItem?: OrderItemTO,
        user?: UserTO,
        product?: ProductTO

    ) {
        this.id = id;
        this.ammount = ammount;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.idOrderItem = idOrderItem;
        this.idUser = idUser;
        this.idProduct = idProduct;
        this.orderItem = orderItem;
        this.user = user;
        this.product = product;
    }

}