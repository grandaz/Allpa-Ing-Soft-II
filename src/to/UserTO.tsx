export default class UserTO {
    idUser?: number;
    firstName?: string;
    lastName?: string;
    idDocType?: number;
    noDoc?: string;
    telephone?: string;
    email?: string;
    password?: string;
    profileImage?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(
        idUser?: number,
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
        this.idUser = idUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.idDocType = idDocType;
        this.noDoc = noDoc;
        this.telephone = telephone;
        this.email = email;
        this.password = password;
        this.profileImage = profileImage;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}