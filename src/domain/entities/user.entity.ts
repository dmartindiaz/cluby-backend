import { Data } from "node-lombok"

type RoleT = 'admin' | 'client'

@Data()
class User {
    constructor(
        private userId: string,
        private name: string,
        private surname: string,
        private phone: number,
        private phonecode: number,
        private email: string,
        private created: string,
        private lastConnet: string,
        private age: number,
        private role: RoleT
    ){}
}

export {
    User
}

