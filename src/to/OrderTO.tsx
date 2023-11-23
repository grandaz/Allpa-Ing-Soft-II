import UserTO from "./UserTO";

export default class OrderTO {
    private _id?: number;
    private _idUser?: number;
    private _idPayment?: number;
    private _title?: string;
    private _description?: string;
    private _deliveryDate?: string;
    private _address?: string;
    private _fgState?: string;
    private _createdAt?: string;
    private _updatedAt?: string;
    private _user?: UserTO;

    constructor(
        id?: number,
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
        this._id = id;
        this._idUser = idUser;
        this._idPayment = idPayment;
        this._title = title;
        this._description = description;
        this._deliveryDate = deliveryDate;
        this._address = address;
        this._fgState = fgState;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._user = user;
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

    get idPayment(): number | undefined {
        return this._idPayment;
    }

    set idPayment(idPayment: number) {
        this._idPayment = idPayment;
    }

    get title(): string | undefined {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get description(): string | undefined {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get deliveryDate(): string | undefined {
        return this._deliveryDate;
    }

    set deliveryDate(deliveryDate: string) {
        this._deliveryDate = deliveryDate;
    }

    get address(): string | undefined {
        return this._address;
    }

    set address(address: string) {
        this._address = address;
    }

    get fgState(): string | undefined {
        return this._fgState;
    }

    set fgState(fgState: string) {
        this._fgState = fgState;
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

}
