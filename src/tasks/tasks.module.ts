import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
//clase 

//un modulo puede tener varios controladores
@Module({
    
    controllers: [TaskController],
    //aqui vienen los services
    providers:[TasksService],
})
export class TaskModule { }