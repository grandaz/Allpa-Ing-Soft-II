import OrderTO from "./OrderTO";
import ProductTO from "./ProductTO";
import MeasureTO from "./MeasureTO";
import OrderParticipantTO from "./OrderParticipantTO";

export default class OrderItemTO {
    id?: number;
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
    orderParticipants?: OrderParticipantTO[];

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
        this.id = id;
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