import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {

    private users: any = [{
        id: 1,
        nombre: 'Jhon SMitt',
        phone: '123456789'
    },
    {
        id: 1,
        nombre: 'Jhon SMitt',
        phone: '123456789'
    }]
    getUsers() {
        return this.users;
    }

    createUser(user:CreateUserDto){

        this.users.push(user)
        return {
            ...user,
            id:this.users.length + 1
        }
    }
}
