import UserTO from "./UserTO";
import OrderParticipantTO from "./OrderParticipantTO";

export default class ParticipationTO {
    id?: number;
    idUser?: number;
    idOrderParticipant?: number;
    createdAt?: string;
    updatedAt?: string;
    user?: UserTO;
    orderParticipant?: OrderParticipantTO;

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