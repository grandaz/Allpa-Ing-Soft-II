import UserTO from "./UserTO";
import OrderParticipantTO from "./OrderParticipantTO";
import OrderTO from "./OrderTO";

export default class ParticipationTO {
    id?: number;
    idUser?: number;
    idOrderParticipant?: number;
    idOrder?: number;
    createdAt?: string;
    updatedAt?: string;
    user?: UserTO;
    orderParticipant?: OrderParticipantTO;
    order?: OrderTO;

    constructor(
        id?: number, 
        idUser?: number,
        idOrderParticipant?: number,
        createdAt?: string, 
        updatedAt?: string,
        user?: UserTO,
        orderParticipant?: OrderParticipantTO
    ) {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.idUser = idUser;
        this.idOrderParticipant = idOrderParticipant;
        this.user = user;
        this.orderParticipant = orderParticipant;
    }


}