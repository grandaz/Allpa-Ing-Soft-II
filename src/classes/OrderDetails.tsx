import User from "./User";

export default class OrderDetails {
    private _ordetail_id: number;
    private _user_id: number;
    private _payment_id: number;
    private _titulo: string;
    private _descripcion: string;
    private _fecha_entrega: string;
    private _createdAt: string;
    private _updatedAt: string;
    private _user?: User;

    constructor(
        ordetail_id: number,
        user_id: number,
        payment_id: number,
        titulo: string,
        descripcion: string,
        fecha_entrega: string,
        createdAt: string,
        updatedAt: string,
        user?: User
    ) {
        this._ordetail_id = ordetail_id;
        this._user_id = user_id;
        this._payment_id = payment_id;
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._fecha_entrega = fecha_entrega;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._user = user;
    }

    get ordetail_id(): number {
        return this._ordetail_id;
    }

    set ordetail_id(ordetail_id: number) {
        this._ordetail_id = ordetail_id;
    }

    get user_id(): number {
        return this._user_id;
    }

    set user_id(user_id: number) {
        this._user_id = user_id;
    }

    get payment_id(): number {
        return this._payment_id;
    }

    set payment_id(payment_id: number) {
        this._payment_id = payment_id;
    }

    get titulo(): string {
        return this._titulo;
    }

    set titulo(titulo: string) {
        this._titulo = titulo;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(descripcion: string) {
        this._descripcion = descripcion;
    }

    get fecha_entrega(): string {
        return this._fecha_entrega;
    }

    set fecha_entrega(fecha_entrega: string) {
        this._fecha_entrega = fecha_entrega;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    set createdAt(createdAt: string) {
        this._createdAt = createdAt;
    }

    get updatedAt(): string {
        return this._updatedAt;
    }

    set updatedAt(updatedAt: string) {
        this._updatedAt = updatedAt;
    }

    get user(): User | undefined {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }

}
