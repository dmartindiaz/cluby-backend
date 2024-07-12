import { User } from "../entities/user.entity"

interface UserRepository {
    create: (user: User) => Promise<User>,
    findAll: () => Promise<User[]>,
    findById: (id: number) => Promise<User>,
    updateUser: (id: number, user: User) => Promise<User>,
    deleteUser: (id: number) => Promise<string>,
    // TODO change type any to type Space in getUserSpaces
    getUserSpaces: (id: number) => Promise<any>  
}

export type {
    UserRepository
}