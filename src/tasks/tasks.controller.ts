import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
 

@Controller('/tasks')
export class TaskController {

    tasksService:TasksService;

    //inyectar la clase-Funcion que se ejecuta  apenas la clase se instanciada
    constructor(tasksService:TasksService){
        this.tasksService=tasksService
    }
///-------------------------UTILIZAR LOS METODOS DE TAKSSERVICE PARA MANEJARLOS AQUI EN EL CONTROLADOR------------------------------//

    //dentro del decorador viene la ruta
    @Get()
    getAllTasks(@Query() query:any) {
        return this.tasksService.getTask(query)
    }

    @Get('/2')
    getTask(id:number) {
        return this.tasksService.getTaksid(id)
    }


    @Post()
    createTask(@Body() task:any){
        return this.tasksService.createTask(task)
    }
    @Put()
    updateTask(){
        return this.tasksService.updateTask()
    }
    @Delete()
    DeleteTask(){
        return this.tasksService.deleteTask()
    }
    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus()
    }
}