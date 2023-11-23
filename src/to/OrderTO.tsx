import UserTO from "./UserTO";

export default class OrderTO {
    idOrder?: number;
    idUser?: number;
    idPayment?: number;
    title?: string;
    description?: string;
    deliveryDate?: string;
    address?: string;
    fgState?: string;
    createdAt?: string;
    updatedAt?: string;
    user?: UserTO;

    constructor(
        idOrder?: number,
        idUser?: number,
        idPayment?: number,
        title?: string,
        description?: string,
        deliveryDate?: string,
        address?: string,
        fgState?: string,
        createdAt?: string,
        updatedAt?: string,
        user?: UserTO
    ) {
        this.idOrder = idOrder;
        this.idUser = idUser;
        this.idPayment = idPayment;
        this.title = title;
        this.description = description;
        this.deliveryDate = deliveryDate;
        this.address = address;
        this.fgState = fgState;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.user = user;
    }

}
