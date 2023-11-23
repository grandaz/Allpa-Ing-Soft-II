import UserTO from "./UserTO";
import OrderParticipantTO from "./OrderParticipantTO";

export default class ParticipationTO {
    private _id?: number;
    private _idUser?: number;
    private _idOrderParticipant?: number;
    private _createdAt?: string;
    private _updatedAt?: string;
    private _user?: UserTO;
    private _orderParticipant?: OrderParticipantTO;

    constructor(
        id?: number, 
        idUser?: number,
        idOrderParticipant?: number,
        createdAt?: string, 
        updatedAt?: string,
        user?: UserTO,
        orderParticipant?: OrderParticipantTO
    ) {
        this._id = id;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._idUser = idUser;
        this._idOrderParticipant = idOrderParticipant;
        this._user = user;
        this._orderParticipant = orderParticipant;
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get idUser(): number | undefined {
        return this._idUser;
    }

    set idUser(idUser: number) {
        this._idUser = idUser;
    }

    get idOrderParticipant(): number | undefined {
        return this._idOrderParticipant;
    }

    set idOrderParticipant(idOrderParticipant: number) {
        this._idOrderParticipant = idOrderParticipant;
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
    
    get user(): UserTO | undefined {
        return this._user;
    }

    set user(user: UserTO) {
        this._user = user;
    }

    get orderParticipant(): OrderParticipantTO | undefined {
        return this._orderParticipant;
    }

    set orderParticipant(orderParticipant: OrderParticipantTO) {
        this._orderParticipant = orderParticipant;
    }

}