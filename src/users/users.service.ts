import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [{
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
}
