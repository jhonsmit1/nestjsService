import { Controller, Get, Post,Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/users.dto';
import { ApiTags } from '@nestjs/swagger';
@Controller({})
export class UsersController {
    //inyectar el userService
    constructor(private usersService:UsersService){}

    @ApiTags('Users')
    @Get('/users')
    getUsers(){
        return this.usersService.getUsers();
    }

    @ApiTags('Users')
    @Post('/users')
    createUser(@Body() user:CreateUserDto){
        return this.usersService.createUser(user);
    }

}
