export class User {
    id: number = 0;
    createdAt: Date = null;
    updatedAt: Date = null;

    name: string;
    email: string;
    role: string;
    birthDate: Date = new Date('1996-11-29');

    phone: number = null;
    password: string;
    gender: number = 0;

    departmentID: number = 1;
    userRoleID: number = 1;

    isEmailValid: boolean = true;
    isPhoneValid: boolean = true;

    constructor() {}
}
