import UserTO from "./UserTO";
import OrderItemTO from "./OrderItemTO";
import OrderParticipantTO from "./OrderParticipantTO";
import ParticipationTO from "./ParticipationTO";

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
    orderItems?: OrderItemTO[];
    orderParticipants?: OrderParticipantTO[];
    participations?: ParticipationTO[];

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
