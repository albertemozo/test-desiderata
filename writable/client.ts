export class Client {
    private readonly _id: number;
    private readonly _firstName: string;
    private readonly _lastName: string;
    private readonly _email: string;
    private readonly _phoneNumber: string;
    private readonly _address: string;
    private readonly _city: string;
    private readonly _state: string;
    private readonly _zipCode: string;
    private readonly _country: string;
    private readonly _birthdate: Date;
    private readonly _gender: string;
    private readonly _occupation: string;
    private readonly _company: string;
    private readonly _interests: string[];
    private readonly _createdAt: Date;
    private readonly _updatedAt: Date;
    private readonly _isActive: boolean;
    private readonly _loyaltyPoints: number;
    private readonly _plan: string;
    private readonly _preferredLanguage: string;
    private readonly _preferredContactMethod: string;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        address: string,
        city: string,
        state: string,
        zipCode: string,
        country: string,
        birthdate: Date,
        gender: string,
        occupation: string,
        company: string,
        interests: string[],
        createdAt: Date,
        updatedAt: Date,
        isActive: boolean,
        loyaltyPoints: number,
        plan: string,
        preferredLanguage: string,
        preferredContactMethod: string
    ) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._address = address;
        this._city = city;
        this._state = state;
        this._zipCode = zipCode;
        this._country = country;
        this._birthdate = birthdate;
        this._gender = gender;
        this._occupation = occupation;
        this._company = company;
        this._interests = interests;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._isActive = isActive;
        this._loyaltyPoints = loyaltyPoints;
        this._plan = plan;
        this._preferredLanguage = preferredLanguage;
        this._preferredContactMethod = preferredContactMethod;
    }

    get id(): number {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get email(): string {
        return this._email;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    get address(): string {
        return this._address;
    }

    get city(): string {
        return this._city;
    }

    get state(): string {
        return this._state;
    }

    get zipCode(): string {
        return this._zipCode;
    }

    get country(): string {
        return this._country;
    }

    get birthdate(): Date {
        return this._birthdate;
    }

    get gender(): string {
        return this._gender;
    }

    get occupation(): string {
        return this._occupation;
    }

    get company(): string {
        return this._company;
    }

    get interests(): string[] {
        return this._interests;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    get loyaltyPoints(): number {
        return this._loyaltyPoints;
    }

    get plan(): string {
        return this._plan;
    }

    get preferredLanguage(): string {
        return this._preferredLanguage;
    }

    get preferredContactMethod(): string {
        return this._preferredContactMethod;
    }
}