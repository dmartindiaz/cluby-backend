type RoleT = 'admin' | 'client'

class User {
    private userId: string
    private name: string
    private surname: string
    private phone: number
    private phonecode: number
    private email: string
    private created: string
    private lastConnet: string
    private age: number
    private password: string
    private role: RoleT

    constructor(
        userId: string,
        name: string,
        surname: string,
        phone: number,
        phonecode: number,
        email: string,
        created: string,
        lastConnet: string,
        age: number,
        password: string,
        role: RoleT
    ) {
        this.userId = userId
        this.name = name
        this.surname = surname
        this.phone = phone
        this.phonecode = phonecode
        this.email = email
        this.created = created
        this.lastConnet = lastConnet
        this.age = age
        this.password = password
        this.role = role
    }

    public getUserId(): string {
        return this.userId;
    }

    public setUserId(userId: string): void {
        this.userId = userId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getSurname(): string {
        return this.surname;
    }

    public setSurname(surname: string): void {
        this.surname = surname;
    }

    public getPhone(): number {
        return this.phone;
    }

    public setPhone(phone: number): void {
        this.phone = phone;
    }

    public getPhonecode(): number {
        return this.phonecode;
    }

    public setPhonecode(phonecode: number): void {
        this.phonecode = phonecode;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getCreated(): string {
        return this.created;
    }

    public setCreated(created: string): void {
        this.created = created;
    }

    public getLastConnet(): string {
        return this.lastConnet;
    }

    public setLastConnet(lastConnet: string): void {
        this.lastConnet = lastConnet;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getRole(): RoleT {
        return this.role;
    }

    public setRole(role: RoleT): void {
        this.role = role;
    }

}

export {
    User
}

