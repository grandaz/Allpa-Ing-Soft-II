export default class UserTO {
    private _id?: number;
    private _firstName?: string;
    private _lastName?: string;
    private _idDocType?: number;
    private _noDoc?: string;
    private _telephone?: string;
    private _email?: string;
    private _password?: string;
    private _profileImage?: string;
    private _createdAt?: string;
    private _updatedAt?: string;

    constructor(
        id?: number,
        firstName?: string,
        lastName?: string,
        idDocType?: number,
        noDoc?: string,
        telephone?: string,
        email?: string,
        password?: string,
        profileImage?: string,
        createdAt?: string,
        updatedAt?: string,
    ) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._idDocType = idDocType;
        this._noDoc = noDoc;
        this._telephone = telephone;
        this._email = email;
        this._password = password;
        this._profileImage = profileImage;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get firstName(): string | undefined {
        return this._firstName;
    }

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    get lastName(): string | undefined {
        return this._lastName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    get idDocType(): number | undefined {
        return this._idDocType;
    }

    set idDocType(idDocType: number) {
        this._idDocType = idDocType;
    }

    get noDoc(): string | undefined {
        return this._noDoc;
    }

    set noDoc(noDoc: string) {
        this._noDoc = noDoc;
    }

    get telephone(): string | undefined {
        return this._telephone;
    }

    set telephone(telephone: string) {
        this._telephone = telephone;
    }

    get email(): string | undefined {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get password(): string | undefined {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get profileImage(): string | undefined {
        return this._profileImage;
    }

    set profileImage(profileImage: string) {
        this._profileImage = profileImage;
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
}