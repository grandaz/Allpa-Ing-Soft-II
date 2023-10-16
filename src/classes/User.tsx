export default class User {
    private _id: number;
    private _first_name: string;
    private _last_name: string;
    private _doc_id: number;
    private _doc_no: string;
    private _telephone: string;
    private _email: string;
    private _password: string;
    private _profileImage: string;
    private _createdAt: string;
    private _updatedAt: string;

    constructor(
        id: number,
        first_name: string,
        last_name: string,
        doc_id: number,
        doc_no: string,
        telephone: string,
        email: string,
        password: string,
        profileImage: string,
        createdAt: string,
        updatedAt: string,
    ) {
        this._id = id;
        this._first_name = first_name;
        this._last_name = last_name;
        this._doc_id = doc_id;
        this._doc_no = doc_no;
        this._telephone = telephone;
        this._email = email;
        this._password = password;
        this._profileImage = profileImage;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get first_name(): string {
        return this._first_name;
    }

    set first_name(first_name: string) {
        this._first_name = first_name;
    }

    get last_name(): string {
        return this._last_name;
    }

    set last_name(last_name: string) {
        this._last_name = last_name;
    }

    get doc_id(): number {
        return this._doc_id;
    }

    set doc_id(doc_id: number) {
        this._doc_id = doc_id;
    }

    get doc_no(): string {
        return this._doc_no;
    }

    set doc_no(doc_no: string) {
        this._doc_no = doc_no;
    }

    get telephone(): string {
        return this._telephone;
    }

    set telephone(telephone: string) {
        this._telephone = telephone;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get profileImage(): string {
        return this._profileImage;
    }

    set profileImage(profileImage: string) {
        this._profileImage = profileImage;
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
}