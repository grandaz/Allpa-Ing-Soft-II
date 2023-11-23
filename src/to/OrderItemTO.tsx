import OrderTO from "./OrderTO";
import ProductTO from "./ProductTO";
import MeasureTO from "./MeasureTO";

export default class OrderItemTO {
    idOrderItem?: number;
    idOrder?: number;
    idProduct?: number;
    ammount?: number;
    idMeasure?: number;
    price?: number;
    createdAt?: string;
    updatedAt?: string;
    order?: OrderTO;
    product?: ProductTO;
    measure?: MeasureTO;

    constructor(
        idOrderItem?: number,
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
        this.idOrderItem = idOrderItem;
        this.idOrder = idOrder;
        this.idProduct = idProduct;
        this.ammount = ammount;
        this.idMeasure = idMeasure;
        this.price = price;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.order = order;
        this.product = product;
        this.measure = measure;
    }

}