import { BadRequestException, Injectable } from "@nestjs/common"
import { User } from "../../domain/entities/user.entity"
import { plainToClass } from 'class-transformer';
import type { IUserRepository } from "../../domain/repositories/user.repository.interface"
import type { IUserInDto, IUserOutDto } from "../dto/user/index"

@Injectable()
class UserService {
    constructor(
        private readonly userRepository: IUserRepository
    ) { }

    createUser(userInDTO: IUserInDto): Promise<IUserOutDto> {
        const userInDTOtoUser = plainToClass(User, userInDTO)
        const userRepository = this.userRepository.create(userInDTOtoUser)
        return UserService.userRepositoryToUserOut(userRepository) as Promise<IUserOutDto>
    }

    findUsers(): Promise<IUserOutDto[]> {
        const usersRepository = this.userRepository.findAll()
        return UserService.userRepositoryToUserOut(usersRepository) as Promise<IUserOutDto[]>
    }

    findById(id: number): Promise<IUserOutDto> {
        const userRepository = this.userRepository.findById(id)
        return UserService.userRepositoryToUserOut(userRepository) as Promise<IUserOutDto>
    }

    updateUser(id: number, userInDTO: IUserInDto): Promise<IUserOutDto> {
        const userDTOtoUser = plainToClass(User, userInDTO)
        const userRepository = this.userRepository.updateUser(id, userDTOtoUser)
        return UserService.userRepositoryToUserOut(userRepository) as Promise<IUserOutDto>
    }

    deleteUser(id: number): Promise<string> {
        return this.userRepository.deleteUser(id)
    }

    //TODO create get spaces with spaces DTO
    getUserSpaces(id: number): Promise<any> {
        return this.userRepository.getUserSpaces(id)
    }

    static userRepositoryToUserOut(user: Promise<User | User[]>): Promise<IUserOutDto | IUserOutDto[]> {
        return user.then(user => {
            if(Array.isArray(user)){
                return user.map(user => {
                    return {
                        userId: user.getUserId(),
                        name: user.getName(),
                        surname: user.getSurname(),
                        email: user.getEmail(),
                        age: user.getAge(),
                        phone: user.getPhone(),
                        phonecode: user.getPhonecode(),
                        created: user.getCreated(),
                        role: user.getRole(),
                        lastConnect: user.getLastConnet()
                    }
                })
            }else{
                return {
                    userId: user.getUserId(),
                    name: user.getName(),
                    surname: user.getSurname(),
                    email: user.getEmail(),
                    age: user.getAge(),
                    phone: user.getPhone(),
                    phonecode: user.getPhonecode(),
                    created: user.getCreated(),
                    role: user.getRole(),
                    lastConnect: user.getLastConnet()
                }
            }
        })
    }
}
export {
    UserService
}