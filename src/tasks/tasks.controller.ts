import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO, UpdateTaskDTO } from "./dto/tasks.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
 

@Controller('/tasks')
export class TaskController {

    tasksService:TasksService;

    //inyectar la clase-Funcion que se ejecuta  apenas la clase se instanciada
    constructor(tasksService:TasksService){
        this.tasksService=tasksService
    }
///-------------------------UTILIZAR LOS METODOS DE TAKSSERVICE PARA MANEJARLOS AQUI EN EL CONTROLADOR------------------------------//

    //dentro del decorador viene la ruta
    @ApiTags('tasks')
    @Get()
    @ApiOperation({summary:'Obtener todas la tareas'})
    @ApiResponse({status:200,description:'Return all tasks.'})
    @ApiResponse({status:401,description:'Error tareas'})
    getAllTasks(@Query() query:any) {
        return this.tasksService.getTask(query)
    }

    @ApiTags('tasks')
    @Get('/:id')
    @ApiOperation({summary:'obtener tarea por id'})
    getTask(@Param('id') id:string) {
        return this.tasksService.getTaksid(parseInt(id))
    }

    @ApiTags('tasks')
    @Post()
    @UsePipes()
    createTask(@Body() task:CreateTaskDTO){
        return this.tasksService.createTask(task)
    }
    @ApiTags('tasks')
    @Put()
    updateTask(@Body() task:UpdateTaskDTO){
        return this.tasksService.updateTask(task)
    }
    @ApiTags('tasks')
    @Delete()
    DeleteTask(){
        return this.tasksService.deleteTask()
    }
    @ApiTags('tasks')
    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus()
    }
}